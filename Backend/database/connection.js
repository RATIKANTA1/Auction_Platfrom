import mongoose from "mongoose";

export const connection = ()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "AUCTION_PLATFROM"
    }).then(()=>{
        console.log("Connect to database.");
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database: ${err}`);
    });
}