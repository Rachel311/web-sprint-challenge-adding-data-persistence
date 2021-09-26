const db = require('../../data/dbConfig');

const getTask = async () => {
    const allTasks = await db('tasks').leftJoin(
        'projects',
        'tasks.project_id',
        'projects.project_id'
    );

    const tasks = allTasks.map((task) => {
        return {
            task_id: task.task_id,
            task_notes: task.task_notes,
            task_description: task.task_description,
            task_completed: task.task_completed,
            project_id: task.project_id,
            project_name: task.project_name,
            project_description: task.project_description,
        };
    });
    return tasks;
};

async function taskById(task_id) {
    const oneTask = await db('tasks').where('task_id', task_id).first();
    return {
        task_id: oneTask.task_id,   
        task_notes: taskOne.task_notes,
        task_description: taskOne.task_description,
        task_completed: taskOne.task_completed === 0 ? false : true,
    };
}

const createTask = async (task) => {
    const [task_id] = await db('tasks').insert(task);
    return taskById(task_id);
};

module.exports = {
    getTask,
    createTask
};
