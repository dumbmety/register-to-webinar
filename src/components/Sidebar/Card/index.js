import './index.css';

const Card = ({ name, title, image }) => {
  return (
    <li className="card">
      <img src={`/img/${image}`} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </li>
  );
};

export default Card;
