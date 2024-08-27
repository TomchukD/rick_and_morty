import { Button, Input, InputAdornment, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CharacterModal from 'src/component/modal/characterModal';
import React, { useState } from 'react';

function RMBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <Stack direction="row" spacing={ 1 }>
            <Button onClick={ handleOpen }><AddCircleIcon/></Button>
            <Input startAdornment={
                <InputAdornment position="start">
                    <FilterAltIcon/>
                </InputAdornment>
            }/>
            <CharacterModal open={ isOpen } handleClose={ handleClose }/>
        </Stack>
    );
}

export default RMBar;
