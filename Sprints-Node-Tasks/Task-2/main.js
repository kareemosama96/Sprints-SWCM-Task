import fetch from "node-fetch";

const fetchDataFromUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const START = async () => {
  try {
    const [productsResponse, conversionRateResponse] = await Promise.all([
      fetchDataFromUrl("https://api.escuelajs.co/api/v1/products?offset=1&limit=3"),
      fetchDataFromUrl("https://api.exchangerate.host/convert?from=USD&to=EGP"),
    ]);

    const { result: conversionRate } = conversionRateResponse;
    const transformedData = {};
    productsResponse.forEach((product) => {
      const { category } = product;
      const { id: categoryId, name: categoryName } = category || {};
      //check if it is already founded
      if (!transformedData[categoryId]) {
        transformedData[categoryId] = {
          category: {
            id: categoryId,
            name: categoryName,
          },
          products: [],
        };
      }

      const transformedProduct = { ...product };
      transformedProduct.price *= conversionRate;

      transformedData[categoryId].products.push(transformedProduct);
    });

    const formattedData = JSON.stringify(Object.values(transformedData), null, 2);
    console.log(formattedData);
  } 
  catch (err) {
    console.log("error :", err.message);
  }
};

START();
