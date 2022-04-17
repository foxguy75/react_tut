import React, { Component } from "react";
import { IListNode, List } from "./List";

export interface IForumState
{
    list: Array<IListNode>;
    activeNode: IListNode | null;
    formValue: string;
}

export class ListForum extends Component< {}, IForumState >
{
    constructor( props: Object = {} )
    {
        super(props);
        
        this.state = {
            list: [],
            formValue: "",
            activeNode: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange( event: React.ChangeEvent<HTMLInputElement> )
    {
        let tempValue = {...this.state };

        if( event.target.value === "" )
        {
            tempValue.activeNode = null;
        }
        else if( tempValue.activeNode )
        {
            tempValue.activeNode.listContent = event.target.value;
        }
        else 
        {
            tempValue.activeNode = {
                listContent: event.target.value,
                children: []
            };
        }
        tempValue.formValue = event.target.value;
        this.setState(tempValue);
    }

    handleKeyPress( event: React.KeyboardEvent<HTMLInputElement> )
    {
        if( event.key === 'Enter' )
        {
            let tempState = { ...this.state };
            tempState.list.push( tempState.activeNode! );
            tempState.formValue = "";
            tempState.activeNode = null;
            this.setState(tempState);
            event.preventDefault();
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
                    <input type={"text"} onChange={this.handleChange} onKeyDown={this.handleKeyPress} value={this.state.formValue}></input>
                </form>
                {this.state.list.length > 0 && <List isOrderedList={false} list={this.state.list} key={"forumList"}></List>}
                {this.state.activeNode && <List isOrderedList={false} list={[this.state.activeNode]} key={"forumList"}></List>}
            </div>
        );
    }
}