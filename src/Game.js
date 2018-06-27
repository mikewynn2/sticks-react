import React from 'react';
import StickBoard from './StickBoard';
import TurnHandler from './TurnHandler';
import GameStatus from './GameStatus';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Turn: true,
            total: 20,
            left: 20,
            status: null
        }
    }

    render() {
        const color = this.state.player1Turn ? 'danger' : 'primary';
        return (
            <div className="Game">
                <div className="title">
                    Sticks
                </div>
                <StickBoard total={this.state.total} left={this.state.left} color={color} />
                <TurnHandler color={color} left={this.state.left} onTurn={this.handleTurn.bind(this)} />
                <GameStatus 
                    status={this.state.status} 
                    color={color} 
                    onReset={this.handleReset.bind(this)}
                />
            </div>
        )
    }

    handleTurn(value) {
        const newState = {...this.state};
        newState.left -= value;
        newState.player1Turn = !newState.player1Turn;

        if (newState.left === 0) {
            newState.status = (newState.player1Turn ? 'Player 1' : 'Player 2') + ' WYNNS!';
        }
        
        this.setState(newState);
    }

    handleReset() {
        this.setState({
            player1Turn: true,
            total: 20,
            left: 20,
            status: null
        });
    }
}
