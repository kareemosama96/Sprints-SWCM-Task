'use strict'
import fetch from "node-fetch";
import http from "http";
import url from "url";
import joi from "joi";

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const query = url.parse(req.url).query;

  if (req.method === "GET" && pathname === "/products") {
    const products = async () => {
      try {
        const [productsResponse, exchangeRateResponse] = await Promise.all([
          fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=4"),
          fetch(
            `https://api.exchangerate.host/convert?from=USD&to=${query}`
          ),
        ]);
        if (!productsResponse.ok || !exchangeRateResponse.ok) {
          throw new Error("Unable to fetch data from API");
        }

        const productsData = await productsResponse.json();
        const exchangeRateData = await exchangeRateResponse.json();
        const conversionRate = exchangeRateData.result;
        console.log(exchangeRateData);

        const transformedProducts = productsData.reduce((acc, product) => {
          if (!acc[product.category?.id]) {
            acc[product.category?.id] = {
              category: {
                id: product.category?.id,
                name: product.category?.name,
              },
              products: [],
            };
          }

          const transformedProduct = {
            ...product,
            price: product.price * conversionRate,
          };
          acc[product.category?.id].products.push(transformedProduct);

          return acc;
        }, {});

        res.end(JSON.stringify(Object.values(transformedProducts), null, 2));
      } catch (error) {
        console.log(error);
      }
    };

    products();
  } else if (req.method === "POST" && pathname == "/products") {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const schema = joi.object({
          name: joi.string().required(),
          category: joi.string().required(),
          price: joi.number().required(),
        });

        const product = JSON.parse(chunks.toString());
        const validatedProduct = schema.validateSync(product, { strict: true });

        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify(validatedProduct));
        res.end();
      } catch (error) {
        res.writeHead(404);
        res.end();
      }
    });

    request.on("error", (error) => {
      res.setHeader("Content-Type", "text");
      res.writeHead(404);
      res.write(error.message);
      res.end();
    });
  } else {
    res.end("Error!");
  }
});

// server.listen(8080, "127.0.0.1", () => {
//   console.log("Converting from USD ...");
// });
server.listen(8080, () => {
  console.log("\nSERVER is running on http://localhost:8080");
});
