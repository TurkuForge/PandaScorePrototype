import PropTypes from 'prop-types';
import SeriesCard from 'components/SeriesCard';

const SeriesContainer = ({ series }) => {
  const hasSeries = series && series.length > 0;
  return (
    <div className="series">
      {hasSeries &&
        series.length &&
        series.map((serie, index) => <SeriesCard key={index} title={serie?.full_name ?? ''} />)}
    </div>
  );
};

SeriesContainer.propTypes = {
  series: PropTypes.array
};

export default SeriesContainer;
