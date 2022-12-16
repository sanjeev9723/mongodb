import mongoose from "mongoose";
mongoose.set('strictQuery', true);
export default function () {
  mongoose.connect(
    "mongodb+srv://sanjeev9723:sanjeev@cluster0.uyxzpsl.mongodb.net/?retryWrites=true&w=majority",
    () => {
      console.log("connected to db ");
    }
  );
}
