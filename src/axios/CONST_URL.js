// url pour les requete axios

const BASE_URLTASKS= { 
    getListTasks: "http://localhost:3000/tasks", //http://localhost:3000/users //http://localhost:3000/tasks //http://localhost:3000/columns //https://backend.yonathan.ch/api/tasks/list
    getTask: "https://backend.yonathan.ch/api/tasks/get/", //https://backend.yonathan.ch/api/users/list //https://backend.yonathan.ch/api/columns/list
    postTask: "http://localhost:3000/tasks",
    updateTask: "http://localhost:3000/tasks/",
    removeTask: "https://backend.yonathan.ch/api/tasks/remove/"
};

const BASE_URLUSERS = {
    getListUsers: "http://localhost:3000/users",
};

const BASE_URLCOLUMNS = {
    getListColumns: "http://localhost:3000/columns",
    postColumn: "https://backend.yonathan.ch/api/columns/add",
    removeColumn: "https://backend.yonathan.ch/api/columns/remove/"
};

export { BASE_URLCOLUMNS, BASE_URLTASKS, BASE_URLUSERS };