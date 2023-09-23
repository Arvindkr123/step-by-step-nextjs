"use client";

import React, { useEffect, useState } from "react";

function Product() {
  const [item, setItem] = useState([]);
  const fetchdata = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setItem(data.products);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Product List</h1>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {item.map((ele) => {
          return (
            <li
              style={{
                listStyle: "none",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <article
                style={{
                  maxWidth: "400px",
                  textAlign: "center",
                  boxShadow: "2px 2px 8px #000",
                  padding: "10px 20px",
                }}
              >
                <header>
                  <p>{ele.title}</p>
                  <p>
                    $ <strong> {ele.price}</strong>
                  </p>
                </header>
                <footer>
                  <img
                    style={{
                      width: "100%",
                      objectPosition: "center",
                      objectFit: "contain",
                    }}
                    src={ele.images[0]}
                    alt=""
                  />
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Product;
