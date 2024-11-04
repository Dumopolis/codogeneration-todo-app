import express from "express";
import todoRoutes from "./routes/todoRoutes";
import cors from "cors";
import "./config/database"; // подключение к базе данных

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
