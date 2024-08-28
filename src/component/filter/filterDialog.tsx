import React, { useState } from 'react';
import {
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Menu,
    MenuItem,
    Box,
    IconButton
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { resetFilter, setFilterName, setFilterStatus } from 'src/redux/filterSlice';
import { TypeChar } from 'src/Type/type';

function FilterMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [name, setName] = useState<string | null>(null);
    const [statusChar, setStatusChar] = useState<TypeChar | null>(null);
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatusChar(event.target.value as TypeChar | null);
    };

    const handleResetName = () => {
        setName('');
    };

    const handleResetRadio = () => {
        setStatusChar(null);
    };

    const handleResetAll = () => {
        handleResetName();
        handleResetRadio();
        dispatch(resetFilter(null));
    };

    const handleApply = () => {
        dispatch(setFilterName(name));
        dispatch(setFilterStatus(statusChar));
        handleClose();
    };

    return (
        <div>
            <IconButton color="primary" onClick={ handleClick }>
                <FilterListIcon/>
            </IconButton>
            <Menu
                anchorEl={ anchorEl }
                open={ Boolean(anchorEl) }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'left'
                } }
                transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'left'
                } }
            >
                <MenuItem>
                    <FormControl fullWidth>
                        <TextField
                            label="Search by Name"
                            value={ name }
                            onChange={ handleNameChange }
                            InputProps={ {
                                endAdornment: (
                                    <Button onClick={ handleResetName } variant="outlined" size="small">
                                        <ClearIcon/>
                                    </Button>
                                )
                            } }
                        />
                    </FormControl>
                </MenuItem>
                <MenuItem>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Search by Status</FormLabel>
                        <RadioGroup value={ statusChar } onChange={ handleRadioChange }>
                            <FormControlLabel value="Alive" control={ <Radio/> } label="Alive"/>
                            <FormControlLabel value="Dead" control={ <Radio/> } label="Dead"/>
                            <FormControlLabel value="unknown" control={ <Radio/> } label="Unknown"/>
                        </RadioGroup>
                        <Button onClick={ handleResetRadio } variant="outlined">
                            <ClearIcon/>
                        </Button>
                    </FormControl>
                </MenuItem>
                <MenuItem>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Button onClick={ handleResetAll } variant="outlined" size="small">
                            Reset All
                        </Button>
                        <Button onClick={ handleApply } variant="contained" color="primary" size="small">
                            Apply
                        </Button>
                    </Box>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default FilterMenu;