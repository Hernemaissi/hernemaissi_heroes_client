import * as models from './models'

export namespace Store {

    export type Player = { player: models.Player }

    export type All = {
        player: Player
    }
}