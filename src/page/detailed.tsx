import {
    Typography,
    Paper,
    Grid,
    Avatar,
    useMediaQuery,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Collapse
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { useEffect, useState } from 'react';
import { fetchCharacterById } from 'src/redux/detailedSlice';
import { BASE_API } from 'src/API/API';

function Detailed() {
    const { characterId } = useParams<{ characterId: string }>();
    const isMobile = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch<any>();
    const character = useSelector((state: RootState) => state.characters.character.find(item => item.id!.toString() === characterId));
    const [openEpisodes, setOpenEpisodes] = useState(false);

    useEffect(() => {
        if (!character && characterId) {
            dispatch(fetchCharacterById(`${ BASE_API }/${ characterId }`));
        }
    }, [character, characterId, dispatch]);

    if (!character) {
        return <div>Character not found</div>;
    }


    const handleToggleEpisodes = () => {
        setOpenEpisodes(!openEpisodes);
    };

    return (
        <Paper sx={ { padding: 2, maxWidth: 800, margin: 'auto', marginTop: 4 } }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <Grid container justifyContent="center" alignItems="center">
                        <Avatar
                            alt={ character.name }
                            src={ character.image }
                            sx={ { width: 150, height: 150, marginBottom: isMobile ? 2 : 0 } }
                        />
                    </Grid>
                    <Typography variant="h5" component="h2" gutterBottom sx={ { textAlign: 'center' } }>
                        { character.name }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <Box sx={ { display: 'flex', flexWrap: 'wrap' } }>
                        <Box sx={ { flexGrow: 1 } }>
                            <Typography variant="body1" gutterBottom>
                                <strong>Status:</strong> { character.status }
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Species:</strong> { character.species }
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Type:</strong> { character.type || 'N/A' }
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Gender:</strong> { character.gender }
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Location:</strong> { character.location?.name }
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Original Location:</strong> { character.original?.name }
                            </Typography>
                        </Box>
                        <Box sx={ { width: 'fit-content' } }>
                            <Typography variant="body1" gutterBottom>
                                <strong>Episodes:</strong>
                            </Typography>
                            <IconButton onClick={ handleToggleEpisodes }>
                                { openEpisodes ? '-' : '+' }
                            </IconButton>
                            <Collapse in={ openEpisodes }>
                                <List dense={ true } disablePadding>
                                    { character.episode.map((episodeUrl) => (
                                        <ListItem key={ episodeUrl }>
                                            <ListItemText
                                                primary={ <Typography variant="body2">{ episodeUrl }</Typography> }/>
                                        </ListItem>
                                    )) }
                                </List>
                            </Collapse>
                        </Box>
                    </Box>
                    <Typography variant="body1" gutterBottom>
                        <strong>Character URL:</strong>{ ' ' }
                        <a href={ character.url } target="_blank" rel="noopener noreferrer">
                            { character.url }
                        </a>
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="middle"/>
        </Paper>
    );
}

export default Detailed;