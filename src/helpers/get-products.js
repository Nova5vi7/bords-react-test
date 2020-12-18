import client from "client";

const feachData = async () => {
  try {
    const { data: products } = await client.get("/products");
    return products;
  } catch (err) {
    console.error(err);
  }
};

export default feachData;
