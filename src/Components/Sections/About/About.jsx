
import './about.css';    


import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
        faGraduationCap, 
        faScrewdriverWrench, 
        faCode, 
        faFilePdf, 
        faEnvelope, 
    } from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from '../../../Functions/getWindowDimensions';
import { useContext } from 'react';
import { VisitContext } from '../../Page/Page';
import { getAge } from '../../../Functions/computeAge';

    




export function About(){

    const {width} = useWindowDimensions();

    const {isFirstVisit} = useContext(VisitContext);


    return(
        <div className={isFirstVisit ? "about grid" : "about"} >
            <section className='general-informations'>
                <div className='wrapper'>
                    <div className="identity">Corentin Barbaud</div>
                    <div className="profession">Ingénieur, développeur web</div>
                    <div className="ageloc">{getAge(new Date(1997, 12, 16))} ans, Lyon <img className="flag" alt="french-flag" src={`${process.env.PUBLIC_URL}/img/flags/fra.svg`}/></div> 
                    <article>
                        <p>
                            <strong>Ingénieur</strong> et titulaire d'une maîtrise en <strong>cybersécurité</strong>, j'ai été captivé par le <strong>développement web</strong> et ait décidé de m'y former en <strong>autodidacte</strong>.</p>
                        <p>
                            Développeur majoritairement <strong>Front-End</strong> ayant de bonnes connaissances en  <strong>Back-end</strong>, j'apprécie créer des interfaces web fonctionnelles, agréables et accessibles pour tout type d'appareils. <br/>
                        </p>
                        <p>
                            De nature <strong>curieuse</strong> et <strong>méticuleuse</strong>, j'aime comprendre et apprendre comment fonctionnent les multiples facettes des technologies que j'utilise et m'intéresse à tous les aspects du développement Web.
                        </p>
                    </article>    
                </div>
                
            </section>

            {width > 1024 && isFirstVisit && (
                <section className='learn-more'>
                    <h2>Plus d'informations</h2>
                    <div className='about-links'>
                        

                        <NavLink 
                            className="navlink"
                            to="/experience"
                            tabIndex="0"
                        >
                            <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                            <span>Formation &amp; Experience</span>
                        </NavLink>

                        <NavLink 
                            className="navlink"
                            to="/skills"
                            tabIndex="0"
                        >
                            <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
                            <span>Mes compétences</span>
                        </NavLink>

                        <NavLink 
                            className="navlink"
                            to="/projects"
                            tabIndex="0"
                        >
                            <FontAwesomeIcon className="icon" icon={faCode} />
                            <span>Mes projets informatiques</span>
                        </NavLink>
                        
                        <a 
                            className="cv-link" href={`${process.env.PUBLIC_URL}/CV.pdf`} 
                            rel="noreferrer" 
                            target='_blank' 
                            tabIndex="0"
                        >
                            <FontAwesomeIcon className="icon" icon={faFilePdf} />
                            <span>Mon CV</span>
                        </a>

                        <NavLink 
                            className="navlink"
                            to="/contact"
                            tabIndex="0"
                        >
                            <FontAwesomeIcon className="icon" icon={faEnvelope} />
                            <span>Me contacter</span>
                        </NavLink>
        
                    </div>
                </section>
                
            )} 
            
        </div>
    )
}