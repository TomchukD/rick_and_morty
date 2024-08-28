import { Button, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CharacterModal from 'src/component/modal/characterModal';
import React, { useState } from 'react';
import FilterMenu from 'src/component/filter/filterDialog';

function RMBar() {
    const [isOpenChar, setIsOpenChar] = useState(false);

    const handleOpen = () => {
        setIsOpenChar(true);
    };

    const handleClose = () => {
        setIsOpenChar(false);
    };

    return (
        <Stack direction="row" spacing={ 1 }>
            <Button onClick={ handleOpen }><AddCircleIcon/></Button>
            <FilterMenu/>
            <CharacterModal open={ isOpenChar } handleClose={ handleClose }/>
        </Stack>
    );
}

export default RMBar;
