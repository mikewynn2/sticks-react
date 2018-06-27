import React from 'react';
import { Button, Card } from 'antd';


export default class TurnHandler extends React.Component {
    render() {
        let title = null;
        if (this.props.left > 0) {
            title = (<div className="card-title">{
                'Player ' + (this.props.color === 'danger' ? 1 : 2) + ', it\'s your turn'
            }</div>);
        }
        
        return (
            <Card title={title} style={{ width: '100%', fontSize: 40, backgroundColor: 'black' }}>
                {(this.props.left > 0) && 
                    <Button type={this.props.color} size="large" onClick={() => this.handleClick(1)} ghost>1</Button>}
                &nbsp; &nbsp;
                {(this.props.left > 1) && 
                    <Button type={this.props.color} size="large" onClick={() => this.handleClick(2)} ghost>2</Button>}
                &nbsp; &nbsp;
                {(this.props.left > 2) && 
                    <Button type={this.props.color} size="large" onClick={() => this.handleClick(3)} ghost>3</Button>}
            </Card>
        )
    }

    handleClick(value) {
        this.props.onTurn(value);
    }
}
