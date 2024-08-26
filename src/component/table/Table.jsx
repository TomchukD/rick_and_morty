import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Controls from "../cell/controlls";

function RM_table() {
    const data = [1, 3]
    return (
        <TableContainer component={ Paper }>
            <Table sx={ {
                width: {xs: '100%', md: '80%'},
                margin: 'auto',
                mt: 4
            } }>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data.map((row, index) => (
                        <TableRow key={ index }>
                            <TableCell align="left">{ row.name }</TableCell>
                            <TableCell align="left">{ row.state }</TableCell>
                            <TableCell align="left">{ row.type }</TableCell>
                            <TableCell align="left"><Controls/></TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RM_table;
