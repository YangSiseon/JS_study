import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// const localMiddleware = (req, res, next) => {
//     console.log("here is middleware");
//     next(); //다음 함수를 실행
// };

const handleHome = (req, res) => {
    res.send("home");
};

// app.get("/", localMiddleware, handleHome);
app.get("/", handleHome);

export default app;
