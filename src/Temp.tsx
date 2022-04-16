import { Component } from 'react'

export interface props
{
    thing: number;
}

export interface state
{
    coolThing: number;
}

export class Temp extends Component< props, state >
{
    constructor( props: props )
    {
        super( props );
        this.state = {
            coolThing: props.thing
        };

        this.onClick  = this.onClick.bind(this);
    }

    onClick()
    {
        let tmpState = { ...this.state };
        tmpState.coolThing++;
        this.setState(tmpState);
    }

    render() 
    {        
        return( 
            <div>
                <div className="row">
                    <div className="twelve columns">  
                        <h2>
                            Test from App <br/>
                            State: {this.state.coolThing}                
                        </h2> 
                    </div>
                </div>
                <div className="row">
                    <div className="nine columns">
                        <br/>
                    </div>
                    <div className="three columns">
                        <button className="button-primary" onClick={this.onClick}> increment </button>
                    </div>
                </div>
            </div>
        );
    }
}