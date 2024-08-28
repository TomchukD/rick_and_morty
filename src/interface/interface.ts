export interface Character {
    id: number | null;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    location: Location,
    original: Location,
    image: string | undefined
    episode: string[];
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