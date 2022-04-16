import React, { Component } from "react";
import { IListNode, List } from "./List";

export interface IForumState
{
    list: Array<IListNode>;
    formValue: string;
}

export class ListForum extends Component< {}, IForumState >
{
    constructor( props: Object = {} )
    {
        super(props);
        
        this.state = {
            list: [],
            formValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange( event: React.ChangeEvent<HTMLInputElement> )
    {
        let tempValue = {...this.state };
        tempValue.formValue = event.target.value;
        this.setState(tempValue);
        return;
    }

    handleKeyPress( event: React.KeyboardEvent<HTMLInputElement> )
    {
        if( event.key === 'Enter' )
        {
            let tempState = { ...this.state };
            tempState.list.push({
                listContent: tempState.formValue,
                children: []
            });
            tempState.formValue = "";
            this.setState(tempState);
        }
    }

    render()
    {
        const label = "List Element";

        return(
            <div>
                <form>
                    <label>
                        {label}
                    </label>
                    <input onChange={this.handleChange} onKeyDown={this.handleKeyPress} value={this.state.formValue}></input>
                </form>
                {this.state.list.length > 0 && <List isOrderedList={false} list={this.state.list} key={"forumList"}></List>}
            </div>
        );
    }
}