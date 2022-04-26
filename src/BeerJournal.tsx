import { Component } from "react";

export class BeerJournal extends Component
{
    render()
    {
        return(
            <div>
                <h2>Beer Journal</h2>
                <div className={"row"} style={{textAlign:"center"}}>
                    <div className={"four columns"}>
                        Stella Artios
                    </div>
                    <div className={"four columns"}>
                        Little Miami
                    </div>
                    <div className={"four columns"}>
                        3rd Eye
                    </div>
                </div>
            </div>
        )
    }
}