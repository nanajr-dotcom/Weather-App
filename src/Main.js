import React from 'react';
import Searchbox from './Searchbox';
import Location from './Location';
import Weatherbox from './Weatherbox';



 function Main({ setUserLoggedIn }){ 

    return(
        <>
        <Searchbox/>
         <Location/> 
         <Weatherbox/> 
         </>

    )

}


export default Main;