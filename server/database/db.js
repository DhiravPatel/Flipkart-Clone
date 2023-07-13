import mongoose from "mongoose";

export const Connection = async(username, password) =>{

    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.7vqh29b.mongodb.net/ECOMMERCE-WEBSITE?retryWrites=true&w=majority`

    // const URL = 'mongodb://dhirav:Dp712%21@ac-bsqnnlj-shard-00-00.7vqh29b.mongodb.net:27017,ac-bsqnnlj-shard-00-01.7vqh29b.mongodb.net:27017,ac-bsqnnlj-shard-00-02.7vqh29b.mongodb.net:27017/ECOMMERCE-WEBSITE?ssl=true&replicaSet=atlas-fnckde-shard-0&authSource=admin&retryWrites=true&w=majority'


    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database Connected Succesfully');
    }catch(error){
        console.log(error.message);
    }
} 

export default Connection;