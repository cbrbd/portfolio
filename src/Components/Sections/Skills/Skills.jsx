
import { faReact, faHtml5, faCss3, faJs, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import { SkillRadarChart } from './SkillRadarChart';
import { Languages } from './Languages';

import './skills.css';
import { SkillGauge } from "./SkillGauge";

export function Skills(){
    return(
        
        <div className="skills">

            <div className='hardskills'>
                <div>
                    <section>
                        <h2>Hard skills</h2>
                        
                        <div className='front-end'>
                            <h3>Front-End</h3>
                            <SkillGauge
                                label="React"
                                icon={faReact}
                                percentage="90"
                                color="#5ED3F3"
                            />

                            <SkillGauge
                                label="HTML"
                                icon={faHtml5}
                                percentage="85"
                                color="#E96228"
                            />
                            
                            <SkillGauge
                                label="CSS"
                                icon={faCss3}
                                percentage="80"
                                color="#459ACD"
                            />
                            
                            <SkillGauge
                                label="Vanilla JS"
                                icon={faJs}
                                percentage="70"
                                color="#E3CD1C"
                            />
                        </div>
                        
                        
                    


                        <div className='back-end'>
                            <h3>Back-End</h3>
                            
                            <SkillGauge
                                label="Node(Express)"
                                icon={faNodeJs}
                                percentage="75"
                                color="#96C725"
                            />

                            <SkillGauge
                                label="MongoDB"
                                icon={faDatabase}
                                percentage="60"
                                color="#006548"
                            />
                            
                            <SkillGauge
                                label="Docker"
                                icon={faDocker}
                                percentage="70"
                                color="#2391E6"
                            />
                        </div>
                        
                    
                    </section>
                    
                    <section>
                        <h3>Autres compétences techniques</h3>
                        
                        <table className='skill-table' cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Avancé</th>
                                    <th>Intermédiaire</th>
                                    <th>Bases</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cybersécurité</td>
                                    <td>JAVA, C++</td>
                                    <td>NGINX</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>Git</td>
                                    <td>PHP</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>MySQL</td>
                                    <td>Jest</td>
                                </tr>
                            </tbody>
                        </table>
                

                    </section>

                    
                </div>
            </div>

            <div className='softskills'>
                <div>
                    <h2>Soft Skills</h2>
                    <section>
                        <h3>Langues</h3>
                        <Languages/>
                    </section>
                    <section>
                    <h3>Compétences humaines</h3>
                    <SkillRadarChart/>
                    </section>
                    
                </div>
                
            </div>
            
        </div>

    )
}