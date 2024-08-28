import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Controls from './cell/controlls';
import { fetchCharacter, selectCharters } from 'src/redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from 'src/interface/interface';
import React, { useEffect } from 'react';
import { BASE_API } from 'src/API/API';
import { selectName, selectStatus } from 'src/redux/filterSlice';
import { TypeChar } from 'src/Type/type';


const headerRows: string[]=['Name','Species','Type', "Status"]

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
        <TableContainer sx={{ maxHeight: '85vh', maxWidth: '90vw',margin: 'auto' }} component={ Paper }>
            <Table stickyHeader sx={ {
                width: { xs: '100%' },
                margin: 'auto',
            } }>
                <TableHead>
                    <TableRow>
                        {
                            headerRows.map((item, index) =>
                                (<TableCell style={{fontWeight: 700}} key={index} align="left">{item}</TableCell>)
                            )
                        }
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
