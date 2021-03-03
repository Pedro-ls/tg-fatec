//external packages
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Ola Mundo!!! Bus World!!!");
});

app.listen("8800", () => {
    console.log(`Server: Clique aqui http://localhost:8800 success!!!`);
});