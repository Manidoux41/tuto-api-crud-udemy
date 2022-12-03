import RoomModel from "../models/roomModel.js"

export const getTest =  (_,res) => {
    res.send({
        name: 'Manfred'
    })
}

export const postTest = (req,res) => {
    // console.log(req);
    res.send(req.body)
}

export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body) 
    await room.save();
    res.send(room);
}