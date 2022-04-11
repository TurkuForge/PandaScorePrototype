import 'styles/App.css';
import 'styles/style.css';
import LeagueCard from 'components/LeagueCard';
import { Carousel } from '@trendyol-js/react-carousel';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { http } from 'http';
import SeriesContainer from 'components/SeriesContainer';

function handleClick() {
  window.location.href = '/';
}

const GamePage = () => {
  const params = useParams();
  const [gameName, setGameName] = useState(params.gameName);
  const [leagues, setLeagues] = useState([]);
  const [resize, setResize] = useState(window.innerWidth);

  useEffect(async () => {
    const { leagues: response, name } = await http(`videogames/${params.gameName}`);
    setGameName(name);
    setLeagues(
      response.map(({ image_url, name, series }) => {
        return { image: image_url, title: name, series };
      })
    );
  }, []);
  useEffect(() => {
    function handleResize() {
      setResize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="sidenav">
        <h4 className="sidenav-title">Series</h4>
        <button className="Homebtn" onClick={handleClick}>
          Home
        </button>
        <SeriesContainer series={leagues.map(({ series }) => series).flat()} />
      </div>
      <div className="main">
        <h1 className="Title">{gameName.toUpperCase()}</h1>
        {leagues.length && !!resize && (
          <Carousel className="Carousel" responsive={false} dynamic={false}>
            {leagues.map(({ image, title }, index) => (
              <LeagueCard key={index} title={title ?? ''} image={image} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default GamePage;
