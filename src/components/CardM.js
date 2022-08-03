import React from "react";
import { useNavigate } from "react-router-dom";

function CardM({
  value: { card_name, card_price, card_duration, card_expiry, src },
}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/cart");
  };

  return (
    <div className="card">
      <h1 className="name">{card_name}</h1>
      <h1 className="price">{card_price}</h1>
      <h1 className="duration">{card_duration}</h1>
      <h1 className="expiry">{card_expiry}</h1>
      <button className="btn" onClick={onClick}>
        add to cart
      </button>

      <img src={src} alt="" />
    </div>
  );
}
export default CardM;
