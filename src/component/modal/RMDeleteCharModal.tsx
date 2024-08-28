import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const RMDeleteCharModal: React.FC<ModalProps> = ({ open, onClose, onDelete }) => {
    return (
        <Dialog
            open={ open }
            onClose={ onClose }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Do you want to delete the character?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ onClose }>Close</Button>
                <Button onClick={ onDelete } color="error">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default RMDeleteCharModal;
