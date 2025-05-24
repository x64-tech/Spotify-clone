import app from "./config/app";
import { config } from "dotenv"

config()

app.listen(process.env.SERVER_PORT || 5000, () => {
    console.log(`server running on port ${process.env.SERVER_PORT || 5000}`);
});