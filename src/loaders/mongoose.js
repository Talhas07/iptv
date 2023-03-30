import mongoose from "src/loaders/mongoose.js"
import config from "../config/index.js"

export default async function mongooseLoader() {
  const connection = mongoose.connection
  connection.once("connected", () => console.log("Database Connected ~"))
  connection.on("error", error => console.log("Database Error: ", error))

  await mongoose.connect(config.env.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return connection.db
}

