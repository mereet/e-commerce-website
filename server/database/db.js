import mongoose from 'mongoose';

 export const Connection = async (username, password) => {
   
   // const URL = `mongodb+srv://${username}:${password}@cluster0.xfk8xfr.mongodb.net/?retryWrites=true&w=majority`
    //const URL=`mongodb://${username}:${password}@ac-a9eryc9-shard-00-00.xfk8xfr.mongodb.net:27017,ac-a9eryc9-shard-00-01.xfk8xfr.mongodb.net:27017,ac-a9eryc9-shard-00-02.xfk8xfr.mongodb.net:27017/?ssl=true&replicaSet=atlas-dygn8g-shard-0&authSource=admin&retryWrites=true&w=majority`;
//const URL=`mongodb://${username}:${password}@ac-bfqhadl-shard-00-00.yyanhmk.mongodb.net:27017,ac-bfqhadl-shard-00-01.yyanhmk.mongodb.net:27017,ac-bfqhadl-shard-00-02.yyanhmk.mongodb.net:27017/?ssl=true&replicaSet=atlas-ca9yl8-shard-0&authSource=admin&retryWrites=true&w=majority`;
const URL=`mongodb+srv://${username}:${password}@ecom.yyanhmk.mongodb.net/?retryWrites=true&w=majority`;

try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;