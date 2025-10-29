import express, {Request, Response} from "express";

const app = express()
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
})

app.listen(PORT, () =>{
    console.log(`API is up to running 🚀`);
})