import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  price: Number,

  categories: [String],
});

export default new mongoose.model("Product", productSchema);




//     const productSchema = new mongoose.Schema({
//       productName: String,
//       productDescription: String,
//       price: Number,

//       categories:[String],

//   });
// const Product = new mongoose.model("Product", productSchema);

// await  Product.create({
//     productName: 'pencil',
//     productDescription: 'Drawing pencil',
//     price: 150,
//     categories:['stationary'],
// })

// async function getProductData(){
// const result = await Product.find({});
// console.log(result);
// }
// getProductData()