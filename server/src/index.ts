import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

const port = 3001;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
