import React from 'react';

const ProductLinks = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="product-link"
        >
          Learn more about {link.name}
        </a>
      ))}
    </div>
  );
};

export default ProductLinks;
