import { useNavigate } from "react-router-dom";
import type Videogame from "../../types/Videogame";

const VideoGameCard: React.FC<Videogame> = (props: Videogame) => {

    const navigate = useNavigate();

    const openSelectedGameDetailsPage = () => {
        navigate(`/gameDetails?gameId=${props.id}`)
    }

    return (
        <div key={props.id} onClick={openSelectedGameDetailsPage}>
            <img src={props.coverUrl} alt={`The cover of the video game: ${props.name}`}></img>
            <p>{props.name}</p>
            <p>{props.summary}</p>
        </div>
    )
}

export default VideoGameCard;