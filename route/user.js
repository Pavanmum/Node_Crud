import express from "express";
import User from "../model/user.model.js";

const router = express.Router();

router.post("/create",async(req, res) =>{
    try {
        const user = await User(req.body);
        await user.save()
        res.status(201).json({
            status : true,
            message : user
            
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message: error.message
        })
    }
   
})

router.get("/read/:id",async(req, res) =>{
    const read = await User.findById(req.params.id);
    if (!read){
        res.status(400).json({
            success : false,
            message: error.message
        })
    } 

    res.status(200).json({
        status: true,
        message: read
    })
})

router.delete("/delete/:id", async(req,res) =>{
    try {
        const deleteId = User.findById(req.params.id);

        if (!deleteId) return res.status(404).json({ message: 'User not found' })

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: true,
            message: "Deleted Successfully"
        })

    } catch (error) {
        return res.status(404).json({
            status: false,
            message : error.message})
    }
})

router.put("/update/:id",async(req,res) => {
    
    const userid = req.params.id;
    const userdetail = req.body;

    try {
        
        const details = await User.findByIdAndUpdate(
            userid , userdetail,{new: true}
        )
    
        if (!details) {
            res.status(404).json({
                message:"User not Found"
            })
        }
    
        res.status(200).json({
            status: true,
            message: details
        })
    } catch (error) {
        res.json(error)
    }

   
})

export default router