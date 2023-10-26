

import React from "react";
import { Outlet } from "react-router-dom";



class HomeView extends React.Component{
    render() {
        return (<div><h1>Home</h1> <Outlet /></div>)
     
    }
}


export default HomeView