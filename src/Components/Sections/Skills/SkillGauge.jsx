import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SkillGauge(props){
    return(
        <div className="gauge-wrapper">
            <div className='gauge-label'>{props.label}</div>
            <div className="gauge">
                <div 
                    className="skill" 
                    style={{
                        "--percentage": `${props.percentage}%`,
                        background: `linear-gradient(to right, var(--special-main), ${props.color}` 
                    }}
                >
                <FontAwesomeIcon icon={props.icon} />
            </div>
            </div>
        </div>
    )
}