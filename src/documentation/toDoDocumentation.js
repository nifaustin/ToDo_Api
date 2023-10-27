/**
 *  @swagger
 * /cohort/todo/addTask/:
 *   post:
 *     summary: Add New Task On ToDo List.
 *     tags: [ToDo-Model]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               duration:
 *                 type: string
 *                 enum : [Daily, Weekly, Monthly, Yearly]
 *               task:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good job, Task Added Successfully.
 *       500:
 *         description: Failed To Add Task!
 * 
 * /cohort/todo/getToDoList/:
 *   get:
 *     summary: View Full ToDo List.
 *     tags: [ToDo-Model]
 *     responses:
 *       200:
 *         description: ToDo List Retrieved SuccessFully.
 *       500:
 *         description: Failed To Retrieve ToDo List.
 * 
 * /cohort/todo/durationTask/{duration}:
 *   get:
 *     summary: View Tasks On Secific Duration.
 *     tags: [ToDo-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: duration
 *         required: true
 *         description: Duration To Filter.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task On Given Duration Retrieved Successfully.
 *       500:
 *         description: Failed To Retrieve Task!
 * 
 * /cohort/todo/updateTask/{id}:
 *   put:
 *     summary: Update Task On To Do List.
 *     tags: [ToDo-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of Task To Update.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               duration:
 *                 type: string
 *                 enum : [Weekly, Daily, Monthly, Yearly]
 *               task:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good Job, Task Updated Successflly.
 *       404:
 *         description: Id Provided Do Not Correspond To Any Task!.
 *       500:
 *         description: Failed To Update Specified Task!
 * 
 * /cohort/todo/deleteTask/{id}:
 *   delete:
 *     summary: Delete A Task.
 *     tags: [ToDo-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID Of Task To Delete.
 *     responses:
 *       200:
 *         description: A Given Task Deleted Successfully.
 *       404:
 *         description: ID Specified Do Not Correspond To Any Post.
 *       500:
 *         description: Failed to Delete A Task.
 */