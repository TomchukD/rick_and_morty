import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Controls from '../cell/controlls';
import { fetchCharacter, selectCharters } from 'src/redux/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from 'src/interface/interface';
import { useEffect } from 'react';
import { BASE_API } from 'src/API/API';


function RM_table() {
    let charterList: Character[] = useSelector(selectCharters);
    const dispatch = useDispatch<any>();
    useEffect(() => {
        dispatch(fetchCharacter(BASE_API));
    }, [dispatch]);


    if (!charterList.length) {
        charterList = [];
    }
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
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        charterList.map((row, index) => (
                            <TableRow key={ index }>
                                <TableCell align="left">{ row.name }</TableCell>
                                <TableCell align="left">{ row.species }</TableCell>
                                <TableCell align="left">{ row.type ? row.type : '-' }</TableCell>
                                <TableCell align="right"><Controls character={ row }/></TableCell>
                            </TableRow>
                        )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RM_table;
