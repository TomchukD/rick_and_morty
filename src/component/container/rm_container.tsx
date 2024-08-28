import RMTable from "../table/Table";

import { Stack, Typography } from '@mui/material';
import RMButtonAddNew from "src/button/addNew";
import FilterMenu from "../filter/filterDialog";

function RMContainer() {
    return (
        <>
            <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Typography variant="h5">Character</Typography>
                <Stack direction='row' sx={{ gap: 1 }}>
                    <RMButtonAddNew />
                    <FilterMenu />
                </Stack>
            </Stack >

            <RMTable></RMTable>
        </>

    );
}

export default RMContainer;
