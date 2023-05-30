import React from 'react';

import './ProductCard.css';

function ProductCard() {
  return (
    <section className="product-card">
      
      <img 
        src="http://http2.mlstatic.com/D_730284-MLA46114648018_052021-W.jpg" 
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">
          R$: 220
        </h2>
        <h2 className="card__title">
          Manual do dev
        </h2>
      </div>

      <button type="button" className="button__add__cart">+</button>

    </section>
  );
}

export default ProductCard;