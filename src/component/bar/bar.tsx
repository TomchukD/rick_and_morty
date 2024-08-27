import { Button, Input, InputAdornment, Stack } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function RMBar() {

    return (
        <Stack direction='row' spacing={1}>
            <Button><AddCircleIcon /></Button>
            <Input startAdornment={
                <InputAdornment position="start">
                    <FilterAltIcon />
                </InputAdornment>
            } />
        </Stack>
    );
}

export default RMBar;
