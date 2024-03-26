import  express  from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express()

app.use("/api/",authRoutes)

app.get('/test', function(req, res) {
    res.json("test ok**");
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})