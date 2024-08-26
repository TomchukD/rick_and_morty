import { Button, ButtonGroup, Stack } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

function Controls({charter}) {

    const navigate = useNavigate();

    const handleOpenDetails = () => {
        navigate(`/detail/${ charter }`);
    }
    return (
        <Stack direction='row' spacing={ 1 }>
            <ButtonGroup>
                <Button><EditIcon/></Button>
                <Button><DeleteIcon/></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={ handleOpenDetails }><InfoIcon/></Button>
            </ButtonGroup>
        </Stack>
    );
}

export default Controls;
