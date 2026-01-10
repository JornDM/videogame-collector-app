import type Videogame from "../../types/Videogame";

const VideoGameCard: React.FC<Videogame> = (props: Videogame) => {
    return (
        <div key={props.id}>
            <img src={props.coverUrl} alt={`The cover of the video game: ${props.name}`}></img>
            <p>{props.name}</p>
            <p>{props.summary}</p>
        </div>
    )
}

export default VideoGameCard;