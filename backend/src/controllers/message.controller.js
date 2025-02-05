import User from "../models/user.model.js";
export const getUsers = async(req, res)=>{
    try{

        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({
            _id: {$ne: loggedInUserId}
        }).select("-password")

        res.status(200).json(filteredUsers)
    }catch(error){
        console.log(error)
    }
}


export const getMessage = async(req, res)=>{
    try{

        const {id} = req.params


    }catch(error){
        res.status(500).json({
            message:"Error occur in receive message"
        })

        console.log(error)
    }
    
}