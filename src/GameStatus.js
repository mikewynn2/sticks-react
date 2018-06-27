import React from 'react';
import { Button } from 'antd';

export default class GameStatus extends React.Component {
    render() {
        return (
            <div>
                <div className="game-status"> {this.props.status} </div>
                <br />
                <Button size="large" onClick={this.props.onReset} ghost>New Game</Button>
            </div>
        )
    }
}
