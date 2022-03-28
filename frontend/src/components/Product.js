import React from 'react';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        {/* <!-- 680 x 830 --> */}
        <img className="medium" src={product.image} alt="product" />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">$ {product.price}</div>
      </div>
    </div>
  );
}
