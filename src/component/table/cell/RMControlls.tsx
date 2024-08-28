import { Button, ButtonGroup, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Character } from 'src/interface/interface';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCharacter } from 'src/redux/charactersSlice';
import RMCharacterModal from 'src/component/modal/RMCharacterModal';
import RMDeleteCharModal from 'src/component/modal/RMDeleteCharModal';

interface ControlsProps {
    character: Character;
}

const RMControls: React.FC<ControlsProps> = ({ character }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenDetails = () => {
        navigate(`/detailed/${ character.id }`);
    };
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDeleteClose = () => {
        setIsDelete(false);
    };
    const handleDeleteChar = () => {
        dispatch(deleteCharacter(character.id!));
        setIsDelete(false);
    };

    return (
        <Stack direction="row" spacing={ 1 } sx={ {
            justifyContent: 'flex-end'
        } }>
            <ButtonGroup>
                <Button onClick={ handleOpen }><EditIcon/></Button>
                <Button onClick={ () => setIsDelete(true) }><DeleteIcon/></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={ handleOpenDetails }><InfoIcon/></Button>
            </ButtonGroup>
            {
                isOpen && (
                    <RMCharacterModal open={ isOpen } handleClose={ handleClose } characterData={ character }/>
                )
            }{
            isDelete && (
                <RMDeleteCharModal open={ isDelete } onClose={ handleDeleteClose } onDelete={ handleDeleteChar }/>
            )
        }

        </Stack>
    );
};

export default RMControls;
