import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { defaultCharacter } from './default';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../../redux/charactersSlice';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import styles from '../modal/modal.module.css';
import { Character } from 'src/interface/interface';

interface ScrollableModalProps {
    open: boolean;
    handleClose: () => void;
    characterData?: Character;
}

const CharacterModal: React.FC<ScrollableModalProps> = ({ open, handleClose, characterData }) => {
    const [character, setCharacter] = useState(characterData || defaultCharacter);
    const isEdit = !!characterData;
    const dispatch = useDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCharacter({ ...character, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        character.id = character.id || Math.floor(Math.random() * 1000000);
        dispatch(addCharacter(character as Character));
        setCharacter(defaultCharacter);
        handleClose();
    };
    return (
        <div>
            <Modal
                open={ open }
                onClose={ handleClose }
                disableScrollLock={ false }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={ styles.modal }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {
                            isEdit ? 'Edit Character' : 'Add new Character'
                        }
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
                                    value={ character.location?.name }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Location URL"
                                    name="location.url"
                                    value={ character.location?.url }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Original Name"
                                    name="original.name"
                                    value={ character.original?.name }
                                    onChange={ handleChange }
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    label="Original URL"
                                    name="original.url"
                                    value={ character.original?.url }
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
                                    onChange={ (e) => setCharacter({
                                        ...character,
                                        episode: e.target.value ? e.target.value.split(',') : []
                                    }) }
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
};

export default CharacterModal;