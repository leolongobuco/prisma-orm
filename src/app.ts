import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App running on PORT ${process.env.PORT} 🚀`);
});
