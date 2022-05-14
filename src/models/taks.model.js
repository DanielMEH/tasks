import mongoose from "mongoose";

const mongoseSchman = new mongoose.Schema({

    name:{

        type:String,
        required:true,
        trim:true,
    },

    description:{

        type:String,
        required:true,
        trim:true,
    }

},
{
  timestamps: true

})
export default mongoose.model("Tasks",mongoseSchman)
