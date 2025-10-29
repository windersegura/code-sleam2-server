import express, {Request, Response} from "express";
import userRoutes from "./routes/userRoutes";
import { logger } from "./middlewares/logger";

const app = express()
const PORT = process.env.PORT || 5001;

app.use(express.json());

//configure routes
app.use('/api', userRoutes)

//middlewares
app.use(logger);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
})

app.listen(PORT, () =>{
    console.log(`API is up to running 🚀`);
})