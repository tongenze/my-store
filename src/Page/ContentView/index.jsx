
import React from "react";
import { Outlet } from "react-router-dom";




class ContentView extends React.Component{
    render() {
        return (<div><h1>content</h1><Outlet/></div>)
    }
}


export default ContentView