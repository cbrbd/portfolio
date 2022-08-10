import { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../Functions/getWindowDimensions";

import { Sidebar } from "../Sidebar/Sidebar";

import './page.css';
import './animation.css';
import './fonts.css';
import './theme.css';

export const VisitContext = createContext({firstVisit: true});

export function Page(){

    const navigate = useNavigate();
    const loc = useLocation();

    const [contentSize, setContentSize] = useState("all");
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [isFirstVisit, setFirstVisit] = useState(true);
    const {width} = useWindowDimensions();


    //redirect on root
    useEffect(()=>{
        if(loc.pathname === "/"){
            navigate("/about");
        }
    }, [navigate, loc])

    useEffect(()=>{
        if(loc.pathname !== "/about" && loc.pathname !== "/" && width>1024){
            setSidebarVisible(true);
            setFirstVisit(false);
        }

        if(width<1024){
            setSidebarVisible(true);
            setFirstVisit(false);
        }

    }, [navigate, loc, width])


    function handleMenuSizeChange(menuSize){
        if(menuSize === "small"){
            setContentSize("large");
        } else {
            setContentSize("small");
        }
    }

    useEffect(()=>{
        document.querySelector('#content').scrollTo(0,0);
    })

    return(
        <VisitContext.Provider value={{isFirstVisit: isFirstVisit}}>
            <div className="app">
                {isSidebarVisible && (
                    <Sidebar handleMenuSizeChange={handleMenuSizeChange}/>
                )}
                <div id="content" className={contentSize}>
                    <Outlet/>
                </div>
            </div>
        </VisitContext.Provider>
    )
}