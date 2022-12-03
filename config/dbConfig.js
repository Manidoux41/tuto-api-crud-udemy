import mongoose from 'mongoose';


mongoose
    .connect(`${process.env.MONGODB}`, {
    useNewUrlParser: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to database'))


