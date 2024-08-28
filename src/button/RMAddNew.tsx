import { Button, Stack } from '@mui/material';
import RMCharacterModal from 'src/component/modal/RMCharacterModal';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


function RMAddNew() {
    const [isOpenChar, setIsOpenChar] = useState(false);

    const handleOpen = () => {
        setIsOpenChar(true);
    };

    const handleClose = () => {
        setIsOpenChar(false);
    };

    return (
        <Stack direction="row" spacing={ 1 }>
            <Button variant="contained" onClick={ handleOpen } color="primary" startIcon={ <AddIcon/> }>
                Add new
            </Button>
            {
                isOpenChar && (
                    <RMCharacterModal open={ isOpenChar } handleClose={ handleClose }/>
                )
            }
        </Stack>
    );
}

export default RMAddNew;
