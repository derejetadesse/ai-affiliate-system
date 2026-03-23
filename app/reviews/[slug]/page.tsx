const products = {
  chair: {
    name: "Ergonomic Chair",
    price: "$99",
    description: "Comfortable chair for long work hours",
    affiliate: "https://www.amazon.com/"
  },
  "laptop-stand": {
    name: "Laptop Stand",
    price: "$29",
    description: "Adjustable aluminum stand",
    affiliate: "https://www.amazon.com/"
  },
  keyboard: {
    name: "Wireless Keyboard",
    price: "$49",
    description: "Slim wireless keyboard",
    affiliate: "https://www.amazon.com/"
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug];

  if (!product) {
    return <div style={{ padding: "40px" }}>Product not found</div>;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>

      <a href={product.affiliate} target="_blank">
        Buy on Amazon
      </a>
    </div>
  );
}
