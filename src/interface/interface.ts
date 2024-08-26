export interface Charter {
    id: number;
    name: string;
    state: string;
    type: string;
}

export interface ChartersState {
    charters: Charter[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}