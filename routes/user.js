import express from "express";
const userRoute = express();

userRoute.use("/api", authRoutes);
// userRoute.use("/api/refreshToken", refreshTokenRoutes);
userRoute.use("/api/users", userRoutes);
export default userRoute;
