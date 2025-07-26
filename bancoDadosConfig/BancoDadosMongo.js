import mongoose from "mongoose";

const url = 'url conection mongo mongodb://.....';
mongoose.connect(url, {useNewUrlParser: true}); 

export default mongoose	
