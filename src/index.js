import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Categories from './components/categories';
import Saleimage from './components/saleimage';
import Reacomemded from './components/recomended';
import Topic from './components/topics';
import Popular from './components/popular';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> <Navbar></Navbar>
<Categories></Categories>
<Saleimage></Saleimage>
<Reacomemded></Reacomemded>
<Topic></Topic>
<Popular></Popular>
<Footer></Footer>
</>)
 


