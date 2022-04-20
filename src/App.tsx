import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


export class App extends Component
{
    render()
    {
        return(
            <div className={"container"}>
                <nav>
                    <Link to="/list" className={"nav-link"}>List</Link> {" "}
                    <Link to="/forum" className={"nav-link"}>Forum</Link>
                </nav>
                <Outlet/>
            </div>
        )
    }
}