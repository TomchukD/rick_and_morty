import { Box, Stack, Typography } from '@mui/material';
import RMButtonAddNew from 'src/button/RMAddNew';
import FilterMenu from 'src/component/filter/RMFilterDialog';
import RMTable from 'src/component/table/RMTable';

const RMContainer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
        }}>
            <Stack direction="row" sx={ { display: 'flex', justifyContent: 'space-between', p: 2 } }>
                <Typography variant="h5">Character</Typography>
                <Stack direction="row" sx={ { gap: 1 } }>
                    <RMButtonAddNew/>
                    <FilterMenu/>
                </Stack>
            </Stack>

            <RMTable></RMTable>
        </Box>

    );
};

export default RMContainer;
