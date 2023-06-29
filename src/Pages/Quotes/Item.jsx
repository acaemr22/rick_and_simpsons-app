import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Link className="quote_item" to={`/quotes/${item.id}`}>
        {item.quote}
      </Link>
      <br /> - <strong>{item.character}</strong> <br />
      <br />
    </div>
  );
};

export default Item;
