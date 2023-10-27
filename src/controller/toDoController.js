import toDoModel from "../models/toDoModel";

// post a new task
export const postTask = async (req, res) => {
  try {
    const {duration, task} = req.body;
    const addTask = await toDoModel.create({
      duration,
      task,
    });

    return res.status(201).json({
      status: "201",
      message: "Good Job, A Task Postesd successfully.",
      data: addTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured, Failed To Add A Task",
      error: error.message,
    });
  }
};

// retrieve all tasks
export const getAllTasks = async (req, res) => {
  try {
    const viewTasks = await toDoModel.find();

    return res.status(200).json({
      status: "200",
      message: "To Do Tasks Is  Retrieved; Check:",
      data: viewTasks,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured, Failed To Retrieve Tasks!",
      error: error.message,
    });
  }
};

//  view a tasks on specific duraration
export const getTaskOnDuration = async (req, res) => {
  try {
    const {duration} = req.params;
    
    const tasksOnDuration = await toDoModel.find({"duration" : duration});
    console.log(duration)
    return res.status(200).json({
      status: "200",
      message: "Tasks In "+duration+" Basis Retrieved, Check:",
      data: tasksOnDuration,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured Failed To Retrieve Tasks!",
      error: error.message,
    });
  }
};
// Update A Task

export const updateTask = async (req, res) => {
  try {
    const {id}=req.params;
    const checkId = await toDoModel.findById(id);
    if(!checkId){
      return res.status(404).json({
        status : "404",
        message : "A Given Task Not Found, Try Again!" 
      })
    }
    const { duration, task} = req.body;
    
    const taskUpdated = await toDoModel.findByIdAndUpdate(id,{
      duration,
      task
    });
    return res.status(201).json({
      status: "201",
      message: "Good Job, A Task Updated Succesfully.",
      data: taskUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error Occured, Failed To Update A Task",
      error: error.message,
    });
  }
};

//Delete An Existing Task

export const deleteTask = async(req, res) => {
  try {
    const {id} = req.params;
    const checkId = await toDoModel.findById(id);
    if(!checkId){
      return res.status(404).json({
        status : "404",
        message : "A Given Task Not Found, Try Again!" 
      })
    }
    const taskDelete= await toDoModel.findByIdAndDelete(id);
    return res.status(201).json({
      status : "201",
      message : "Good Job, Post Deleted Successfully",
      dataDeleted : taskDelete,
    })
  } catch (error) {
    return res.status(500).json({
      status : "500",
      message : "Error Occured, Failed To Delete Post!",
      error : error.message,

    })
  }
}

