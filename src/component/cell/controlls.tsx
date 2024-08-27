import { Button, ButtonGroup, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Character } from 'src/interface/interface';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCharacter } from 'src/redux/charactersSlice';

interface ControlsProps {
    character: Character;
}

const Controls: React.FC<ControlsProps> = ({ character }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenDetails = () => {
        navigate(`/detail/${ character.id }`);
    };
    const handleEdit = () => {
    };
    const handleDelete = () => {
        dispatch(deleteCharacter(character.id));
    };

    return (
        <Stack direction="row" spacing={ 1 }>
            <ButtonGroup>
                <Button onClick={ handleEdit }><EditIcon/></Button>
                <Button onClick={ handleDelete }><DeleteIcon/></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={ handleOpenDetails }><InfoIcon/></Button>
            </ButtonGroup>
        </Stack>
    );
};

export default Controls;
