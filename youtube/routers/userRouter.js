import express from "express";
import routes from "../routes";
import {
    userDetail,
    users,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail); //routes.js에서 :id로 변수를 받아들이므로 가장 나중에 처리하도록.

export default userRouter;
