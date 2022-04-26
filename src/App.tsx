import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


export class App extends Component
{
    render()
    {
        return(
            <div className={"container"}>
                <nav>
                    <Link to="/forum" className={"nav-link"}>Forum</Link>
                    <span className={"nav-link"}>{"|"}</span>
                    <Link to="/temp" className={"nav-link"}>Temp</Link>
                    <span className={"nav-link"}>{"|"}</span>
                    <Link to="/beerJournal" className={"nav-link"}>Beer</Link>
                </nav>
                <Outlet/>
            </div>
        )
    }
}