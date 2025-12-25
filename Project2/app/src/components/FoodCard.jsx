

const FoodCard = ({ name, text, price, type, image }) => {
  return (
    <div className="food-card">
      <div className="food-image">
        <img src={image} alt={name} />
      </div>
      <div className="food-content">
        <h3>{name}</h3>
        <p>{text}</p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
