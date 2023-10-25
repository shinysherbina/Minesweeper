import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://shadify.dev/api/minesweeper/generator?"; // API to generate minesweeper sequence
const start_position = "start=1-1"; // This indicates the start position. the start position will never have a mine. 


// Middleware - to make "public" folder as the static folder for express
app.use(express.static("public"));

app.get("/" , async(req,res)=>{
    try{
        const response = await axios.get(API_URL+start_position);
        //console.log(response.data.board);
        res.render("index.ejs", {res : JSON.stringify(response.data)});
    }catch(error){
        console.log(error.message);
        res.status(500);
    }
})

app.listen(port , ()=>{
    console.log(`Server running on ${port}`);
})