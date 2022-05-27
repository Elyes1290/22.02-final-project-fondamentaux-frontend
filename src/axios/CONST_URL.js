// url pour les requete axios

const BASE_URLTASKS= { 
    getListTasks: "http://localhost:8181/tasks", //http://localhost:3000/users //http://localhost:3000/tasks //http://localhost:3000/columns //https://backend.yonathan.ch/api/tasks/list
    getTask: "http://localhost:8181/api/tasks/get/", //https://backend.yonathan.ch/api/users/list //https://backend.yonathan.ch/api/columns/list
    postTask: "http://localhost:8181/tasks",
    updateTask: "http://localhost:8181/tasks/",
    removeTask: "http://localhost:8181/tasks/"
};

const BASE_URLUSERS = {
    getListUsers: "http://localhost:8181/users",
};

const BASE_URLCOLUMNS = {
    getListColumns: "http://localhost:8181/columns",
    postColumn: "http://localhost:8181/columns",
    removeColumn: "http://localhost:8181/columns/"
};

export { BASE_URLCOLUMNS, BASE_URLTASKS, BASE_URLUSERS };