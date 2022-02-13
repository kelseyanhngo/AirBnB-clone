import React, { useEffect } from 'react';
import Flexible from '../../Components/Flexible/flexible';
import Header from '../../Components/Header';
import Header1 from '../../Components/Header1/header1';
import './home.scss'


function Home(props) {


 
    return (
        <div>
           <Header/>
           <Flexible/>
           <div style={{height: '1000px'}}>

           </div>
        </div>
    );
}

export default Home;