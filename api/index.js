import  express  from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(express.json());//to parse the incoming request with JSON payload(from req.body)
app.use("/api/auth",authRoutes);


// app.get('/test', function(req, res) {
//     res.json("test ok**");
// })

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Listening on ${PORT}`);
})