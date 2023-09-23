import Button from "./Button";

async function productList() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

const Product = async () => {
  const data = await productList();
  //console.log("*******************************************************");
  console.log(data);
  return (
    <div>
      <h3>Server Side Component fetch data Call</h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((product) => {
          return (
            <li
              style={{
                listStyle: "none",
                width: "300px",
                textAlign: "center",
                padding: "20px",
                margin: "50px",
                border: "3px solid whitesmoke",
              }}
            >
              <article style={{ padding: "30px" }}>
                <header>
                  <h4>
                    {product.title}, $<strong>{product.price}</strong>
                  </h4>
                  <img
                    style={{ width: "100%", objectFit: "contain" }}
                    src={product.images[1]}
                    alt=""
                  />
                </header>
                <footer>
                  <p>{product.description.slice(0,33)}...</p>
                  <Button price={product.discountPercentage}>
                    Check discount Percentage
                  </Button>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
