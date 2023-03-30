import jwt from "jsonwebtoken";
import httpResponse from "../utils/httpResponse.js";

export default (req, res, next) => {
    const token = req.header("authorization");
    if (!token) return httpResponse.BAD_REQUEST(res, "Need token (JWT) to hit this API", "Access denied. No token provided.");

    const bearerToken = token.split(" ")[1];

    try {
        const decoded = jwt.verify(bearerToken, "my_temporary_secret");
        req.user = decoded;
        next();
    } catch (ex) {
        httpResponse.UNAUTHORIZED(res, "Token is not valid", "Invalid token.")
    }
}