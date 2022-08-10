import {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
        faUser, 
        faGraduationCap, 
        faScrewdriverWrench, 
        faCode, 
        faFilePdf, 
        faChevronLeft, 
        faChevronRight, 
        faEnvelope 
    } from '@fortawesome/free-solid-svg-icons'
    
import './sidebar.css';


export function Sidebar(props){

    const [menuSize, setMenuSize] = useState("large");

    function switchMenuSize(){
        if(menuSize === "large"){
            setMenuSize("small");
        } else {
            setMenuSize("large");
        }
    }

    useEffect(()=>{
        props.handleMenuSizeChange(menuSize);
    }, [menuSize, props])
    
    return(
        <nav className={"sidebar " + menuSize}>
            <div className="section-list">

                <h2>
                    <span>Sections</span>
                    <button className="chevron-button" onClick={switchMenuSize}>
                        <FontAwesomeIcon icon={menuSize==="large" ? faChevronLeft : faChevronRight}/>
                    </button>
                </h2>
                
                <NavLink 
                    className="navlink"
                    to="/about"
                    tabIndex="0"
                >
                    <FontAwesomeIcon className="sidebar-icon" icon={faUser} />
                    <span>Présentation</span>
                </NavLink>

                <NavLink 
                    className="navlink"
                    to="/experience"
                    tabIndex="0"
                >
                        <FontAwesomeIcon className="sidebar-icon" icon={faGraduationCap} />
                        <span className="long-words">Formation &amp;    Experience</span>
                </NavLink>


                <NavLink 
                    className="navlink"
                    to="skills"
                    tabIndex="0"
                >
                        <FontAwesomeIcon className="sidebar-icon" icon={faScrewdriverWrench} />
                        <span>Compétences</span>
                </NavLink>
                <NavLink 
                    className="navlink"
                    to="projects"
                    tabIndex="0"
                >   
                    <FontAwesomeIcon className="sidebar-icon" icon={faCode} />
                    <span>Projets Informatiques</span>
                </NavLink>
                <NavLink 
                    className="navlink"
                    to="contact"
                    tabIndex="0"
                >   
                    <FontAwesomeIcon className="sidebar-icon" icon={faEnvelope} />
                    <span>Contact</span>
                </NavLink>
                
                <a className="cv-link" href={`${process.env.PUBLIC_URL}/CV.pdf`} rel="noreferrer" target='_blank' tabIndex="0">
                    <FontAwesomeIcon className="sidebar-icon" icon={faFilePdf} />
                    <span>CV format pdf</span>
                </a>

            </div>
      </nav>
    )
}