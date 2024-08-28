import { useDispatch } from 'react-redux';
import { resetFilter, setFilterName, setFilterStatus } from 'src/redux/filterSlice';

import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Box,
    IconButton,
    Popover,
    FormLabel
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { TypeChar } from 'src/Type/type';


function FilterComponent() {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleApply = () => {
        dispatch(setFilterName(name));
        dispatch(setFilterStatus(status as TypeChar));
        handleClose();
    };

    const handleReset = () => {
        setName('');
        setStatus('');
        dispatch(resetFilter(null));
    };

    return (
        <div>
            <IconButton aria-describedby={ id } onClick={ handleClick }>
                <FilterListIcon/>
            </IconButton>
            <Popover
                id={ id }
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'right'
                } }
                transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'right'
                } }
            >
                <Box
                    sx={ {
                        padding: 2,
                        backgroundColor: 'white',
                        borderRadius: 1,
                        boxShadow: 3,
                        width: 300
                    } }
                >
                    <TextField
                        label="Search by Name"
                        variant="outlined"
                        fullWidth
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        sx={ { marginBottom: 2 } }
                    />
                    <FormControl component="fieldset">
                        <FormLabel>
                            Search by Status
                        </FormLabel>
                        <RadioGroup
                            aria-label="status"
                            name="status"
                            value={ status }
                            onChange={ (e) => setStatus(e.target.value) }
                        >
                            <FormControlLabel value="Alive" control={ <Radio/> } label="Alive"/>
                            <FormControlLabel value="Dead" control={ <Radio/> } label="Dead"/>
                            <FormControlLabel value="Unknown" control={ <Radio/> } label="Unknown"/>
                        </RadioGroup>
                    </FormControl>
                    <Box sx={ { display: 'flex', justifyContent: 'space-between', marginTop: 2 } }>
                        <Button variant="outlined" color="secondary" onClick={ handleReset }>
                            RESET ALL
                        </Button>
                        <Button variant="contained" color="primary" onClick={ handleApply }>
                            APPLY
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </div>
    );
}

export default FilterComponent;
