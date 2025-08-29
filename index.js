"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_url_1 = require("node:url");
const node_path_1 = __importDefault(require("node:path"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = 3000;
// @ts-ignore
const __filename = (0, node_url_1.fileURLToPath)(import.meta.url);
const __dirname = node_path_1.default.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", node_path_1.default.join(__dirname, "views"));
app.use(express_1.default.static(node_path_1.default.join(__dirname, "public")));
app.use(routes_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map