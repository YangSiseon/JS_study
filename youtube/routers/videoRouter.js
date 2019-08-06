import express from "express";
import routes from "../routes";
import {
    videoDetail,
    videos,
    upload,
    editVideo,
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
