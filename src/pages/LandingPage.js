import 'styles/App.css';
import 'styles/style.css';
import { useState, useEffect } from 'react';
import { http } from 'http';
import GameContainer from 'components/GameContainer';

function LandingPage() {
  const [games, setGames] = useState([]);

  useEffect(async () => {
    const response = await http('https://api.pandascore.co/videogames');
    setGames(
      response.map(({ leagues, name, slug }) => {
        console.log(slug);
        return { image: leagues[0].image_url, title: name, link: `/games/${slug ?? `unknown`}` };
      })
    );
  }, []);

  return (
    <div className="App">
      <h2 className="title">Choose your game!</h2>
      <GameContainer games={games} />
    </div>
  );
}
export default LandingPage;
