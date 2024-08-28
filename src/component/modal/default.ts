import { Character } from 'src/interface/interface';

export const defaultCharacter: Character = {
    id: null,
    name: '',
    status: 'unknown',
    species: '',
    type: '',
    gender: 'unknown',
    location: {
        name: '',
        url: ''
    },
    original: {
        name: '',
        url: ''
    },
    image: '',
    episode: [],
    url: ''
};