import { Job } from './Job';
import './experience.css';


export function Experience(){
    return(
        <div className='experience-formation'>
            
            <section className='formation'>
                <h2>Formation</h2>
                <table className='formation-table' cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Années</th>
                            <th>Formation</th>
                            <th>Ecole</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='formation-years'>2021-2022</td>
                            <td>Développement web</td>
                            <td>Autodidacte</td>
                        </tr>
                        <tr>
                            <td className='formation-years'>2019-2020</td>
                            <td>Master en Sécurité Informatique</td>
                            <td>Université de Limerick, Irlande</td>
                        </tr>
                        <tr>
                            <td className='formation-years'>2017-2020</td>
                            <td>Diplôme d'ingénieur généraliste</td>
                            <td>ECAM Lyon</td>
                        </tr>
                        <tr>
                            <td className='formation-years'>2015-2017</td>
                            <td>Classe préparatoire PTSI / PT</td>
                            <td>ECAM Lyon, Aux Lazaristes</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='experience'>
                <h2>Expérience professionnelle</h2>
                <div className='jobs'>
                    <Job 
                        title="Développeur Web Freelance"
                        company="Moodz"
                        timeStart="Nov. 2018"
                        timeEnd="Déc. 2018"
                        mission="Réalisation d'un composant React permettant de filtrer une liste d'objets selon des critères avancés"
                        skills={[
                            "Travail en autonomie", 
                            "Collaboration avec les différentes équipes d'un projet",
                            "Conformité à un cahier des charges"
                        ]}
                        techs={[
                            "ReactJS",
                            "Git"
                        ]}
                    />
                    <Job
                        title="Stage - Développeur Web"
                        company="Moodz"
                        timeStart="Juin 2018"
                        timeEnd="Sept. 2018"
                        mission="Amélioration du portail web de l'entreprise en travaillant sur les composants existants, ainsi qu'en créant de nouveaux composants"
                        skills={[
                            "Travail en équipe sur un projet",
                            "Méthodes Agiles",
                            "Bug fixing"
                        ]}
                        techs={[
                            "ReactJS",
                            "NodeJS",
                            "Docker",
                            "Git",
                            "Trello"
                        ]}
                    />
                    <Job
                        title="Stage - Assistant technicien"
                        company="Laïta"
                        timeStart="Juin 2016"
                        timeEnd="Juil. 2016"
                        mission="Assistance des techniciens du secteur maintenance lors de la réparation des machines de production"
                        skills={[
                            "Sécurité au travail",
                            "Rigueur"
                        ]}
                    />
                </div>
            </section>
            
        </div>
        
    )
}