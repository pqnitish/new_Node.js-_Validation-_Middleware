const express = require("express");
const todoApiRouter = require("./routes/totoApi.routes.js");
const app = express();
const PORT = 3006;
app.use(express.json());// middleware to parse incoming JSON requests
app.use("/",todoApiRouter);
app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
    
});