const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://mernyoutube:mernyoutube@cluster0.nj5g05u.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => console.log(`no connection`));
