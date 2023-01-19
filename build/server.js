"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./src/routers/api"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(`${process.env.MONGODB_URI}`);
server.use(body_parser_1.default.json());
server.use(api_1.default);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map