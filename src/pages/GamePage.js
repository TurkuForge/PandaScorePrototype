import 'styles/App.css';
import 'styles/style.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { http } from 'http';
import SeriesContainer from 'components/SeriesContainer';
import LeagueCarousel from './../components/LeagueCarousel';

const GamePage = () => {
  const params = useParams();
  const gameContainer = useRef(null);
  const [gameName, setGameName] = useState(params.gameName);
  const [leagues, setLeagues] = useState([]);
  const [setItemsAmount] = useState(0);

  useEffect(() => {
    function handleResize() {
      const gameCard = gameContainer.current?.querySelector('.league-box');
      const amount = Math.floor(window.innerWidth / (gameCard?.offsetWidth ?? 500));
      console.log(amount);
      if (amount) {
        setItemsAmount(amount);
      }
    }

    http(`videogames/${params.gameName}`).then(({ leagues: response, name }) => {
      setGameName(name);
      setLeagues(
        response.map(({ image_url, name, series }) => {
          return { image: image_url, title: name, series };
        })
      );
      handleResize();
    });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <button className="Homebtn">
          <Link to="/">Home</Link>
        </button>
      </div>
      <div ref={gameContainer} className="main">
        <h1 className="game-title">{gameName.toUpperCase()}</h1>
        <SeriesContainer series={leagues.map(({ series }) => series).flat()} />
        <LeagueCarousel />
      </div>
    </div>
  );
};

export default GamePage;
