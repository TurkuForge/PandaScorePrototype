import PropTypes from 'prop-types';
import SeriesCard from 'components/SeriesCard';
import LeagueCarousel from './LeagueCarousel';

const SeriesContainer = ({ series }) => {
  const hasSeries = series && series.length > 0;
  return (
    <div className="series">
      {hasSeries &&
        series.length &&
        series.map((serie, index) => {
          console.log(serie);
          return (
            <>
              <SeriesCard key={index} title={serie?.full_name ?? ''} />
              <LeagueCarousel />
            </>
          );
        })}
    </div>
  );
};

SeriesContainer.propTypes = {
  series: PropTypes.array
};

export default SeriesContainer;
