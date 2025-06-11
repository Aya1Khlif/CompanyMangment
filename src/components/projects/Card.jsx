import { Link } from 'react-router-dom';

const Card = ({ image, description, isOpen, toggleOpen, btn }) => {
  const defaultImage = '/default-image.jpg'; // أضيفي صورة افتراضية في public

  return (
    <div className={`card-container ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <div className="card-image">
        <img
          src={image || defaultImage}
          alt="Project"
          onError={(e) => { e.target.src = defaultImage; }}
        />
      </div>
      <div className={`card-description ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
        <Link to="/projects" className="button-card">
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default Card;