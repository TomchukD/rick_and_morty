import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { fetchCharacter, selectCharters } from 'src/redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from 'src/interface/interface';
import React, { useEffect } from 'react';
import { BASE_API } from 'src/API/API';
import { selectName, selectStatus } from 'src/redux/filterSlice';
import { TypeChar } from 'src/Type/type';
import RMControls from 'src/component/table/cell/RMControlls';

const headerRows: string[] = ['Name', 'Species', 'Type', 'Status'];

const RMTable = () => {
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
        <TableContainer
            sx={ {
                maxHeight: '90vh',
                height: '100vh',
                maxWidth: '100vw',
                overflow: 'auto',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column'
            } }
            component={ Paper }
        >
            <Table stickyHeader sx={ { minWidth: 650 } }>
                <TableHead>
                    <TableRow>
                        { headerRows.map((item, index) => (
                            <TableCell
                                style={ { fontWeight: 700 } }
                                key={ index }
                                align="left"
                            >
                                { item }
                            </TableCell>
                        )) }
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { filteredCharters.map((row, index) => (
                        <TableRow key={ index }>
                            <TableCell align="left">{ row.name }</TableCell>
                            <TableCell align="left">{ row.species }</TableCell>
                            <TableCell align="left">{ row.type ? row.type : '-' }</TableCell>
                            <TableCell align="left">{ row.status }</TableCell>
                            <TableCell align="right"><RMControls character={ row }/></TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RMTable;
