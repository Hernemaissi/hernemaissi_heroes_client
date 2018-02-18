import * as models from './../models';

export type ReduxAction = {
    type: 'UPDATE_STATUS',
    player: models.Player,
  };
  
export const updateStatus = (player: models.Player): ReduxAction => ({
    type: 'UPDATE_STATUS',
    player,
});