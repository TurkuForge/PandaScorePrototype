import PropTypes from 'prop-types';
import LeagueCard from './LeagueCard';
import { Carousel } from '@trendyol-js/react-carousel';
import SeriesCard from './SeriesCard';

const LeagueCarousel = ({ leagues, title, image, items }) => {
  return (
    <div
      className="LeagueCarousel"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <h3>{title}</h3>
      {items && (
        <div>
          <h4>
            <SeriesCard series={leagues.map(({ series }) => series).flat()} />
          </h4>
          <Carousel className="Carousel" show={items - 0.45}>
            {leagues.map(({ image, title }, index) => (
              <LeagueCard key={index} title={title ?? ''} image={image} />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

LeagueCarousel.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default LeagueCarousel;
