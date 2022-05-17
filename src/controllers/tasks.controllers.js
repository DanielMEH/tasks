import Tasks from "../models/taks.model.js"

//? obtener datos
export const  getsTasks = async (req,res)=>{

    try {
    const TasksO = await Tasks.find();
    res.send(TasksO)
    } catch (error) {

      new Error( await res.status(500).json({"message":error.message}))
        
    }
}

// ? insert date
export const postTasks = async (req,res)=>{

   try {
    const {name, description} = req.body;
    const newPost = await  new Tasks({name,description});
     await newPost.save();
      return res.send(newPost)   
   } catch (error) {
       
    return res.status(500).json({"message":error.message})
       
   }
}


//? update date
export const putTasks = async(req,res)=>{

    try {
        let data= []
        const updateTask = await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateTask) return await res.sendStatus(400)
       data = updateTask;
       await res.send(data)
    } catch (error) {
        return res.status(500).json({"message":error.message})
    }
    
}

// ?delete date
export const DeleteTasks = async(req,res)=>{

    try {

        const deleteTasks = await Tasks.findByIdAndDelete(req.params.id,{new:true})
        if(!deleteTasks) return await res.sendStatus(500)
         res.send(deleteTasks)
        
    } catch (error) {
        return await res.status(500).json({"message":error.message})

    }
}

// ? obtener date
export const getTasks = async(req,res)=>{

    try {
        const TaskSeacrh = await Tasks.findById(req.params.id,{new:true})
        if(!TaskSeacrh) return res.sendStatus(500)
        res.send(TaskSeacrh)
    } catch (error) {
        
    }
}