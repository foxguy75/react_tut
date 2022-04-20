import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IListNode, List } from './List';
import { ListForum } from './ListForum';
// import { Temp } from './Temp';
import { App } from './App';

const testList: Array<IListNode> = [
  { listContent: 'Ben', children: [ { listContent: 'Brittany', children: [] }, { listContent: 'Dani', children: [] } ] },
  { listContent: 'Izzy', children: [] },
  { listContent: 'Maruice', children: [] },
  { listContent: 'Gabe', children: [] }
];

const container = document.getElementById( 'root' );
const root = createRoot( container! );

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='list' element={ <List isOrderedList={false} list={testList} key={"rootList"} /> } />
          <Route path='forum' element={<ListForum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
