import express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";
import router from "./routes";

const app = express();
const PORT = 3000;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});