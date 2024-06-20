"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//http://localhost:3000/cancha
app.use('/cancha', routes_1.canchaRouter);
app.use('/deportista', routes_1.deportistaRouter);
app.use('/separacioncancha', routes_1.separacioncancha);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
