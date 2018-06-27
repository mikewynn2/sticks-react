import React from 'react';
import { Button } from 'antd';


export default class StickBoard extends React.Component {
    render() {
        return (
            <div className="game-board"> 
                {
                    Array(this.props.total).fill(null).map((item, i) => { 
                        return (
                            <Button 
                                key={i} 
                                type={(i < this.props.left) ? this.props.color : 'dashed'} 
                                style={{
                                    width: 32,
                                    height: 250,
                                    marginRight: 10
                                }} 
                                ghost
                            />
                        )
                    })
                }
            </div>
        )
    }
} 
