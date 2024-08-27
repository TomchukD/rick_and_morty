export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    location: Location,
    original: Location,
    image: string | undefined
    episodeList: string[];
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface CharacterState {
    character: Character[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}