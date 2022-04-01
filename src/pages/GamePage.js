import { useParams } from 'react-router-dom';
import 'App.css';
import 'style.css';

const GamePage = () => {
  const params = useParams();
  return (
    <div>
      <div className="sidenav">
        <h4 className="sidenav-title">Series</h4>
      </div>
      <div className="main">
        <h1 className="Title">{params.gameName.toUpperCase()}</h1>
        <p>lorem ipusm</p>
      </div>
    </div>
  );
};
export default GamePage;
