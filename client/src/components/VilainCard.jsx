import PropTypes from "prop-types";


function VilainCard({ vilain }) {
   return (
        <figure>
            {vilain.imgSrc != null ? (
        <img src={vilain.imgSrc} alt={vilain.name} />
      ) : (
        <p>???</p>
      )}
            <figcaption>{vilain.name}</figcaption>
        </figure>
    );
}

VilainCard.propTypes = {
  vilain: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default VilainCard;