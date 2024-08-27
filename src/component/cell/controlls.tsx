import { Button, ButtonGroup, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Character } from 'src/interface/interface';
import React from 'react';

interface ControlsProps {
    character: Character;
}

const Controls: React.FC<ControlsProps> = ({ character }) => {

    const navigate = useNavigate();

    const handleOpenDetails = () => {
        navigate(`/detail/${ character.id }`);
    };
    return (
        <Stack direction="row" spacing={ 1 }>
            <ButtonGroup>
                <Button><EditIcon/></Button>
                <Button><DeleteIcon/></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={ handleOpenDetails }><InfoIcon/></Button>
            </ButtonGroup>
        </Stack>
    );
};

export default Controls;
