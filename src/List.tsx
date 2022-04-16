import { Component } from "react";

export interface IListNode
{
    listContent: String;
    children: Array<IListNode>;
}

export interface IListProp
{
    isOrderedList: Boolean;
    list: Array<IListNode>;
}

// export interface IListState
// {   
//     isOrderedList: Boolean;
//     list: Array<IListNode>;
// }

export class List extends Component< IListProp >
{
    constructor( props: IListProp )
    {
        super(props);

        // this.state = {
        //     isOrderedList: props.isOrderedList,
        //     list: props.list
        // };

        this.generateUnorderedList = this.generateUnorderedList.bind(this);
    }

    generateUnorderedList( list: Array<IListNode>, depth: number = 0 ): JSX.Element
    {
        let listItems: Array<JSX.Element> = [];

        list.forEach( ( elem, index ) => {
            listItems.push( 
                <li key={`${elem.listContent}_ID_${index}_${depth}`}>
                    { elem.listContent }
                </li>
            );
            if( elem.children.length > 0 )
            {
                listItems.push( this.generateUnorderedList( elem.children, depth + 1 ) );
            }
        } );

        return this.props.isOrderedList ? 
            <ol key={`${depth}`}>
                {listItems}
            </ol> :
            <ul key={`${depth}`}>
                {listItems}
            </ul> ;
    }

    render(): JSX.Element
    {
        return this.generateUnorderedList( this.props.list );
    }
}