import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

function Detailed() {
    const { characterId } = useParams<{ characterId: string }>();
    const character = useSelector((state: RootState) => state.characters.character.find(item => item.id.toString() === characterId));

    if (!character) {
        return <div>Character not found</div>;
    }

    return (

        <Card>
            { character.image ? (
                <CardMedia
                    component="img"
                    height="140"
                    image={ character.image }
                    alt={ character.name }
                />
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="300px" height="300px" viewBox="0 0 24 24">
                    <path
                        d="M21.71,14.54,19.21,12a1,1,0,0,0-1.42,0L15,14.84,12.21,12a1,1,0,0,0-1.42,0L8.5,14.34,6.21,12a1,1,0,0,0-1.42,0l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0-.08.38V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15.25a1,1,0,0,0-.08-.38A1,1,0,0,0,21.71,14.54ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15.66l1.5-1.5,2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,17a1,1,0,0,0,1.42,0l2.79-2.8,1.5,1.5ZM19,2H5A3,3,0,0,0,2,5v5.26a1.17,1.17,0,0,0,0,.27s0,.07,0,.1a1,1,0,0,0,1.66.31L5.5,9.16l2.29,2.3a1,1,0,0,0,1.42,0l2.29-2.3L14.29,12a1,1,0,0,0,1.42,0l2.79-2.8,1.77,1.78a1,1,0,0,0,1.66-.31.28.28,0,0,0,0-.09.88.88,0,0,0,.06-.28V5A3,3,0,0,0,19,2Zm1,5.84L19.21,7a1,1,0,0,0-1.42,0L15,9.84,12.21,7a1,1,0,0,0-1.42,0L8.5,9.34,6.21,7A1,1,0,0,0,4.79,7L4,7.84V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/>
                </svg>
            ) }
            <CardContent>
                <Typography variant="h5" component="div">
                    { character.name }
                </Typography>
                <Typography color="text.secondary">
                    Status: { character.status }
                </Typography>
                <Typography color="text.secondary">
                    Species: { character.species }
                </Typography>
                <Typography color="text.secondary">
                    Gender: { character.gender }
                </Typography>
                <Typography color="text.secondary">
                    Location: <a href={ character.location.url }>{ character.location.name }</a>
                </Typography>
                <Typography color="text.secondary">
                    Original Location: <a href={ character.original.url }>{ character.original.name }</a>
                </Typography>
                <List>
                    { character.episodeList.map((episode: any, index: any) => (
                        <ListItem key={ index }>
                            <ListItemText primary={ episode }/>
                        </ListItem>
                    )) }
                </List>
            </CardContent>
        </Card>
    );
}

export default Detailed;
