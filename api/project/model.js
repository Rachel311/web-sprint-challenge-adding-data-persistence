const db = require('.../data/dbConfig');

const getProject = async () => {
    const projects = await db('projects');

    const projectMap = projects.map((project) => {
        return {
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed === 0 ? false : true,
        };
    });
    return projectMap
};

const getBy = async (id) => {
    const projectFirst = await db('projects').where('project_id', id).first();
    return {
        project_id: projectFirst.project_id,
        project_name: projectFirst.project_name,
        project_description: projectFirst.project_description,
        project_completed: projectFirst.project_completed === 0 ? false : true,
    };
};

const createProject = async (project) => {
    const [project_id] = await db('projects').insert(project);
    return getBy(project_id);
};

module.exports = {
    getProject,
    createProject
};
