import type Videogame from "../../types/Videogame";
import VideoGameCard from "../VideoGameCard/VideoGameCard";
import type IGamesListProps from "./IGamesListProps";

const GamesList: React.FC<IGamesListProps> = (props) => {
  return (
    <>
      {props.VideogamesList.map((videoGame: Videogame) => (
        <VideoGameCard
          key={videoGame.id}
          coverUrl={videoGame.coverUrl}
          id={videoGame.id}
          name={videoGame.name}
          summary={videoGame.summary}
        />
      ))}
    </>
  );
};


export default GamesList;