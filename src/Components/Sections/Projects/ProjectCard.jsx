import { useState } from "react"
import Collapse from "react-collapsible-wrapper";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faImage, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { ImageViewer } from "./ImageViewer/ImageViewer";


export function ProjectCard(props){

    const [isOpen, setIsOpen] = useState(false);
    const [showPicture, setShowPicture] = useState(false);

    function toggleOpen(){
        setIsOpen(!isOpen);
    }

    function togglePicture(e){
        e.stopPropagation();
        setShowPicture(prev => !prev);
    }

    function handleLinkClick(e){
        e.stopPropagation();
    }

    return(
        <div className="project-card">
            <header onClick={toggleOpen} className="project-card-header">
                <div className={isOpen ? "title open" : "title"}>
                    <span style={{verticalAlign: "middle"}}>    
                    {/* {props.favicon && (
                            <img 
                                className="project-favicon"
                                // style={{width: "2rem", height: "2rem", verticalAlign:"middle"}} 
                                src={process.env.PUBLIC_URL + "/img/site-icons/" + props.favicon} 
                                alt="favicon"
                            />
                        )}                 */}
                        <span>{props.title}</span>
                    </span>
                    <svg 
                        onClick={toggleOpen}
                        className={isOpen ? "icon-chevron up" : "icon-chevron"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"/></svg>
                </div>
                

            </header>
            <Collapse isOpen={isOpen} duration="0.4" className="collapse">
                <section className="project-description">
                    <header>Description</header>
                    
                    <div>{props.description}</div>
                </section>
                {props.tech && (
                    <section className="project-tech">
                        <header>Technologies</header>
                        <ul>
                        {props.tech.map(function(t, index){
                            return(
                                <li key={t + index}>{t}</li>
                            )
                        })}
                        </ul>
                    </section>
                )}
                {props.libraries && (
                    <section className="project-libs">
                        <header>Librairies</header>
                        <ul>

                        
                        {props.libraries.map(function(lib, index){
                            return(
                                <li key={lib}>{lib}</li>
                            )
                        })}
                        </ul>
                    </section>
                )}
                
                
            </Collapse>
            {(props.liveurl || props.repo || props.illustration) &&(
                <footer>
                {props.liveurl && (
                    <a href={props.liveurl} target='_blank'rel="noreferrer" onClick={handleLinkClick}>
                        <FontAwesomeIcon className="icon-link" icon={faGlobe} title="voir l'application live"/>
                    </a>
                )}

                {props.repo && (
                        <a href={props.repo} target='_blank' rel="noreferrer" onClick={handleLinkClick}>
                            <FontAwesomeIcon className="icon-link" icon={faGithub} title="voir code source"/>
                        </a>
                )}
                {props.illustration && (
                        <>
                            <FontAwesomeIcon className="icon-link" icon={props.illustration.length === 1 ? faImage : faImages} title="voir une image de l'application" onClick={togglePicture}/>
                            <ImageViewer isShowing={showPicture} toggleShow={togglePicture} img={props.illustration}/>
                        </>
                )}
                
            </footer>

            )}
            
                
            
            
        </div>
    )
}