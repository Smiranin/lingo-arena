export interface Game extends GameSettings {
    id: string;
    status: GameStatus;
    players: Player[];
    cards: GameCard[];
    activeCards: GameCard[];
    wordsLeft: number;
}

export interface GameSettings {
    type: GameType;
    size: GameSize;
    lang: [Lang, Lang];
}

export interface GameCard {
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
enum Lang {
    en,
    ru,
}

enum GameType {
    single,
    multi,
}

enum GameStatus {
    pending = "pending",
    active = "active",
    cancelled = "cancelled",
    completed = "completed",
}

enum GameSize {
    sm = "sm",
    md = "md",
    lg = "lg",
}

enum CardStatus {
    opened = "opened",
    closed = "closed",
    completed = "completed",
}
