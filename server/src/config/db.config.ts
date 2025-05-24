import { connect } from "mongoose"

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/spotify-clone";
const connectDB = async () => {
    await connect(dbUrl)
}

export default connectDB;