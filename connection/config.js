import mongoose from "mongoose";

const connection = async () => {
  mongoose.connect(
      "mongodb+srv://khalsaves112:DHyD2NkB7YgY9hgR@cluster0.b5adr91.mongodb.net/meta_data",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => {
      console.log("connection Successfully established");
    })
    .catch((err) => console.log(err.message));
};
export default connection;