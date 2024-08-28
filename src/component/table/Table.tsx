import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Controls from './cell/controlls';
import { fetchCharacter, selectCharters } from 'src/redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from 'src/interface/interface';
import React, { useEffect } from 'react';
import { BASE_API } from 'src/API/API';
import { selectName, selectStatus } from 'src/redux/filterSlice';
import { TypeChar } from 'src/Type/type';


function RM_table() {
    const charterList: Character[] = useSelector(selectCharters);
    const filterName: string | null = useSelector(selectName);
    const filterStatus: TypeChar | null = useSelector(selectStatus);
    const filteredCharters = React.useMemo(() => {
        if (!charterList || (!filterName && !filterStatus)) {
            return charterList;
        }

        const filterByName = (item: Character) => {
            if (!filterName) {
                return true;
            }
            return item.name.toLowerCase().includes(filterName.toLowerCase());
        };

        const filterByStatus = (item: Character) => {
            if (!filterStatus) {
                return true;
            }
            return item.status === filterStatus;
        };

        return charterList.filter((item) => filterByName(item) && filterByStatus(item));
    }, [charterList, filterName, filterStatus]);
    const dispatch = useDispatch<any>();
    useEffect(() => {
        if (!filteredCharters.length) {
            dispatch(fetchCharacter(BASE_API));
        }
    }, [filteredCharters.length, dispatch]);

    return (
        <TableContainer component={ Paper }>
            <Table sx={ {
                width: { xs: '100%', md: '80%' },
                margin: 'auto',
                mt: 4
            } }>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell>Species</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredCharters.map((row, index) => (
                            <TableRow key={ index }>
                                <TableCell align="left">{ row.name }</TableCell>
                                <TableCell align="left">{ row.species }</TableCell>
                                <TableCell align="left">{ row.type ? row.type : '-' }</TableCell>
                                <TableCell align="left">{ row.status }</TableCell>
                                <TableCell align="right"><Controls character={ row }/></TableCell>
                            </TableRow>
                        )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RM_table;
