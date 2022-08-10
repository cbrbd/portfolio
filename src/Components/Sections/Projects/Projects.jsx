import { ProjectCard } from "./ProjectCard";
import "./project.css"

export function Projects(){
    return(
        <div className="projects">

            <section>
                <h2>Projets principaux</h2>
                <p>Cliquer sur un projet pour le dérouler</p>
                <div className="project-wrapper">
                    <ProjectCard 
                        title="Portfolio"
                        description="Le site web que vous visualisez en ce moment."
                        tech={["React", "ExpressJS"]}
                        libraries={["React-router", "Recharts", "Nodemailer"]}
                        repo="https://github.com/cbrbd/portfolio"
                    />


                    <ProjectCard 
                        title="Trackmania Stats"
                        description="Site web permettant de visualiser les statistiques de n'importe quel utilisateur du jeu vidéo TrackMania."
                        tech={["React", "ExpressJS"]}
                        libraries={["React-i18next", "Styled-components", "React-router", "Recharts", "Axios", "Node-cache"]}
                        liveurl="https://tm-stats.tk/#/player/DexteR.771/General"
                        repo="https://github.com/cbrbd/tm-stats"
                        illustration={[
                            process.env.PUBLIC_URL + '/img/screenshots/tm-stats.png',
                            process.env.PUBLIC_URL + '/img/screenshots/tm-stats-2.png',
                            process.env.PUBLIC_URL + '/img/screenshots/tm-stats-3.png',
                            process.env.PUBLIC_URL + '/img/screenshots/tm-stats-4.png'
                        ]}
                        favicon="tm-stats.png"
                    /> 
                

                    <ProjectCard 
                            title="Téléchargeur youtube-mp3"
                            description="Application Windows (.exe) permettant de télécharger un fichier mp3 ou m4a à partir d'une URL YouTube et de préciser ses metadata (album, artiste, pochette, etc.)."
                            tech={["Python", "FFmpeg"]}
                            libraries={["Yt-dlp", "Eyed3", "Tkinter"]}
                            repo="https://github.com/cbrbd/legendary-octo-invention"
                            illustration={[process.env.PUBLIC_URL + '/img/screenshots/downloader.png']}
                    />

                    <ProjectCard 
                        title="Reconaissance de style musical par IA"
                        description="Intelligence Artificielle (Réseau Neuronal Convolutionnel) capable de déduire le genre musical le plus probable d'un fichier audio parmi 10 possibilités (Rock, Disco, Pop, etc...)."
                        tech={["Python", "Jeu de données GTZAN"]}
                        libraries={["TensorFlow", "Keras", "Librosa"]}
                        repo="https://github.com/cbrbd/onobot"
                    />

                    <ProjectCard 
                        title="Site web pour IA musicale"
                        description="Plateforme capable d'interagir avec une intelligence artificielle créée lors d'un projet précédent permettant de reconnaitre le genre d'une musique."
                        tech={["Docker", "React", "MongoDB", "Python", "Nginx"]}
                        libraries={["Recharts", "Jest", "Mongoose", "Tensorflow"]}
                        liveurl="https://cbrbd.github.io/onobot-app-static/"
                        repo="https://github.com/cbrbd/onobot-app"
                        illustration={[process.env.PUBLIC_URL + '/img/screenshots/onobot.png']}
                        favicon="onobot.png"
                    />

                 
                    
                </div>
            </section>


            <section>
            <h2>Projets secondaires</h2>
            <div className="project-wrapper">
                <ProjectCard
                    title="Application météo"
                    description="Site web permettant de récupérer la météo actuelle ainsi que des prévisions à partir du nom de votre ville en utilisant l'api de openweathermap."
                    liveurl="https://react-prevision-meteo.herokuapp.com"
                    tech={["React", "ExpressJS"]}
                    libraries={["Axios"]}
                    repo="https://github.com/cbrbd/weather-react"
                    illustration={[process.env.PUBLIC_URL + '/img/screenshots/weather.png']}
                    favicon="weather.png"
                />
                <ProjectCard
                    title="Websocket-Chat"
                    description="Salon de tchat textuel rudimentaire permettant à plusieurs utilisateurs d'échanger des messages grâce à une connexion websocket entre le client et le serveur. Le but de ce projet était de découvrir le fonctionnement des websockets."
                    tech={["React", "ExpressJS"]}
                    libraries={["Websocket"]}
                    repo="https://github.com/cbrbd/reactchatws"
                    illustration={[process.env.PUBLIC_URL + '/img/screenshots/wschat.png']}
                />
                <ProjectCard
                    title="Authentification-jwt"
                    description="Portail de connexion / inscription utilisant la technologie JWT pour authentifier les utilisateurs et leurs permissions et les maintenir au cours d'une session. Pour plus de sécurité, les mots de passes des utilisateurs sont salés / hashés dans une base de données."
                    tech={["ExpressJS", "MongoDB", "React", "Docker"]}
                    libraries={["JSONwebtoken", "Crypto", "Mongoose"]}
                    repo="https://github.com/cbrbd/logjwt"
                    illustration={[process.env.PUBLIC_URL + '/img/screenshots/jwt.png']}
                />
                <ProjectCard
                    title="Discord Bot Musical"
                    description="Bot discord capable de jouer une musique dans un salon vocal à partir d'une URL YouTube."
                    tech={["NodeJS"]}
                    libraries={["discord.js", "ytdl-core"]}
                    repo="https://github.com/cbrbd/ubebot"
                />
            </div>
            </section>
           
        </div>
    )
}
