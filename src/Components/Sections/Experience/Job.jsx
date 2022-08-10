export function Job(props){
    return(
        <div className="job">
            <header>
                <div>
                    {props.title} 
                </div>
                <div>
                    Chez <strong>{props.company}</strong>
                </div>
            </header>
            <div className="timespan">
                {props.timeStart} - {props.timeEnd}
            </div>
            <div className="job-content">
                <div className="mission">
                    <h4>Mission</h4>
                    {props.mission}
                </div>
                <div className="job-skills">
                    <h4>Compétences acquises</h4>
                    <ul>
                        {props.skills && props.skills.map(function(skill, index){
                            return(
                                <li key={index}>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                {props.techs && (

                <div className="job-tech">
                <h4>Outils utilisés</h4>

                    {props.techs.map(function(tech, index){
                        return(
                            <span key={index}>{tech}{index === props.techs.length -1 ? "" : ", "}</span>
                        )
                    })}

                </div>
                )}
                
            </div>
        </div>
    )
}