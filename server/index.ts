import express,{ Application, Router ,Request, Response} from "express";
import { userRoutes } from "./routes/userRoute";
import { ConnectDB } from "./db";
import dotenv from "dotenv";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";



ConnectDB();
dotenv.config();


const app: Application = express();
var router: Router= require('express').Router();
const port: number = 3000;
app.use(router);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use("/api/user", userRoutes);

router.get("/", function (req:Request, res:Response) : void {
    res.send("<h1>test</h1>");
  });
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
})
