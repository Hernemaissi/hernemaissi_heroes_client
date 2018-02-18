export interface Player {
    index: number;
    currentScene: Scene;
    previousScene: Scene | null;
    inventory: Item[];
    gold: number;
}

export interface Scene {
    name: string;
    allowedActions: Actions[];
    allowedTransitions: Scene[];
}

export type Actions = 'shop' | 'adventure';

export type Message = {
    id: string,
    message: any,
};

export interface Item {
    id: number;
    price: number;
    name: string;
    description: string;
}