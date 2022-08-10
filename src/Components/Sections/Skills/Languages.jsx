import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Languages(){
    return(
        
        <div className='languages'>
            <div>
                <div className='img-container'>
                    <img className='skill-flag fra' alt="France flag" src={process.env.PUBLIC_URL + "/img/flags/fra.svg"} />
                </div>
                <span className='language-lvl'>
                    <FontAwesomeIcon className="info-box" icon={faInfoCircle}/>
                    <div>
                        <ul>
                            <li>Natif</li>
                            <li>Projet Voltaire: 792</li>
                        </ul>
                    </div>
                </span>
            </div>

            <div>
                <div className='img-container'>
                    <img className='skill-flag gbr' alt="United Kingdom flag" src={process.env.PUBLIC_URL + "/img/flags/gbr.svg"} />
                </div>
                <span className='language-lvl'><FontAwesomeIcon className="info-box" icon={faInfoCircle}/>
                    <div>
                        <ul>
                            <li>Niveau C2</li>
                            <li>TOEIC: 955</li>
                            <li>1 année en Irlande</li>
                        </ul>
                    </div>
                </span>
            </div>

            <div>
                <div className='img-container'>
                    <img className='skill-flag esp' alt="Spain flag" src={process.env.PUBLIC_URL + "/img/flags/esp.svg"} />
                </div>
                <span className='language-lvl'><FontAwesomeIcon className="info-box" icon={faInfoCircle}/>
                <div>
                        <ul>
                            <li>Niveau B1</li>
                        </ul>
                    </div>
                </span>
            </div>
            
            
        </div>
    
    )
}