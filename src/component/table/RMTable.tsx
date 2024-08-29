import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import { fetchCharacter, selectCharters } from 'src/redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from 'src/interface/interface';
import React, { useEffect, useMemo } from 'react';
import { BASE_API } from 'src/API/API';
import { selectName, selectStatus } from 'src/redux/filterSlice';
import { TypeChar } from 'src/Type/type';
import RMControls from 'src/component/table/cell/RMControlls';
import { RootState } from 'src/redux/store';
import { setPage, setRowPerPage } from 'src/redux/paginationSlice';

const headerRows: string[] = ['Name', 'Species', 'Type', 'Status'];

const RMTable = () => {
    const charterList: Character[] = useSelector(selectCharters);
    const filterName: string | null = useSelector(selectName);
    const filterStatus: TypeChar | null = useSelector(selectStatus);
    const { page, rowsPerPage } = useSelector((state: RootState) => state.pagination);
    const handlePageChange = (event: unknown, newPage: number) => {
        dispatch(setPage(newPage));
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRowPerPage(parseInt(event.target.value, 10)));
    };

    const filteredCharters = useMemo(() => {
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
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    { filteredCharters.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={ index }>
                            <TableCell sx={ { minWidth: '200px' } } align="left">{ row.name }</TableCell>
                            <TableCell sx={ { minWidth: '100px' } } align="left">{ row.species }</TableCell>
                            <TableCell sx={ { minWidth: '250px' } }
                                       align="left">{ row.type ? row.type : '-' }</TableCell>
                            <TableCell sx={ { minWidth: '100px' } } align="left">{ row.status }</TableCell>
                            <TableCell align="right"><RMControls character={ row }/></TableCell>
                        </TableRow>
                    )) }
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={ [5, 10] }
                        count={ filteredCharters.length }
                        page={ page }
                        onPageChange={ handlePageChange }
                        rowsPerPage={ rowsPerPage }
                        onRowsPerPageChange={ handleRowsPerPageChange }
                    />
                </TableFooter>

            </Table>
        </TableContainer>
    );
};

export default RMTable;
