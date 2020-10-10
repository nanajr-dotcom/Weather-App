import React from 'react';
import Searchbox from './Searchbox';
import Weatherbox from './Weatherbox';



 function Main({ setUserLoggedIn }){ 

    return(
        <>
         <Searchbox/> 
         <Weatherbox/> 
         </>

    )

}


export default Main;