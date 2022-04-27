import 'styles/App.css';
import 'styles/style.css';
import { useState, useEffect } from 'react';
import { http } from 'http';
import GameContainer from 'components/GameContainer';
import LiveContainer from 'components/LiveContainer';

function LandingPage() {
  const [games, setGames] = useState([]);
  const [lives, setLives] = useState([]);

  useEffect(async () => {
    const response = await http('videogames');
    setGames(
      response.map(({ leagues, name, slug }) => {
        console.log(slug);
        return { image: leagues[0].image_url, title: name, link: `/games/${slug ?? `unknown`}` };
      })
    );
    setLives(
      response.map(({ lives, name, link }) => {
        console.log(name);
        return { image: lives.image_url, title: name, link: link };
      })
    );
  }, []);

  return (
    <div className="App">
      <h2 className="title">Choose your game!</h2>
      <GameContainer games={games} />

      <h4 className="liveTitle">Currently live</h4>
      <LiveContainer lives={lives} />
    </div>
  );
}
export default LandingPage;
