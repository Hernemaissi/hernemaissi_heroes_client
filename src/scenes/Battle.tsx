import * as React from 'react';

import { Player, Battle as BattleStatus } from '../models';

interface BattleProps {
    player: Player;
    battle: BattleStatus;
    attack: (index: number) => void;
}

class Battle extends React.Component<BattleProps, {}> {
    constructor(props: BattleProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div> You are in fighting, raargh! </div>
                <div> Your health is: {this.props.player.stats.hp} </div>
                <div> Enemies are: </div>
                <ul>
                    { this.props.battle.troop.members.map((e, i) => {
                        return <li onClick={() => this.props.attack(i)} key={e.name + i}> {e.name + ':' + e.hp} </li>;
                    }) }
                </ul>
                <button> Attack </button>
            </div>
        );
    }
}

export default Battle;