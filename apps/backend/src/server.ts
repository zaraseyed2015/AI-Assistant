import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {

    console.log("");

    console.log("====================================");

    console.log(" AI Assistant Platform Backend");

    console.log("====================================");

    console.log(` Environment : ${env.NODE_ENV}`);

    console.log(` Port        : ${env.PORT}`);

    console.log(` API         : http://localhost:${env.PORT}${env.API_PREFIX}`);

    console.log("");

});