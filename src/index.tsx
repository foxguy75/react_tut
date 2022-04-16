import React from 'react';
import { createRoot } from 'react-dom/client';
import { IListNode, List } from './List';
import { ListForum } from './ListForum';
import { Temp } from './Temp';

const testList: Array<IListNode> = [
  { listContent: 'Ben', children: [ { listContent: 'Brittany', children: [] }, { listContent: 'Dani', children: [] } ] },
  { listContent: 'Izzy', children: [] },
  { listContent: 'Maruice', children: [] },
  { listContent: 'Gabe', children: [] }
];

const containerStyle: React.CSSProperties = { textAlign: "center" };
const containerStyleList: React.CSSProperties = { textAlign: "left" };

const container = document.getElementById( 'root' );
const root = createRoot( container! );
root.render(
  <React.StrictMode>
    <div className="container" style={containerStyle}> 
      <Temp thing={1} />
    </div>
    <div className="container" style={containerStyleList}>
      <List isOrderedList={false} list={testList} key={"rootList"}></List>
    </div>
    <div className="container" style={containerStyleList}>
      <ListForum></ListForum>
    </div>
  </React.StrictMode>
);
