import express from "express";
import {intents, fuse} from "../intents/intents";

const router = express.Router();

router.post("/", (req,res)=>{
    const {message} = req.body;
    if(!message) return res.status(400).json({error : "No message provided"});

    const q = message.toLowerCase();
    const result = fuse.search(q);

    if(result.length>0){
        return res.json({reply: result[0].item.response()});
    }

    return res.json({
        reply: "Sorry! I didn't quite understand that. Try asking me about Name, Skills, Projects, Certifications, or Education 😊 "
    });
});
export default router;
