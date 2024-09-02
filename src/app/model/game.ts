export interface Game extends GameSettings {
    id: string;
    status: GameStatus;
    players: Player[];
    cards: Card[];
    activeCards: Card[];
    wordsLeft: number;
}

export interface GameSettings {
    type: GameType;
    size: GameSize;
    lang: [Lang, Lang];
}

export interface Card {
    wordId: string;
    word: string;
    status: CardStatus;
}

export interface Player {
    userId: string;
    name: string;
    active: boolean;
    score: number;
    winner: boolean;
    steps: number;
}

//ENUMS:
export enum Lang {
    en,
    ru,
}

export enum GameType {
    single,
    multi,
}

export enum GameStatus {
    pending = "pending",
    active = "active",
    cancelled = "cancelled",
    completed = "completed",
}

export enum GameSize {
    sm = "sm",
    md = "md",
    lg = "lg",
}

export enum CardStatus {
    opened = "opened",
    closed = "closed",
    completed = "completed",
}
