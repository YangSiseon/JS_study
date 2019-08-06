import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Youtube";
    res.locals.routes = routes;
    next();
};
