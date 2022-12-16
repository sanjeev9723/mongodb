import Product from "../schema/product-schema.js";

class ProductController {
  async getProducts(query) {
    try {
      const pageSize = query.pageSize || 2;
      const pageNumber = query.pageNumber || 2;
      console.log(query);

      const result = await Product.find()
        .sort({ productName: 1 })
        // .select({ productName: 1, productDescription: 1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async saveProduct(body) {
    try {
      const newProduct = await Product.create(body);
      const result = await newProduct.save();
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const result = await Product.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ProductController();



