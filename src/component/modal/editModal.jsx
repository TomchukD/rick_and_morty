import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { defaultCharacter } from "./default";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../redux/charactersSlice";
import { Button, Grid, MenuItem, TextField } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditModal({open, handleClose, characterData}) {
    const [character, setCharacter] = useState(characterData || defaultCharacter);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCharacter({...character, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCharacter(character))
    };
    return (
        <div>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ style }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <form onSubmit={ handleSubmit }>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={ character.name }
                                    onChange={ handleChange }
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <TextField
                                    label="Status"
                                    name="status"
                                    select
                                    value={ character.status }
                                    onChange={ handleChange }
                                    fullWidth
                                >
                                    <MenuItem value="Alive">Alive</MenuItem>
                                    <MenuItem value="Dead">Dead</MenuItem>
                                    <MenuItem value="unknown">Unknown</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <TextField
                                    label="Species"
                                    name="species"
                                    value={ character.species }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Type"
                                    name="type"
                                    value={ character.type }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <TextField
                                    label="Gender"
                                    name="gender"
                                    select
                                    value={ character.gender }
                                    onChange={ handleChange }
                                    fullWidth
                                >
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Genderless">Genderless</MenuItem>
                                    <MenuItem value="unknown">Unknown</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Location Name"
                                    name="location.name"
                                    value={ character.location.name }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Location URL"
                                    name="location.url"
                                    value={ character.location.url }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Original Name"
                                    name="original.name"
                                    value={ character.original.name }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Original URL"
                                    name="original.url"
                                    value={ character.original.url }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Image URL"
                                    name="image"
                                    value={ character.image }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Episode URLs (comma separated)"
                                    name="episode"
                                    value={ character.episode.join(',') }
                                    onChange={ (e) => setCharacter({...character, episode: e.target.value.split(',')}) }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Character URL"
                                    name="url"
                                    value={ character.url }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <Button type="submit" variant="contained" color="primary">
                                    Зберегти
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}