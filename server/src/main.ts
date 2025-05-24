import app from "./config/app.config";
import { config } from "dotenv"
import connectDB from "./config/db.config";
import { connection } from "mongoose";

config()

connectDB()

connection.once("open", () => {
    console.log("connected to database");
    app.listen(process.env.SERVER_PORT || 5000, () => {
        console.log("server started");
    });
})
