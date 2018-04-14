export interface Player {
    index: number;
    currentScene: Scene;
    previousScene: Scene | null;
    inventory: Item[];
    gold: number;
    stats: PlayerStats;
}

interface PlayerStats {
    hp: number;
    attack: number;
}

export interface Enemy {
    hp: number;
    attack: number;
    name: string;
}

export interface Troop {
    members: Enemy[];
}

export interface Battle {
    troop: Troop;
}

export interface BasicScene {
    name: 'shop' | 'start' | 'town';
    allowedActions: Actions[];
    allowedTransitions: Scene[];
}

export interface BattleScene  {
    name: 'battle';
    allowedActions: Actions[];
    battle: Battle;
}

export type Scene = BasicScene | BattleScene;

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