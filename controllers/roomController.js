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

// Add room
export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body) 
    await room.save();
    res.send(room);
}

// Read All rooms
export const getRooms = async (req,res) =>{
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

// Read One room
export const getOneRoom = async (req, res) => {
    console.log(req.params.id);
    const room = await RoomModel.find({ _id:req.params.id })
    res.send(room)
}

// Update one room
export const updateRoom = async (req,res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await room.save();
    res.send(room)
}

// Delete room

export const deleteRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndDelete(req.params.id)
    if (!room) {
        res.status(404).send('Aucune chambre trouvée.')
    }
    es.status(200).send()
}