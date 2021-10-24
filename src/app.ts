import express from "express";
import teamRoutes from "./routes/teamRoutes";

const app = express();
app.use(express.json());
app.use("/teams", teamRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running on PORT ${process.env.PORT} 🚀`);
});
