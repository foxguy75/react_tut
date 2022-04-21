import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListForum } from './ListForum';
import { Temp } from './Temp';
import { App } from './App';
import { BeerJournal } from './BeerJournal';

const container = document.getElementById( 'root' );
const root = createRoot( container! );

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<BeerJournal /> }/>
          <Route path='forum' element={<ListForum />} />
          <Route path='temp' element={<Temp thing={1}/>} />
          <Route path='beerJournal' element={<BeerJournal />} />
          <Route path='*' element={<h2 style={{textAlign: "center"}}>404</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
