import { ReduxAction } from '../actions/player';
import { Store } from '../global';

const initialState: Store.Player = {
  player: {
      index: 0,
      currentScene: {
          name: 'start',
          allowedActions: [],
          allowedTransitions: [],
      },
      previousScene: null,
      inventory: [],
      gold: 0,
  },
};

export function player(state: Store.Player = initialState, action: ReduxAction): Store.Player {
    switch (action.type) {
        case 'UPDATE_STATUS':
            const newValue = action.player;
            return { player: newValue };
        default:
            return state;
    }
}