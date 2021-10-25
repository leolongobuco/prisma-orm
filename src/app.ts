import express from "express";
import teamRoutes from "./routes/teamRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/teams", teamRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running on PORT ${process.env.PORT} 🚀`);
});
