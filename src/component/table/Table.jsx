import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function RM_table() {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">123</TableCell>
                        <TableCell align="left">1234</TableCell>
                        <TableCell align="left">1236</TableCell>
                        <TableCell align="left">1235</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RM_table;
