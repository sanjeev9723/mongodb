import connect from "./db.js";
import express from "express";
import productController from "./controller/product-controller.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-products", async (req, res) => {
  try {
    const result = await productController.getProducts(req.query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.statusMessage = "unsuccessful failed";
    res.send(" error");
  }
});

app.post("/delete-product/:id", async (req, res) => {
  try {
    const result = await productController.deleteProduct(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.statusMessage = "unsuccessful failed";
    res.send("error.message");
  }
});

app.post("/save-product", async (req, res) => {
  try {
    const result = await productController.saveProduct(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.statusMessage = "unsuccessful failed";
    res.send("error.message");
  }
});

app.listen(3000, () => {
  connect();
  console.log("server is working");
});
