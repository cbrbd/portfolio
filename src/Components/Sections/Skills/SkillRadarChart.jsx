import { RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer , Radar } from "recharts"
import useWindowDimensions from "../../../Functions/getWindowDimensions";

export function SkillRadarChart(){

    const {width} = useWindowDimensions();

    const data = [
        {
          "skill": "Créativité",
          "value": 76,
          "fullMark": 100
        },
        {
          "skill": "Résolution problèmes",
          "value": 92,
          "fullMark": 100
        },
        {
          "skill": "Curiosité",
          "value": 76,
          "fullMark": 100
        },
        {
          "skill": "Capacité d'apprentissage",
          "value": 95,
          "fullMark": 100
        },
        {
          "skill": "Patience",
          "value": 70,
          "fullMark": 100
        },
        {
          "skill": "Persévérance",
          "value": 85,
          "fullMark": 100
        },
        {
          "skill": "Flexibilité",
          "value": 80,
          "fullMark": 100
        },
        {
          "skill": "Travail d'équipe",
          "value": 75,
          "fullMark": 100
        }
      ]

      
function CustomizedAxisTick(props){
  
    const {x, y, payload} = props;

    function processAnchor(coordinate){
      if(coordinate === 90 || coordinate === -90){
        return "middle"
      }
      if(coordinate < 90 && coordinate > -90){
        return "start"
      }
      if(coordinate<-90){
        return "end"
      }
    }
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x="0" y="5" cx={x} cy={y} fill="#eee">
          {payload.value.split(" ").map(function(element, index){
            return(<tspan key={element + index} textAnchor={processAnchor(Math.round(payload.coordinate))} x="0" dy={index*20}>{element}</tspan>)
          })}
        </text>
      </g>
    );
  
    };
      

    return(         
    
      <ResponsiveContainer 
      height={300}
      // width="100%"
      >
        
        
        <RadarChart 
        outerRadius={width < 500 ? 80 : ''} 
        data={data}
        >
        <PolarGrid />
        <PolarAngleAxis 
          dataKey="skill" 
          tick={<CustomizedAxisTick/>}
        />  
        <Radar name="Corentin" dataKey="value" fill="#58cd9f" stroke="#153426" strokeWidth={"2px"} fillOpacity={0.6}  />
      </RadarChart>
      </ResponsiveContainer>    
      
    )
}