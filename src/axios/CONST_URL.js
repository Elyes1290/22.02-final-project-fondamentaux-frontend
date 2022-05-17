// url pour les requete axios

const BASE_URLTASKS= { 
    getListTasks: "http://localhost:3000/tasks", //api/tasks/list
    getTask: "/api/tasks/get/",
    postTask: "/api/tasks/add",
    updateTask: "/api/tasks/update/",
    removeTask: "/api/tasks/remove/"
};

const BASE_URLUSERS = {
    getListUsers: "http://localhost:3000/users", ///api/users/list
};

const BASE_URLCOLUMNS = {
    getListColumns: "http://localhost:3000/columns", ///api/columns/list
    postColumn: "/api/columns/add",
    removeColumn: "/api/columns/remove/"
};

export { BASE_URLCOLUMNS, BASE_URLTASKS, BASE_URLUSERS };