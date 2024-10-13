import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute";

const app = express();
app.use(cors());
app.use(express.json());
app.use(adminRoute);

app.listen(5000, () => console.log("Running App"));
