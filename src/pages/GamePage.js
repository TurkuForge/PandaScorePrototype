import 'styles/App.css';
import 'styles/style.css';
import LeagueContainer from 'components/LeagueContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { http } from 'http';

const GamePage = () => {
  const params = useParams();
  const [gameName, setGameName] = useState(params.gameName);
  const [leagues, setLeagues] = useState([]);

  useEffect(async () => {
    const { leagues: response, name } = await http(
      `https://api.pandascore.co/videogames/${params.gameName}`
    );
    setGameName(name);
    setLeagues(
      response.map(({ image_url, name }) => {
        return { image: image_url, title: name };
      })
    );
  }, []);
  return (
    <div>
      <div className="sidenav">
        <h4 className="sidenav-title">Series</h4>
        <button className="Homebtn" onClick={clickFun}>
          Home
        </button>
      </div>
      <div className="main">
        <h1 className="Title">{gameName.toUpperCase()}</h1>
        <LeagueContainer leagues={leagues} />
      </div>
    </div>
  );
};
function clickFun() {
  window.location.href = '/';
}
export default GamePage;
