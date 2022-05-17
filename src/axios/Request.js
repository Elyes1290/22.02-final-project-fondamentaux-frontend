import { BASE_URLCOLUMNS, BASE_URLTASKS, BASE_URLUSERS} from "./CONST_URL.js";

class Request {

    /**
     * 
     * @returns liste de tous le users
     */
    static async getUsers() {
        try {
            console.log("[Request.js][getUsers] request was sended");
            const response = await axios.get(BASE_URLUSERS.getListUsers);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][getUsers] Error to get request for Users list");
            throw new Error(err);
        }
    }

    /**
     * 
     * @returns liste de toutes les taches
     */
    static async getListTasks() {
        try {
            console.log("[Request.js][geListTasks] request was sended");
            const response = await axios.get(BASE_URLTASKS.getListTasks);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][getListTasks] Error to get request for Tasks list");
            throw new Error(err);
        }
    }

    /**
     * 
     * @param {*} id id pour obtenir une tache
     * @returns format json avec la tache.
     */
    static async getTask(id) {
        try {
            console.log("[Request.js][getTask] request was sended");
            const response = await axios.get(BASE_URLTASKS.getTask + id);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][getTask] Error to get request for a Task");
            throw new Error(err);
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une tache.
     * @returns message pour confirmer ajout d'une tache.
     */
    static async postTask(post) {
        try {
            console.log("[Request.js][postTask] post request was sended");
            const response = await axios.post(BASE_URLTASKS.postTask, post);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][postTask] Error to post a Task request");
            throw new Error(err);
        }
    }

    /**
     * 
     * @param {*} id id de la tache a modifier.
     * @param {*} update format json avec les nouvelle donnee.
     * @returns message pour confirmer la modification d'une tache.
     */
    static async updateTask(id, update) {
        try {
            console.log("[Request.js][updateTask] update request was sended");
            const response = await axios.put(BASE_URLTASKS.updateTask + id, update);
            if (parseInt(response.status) === 200) {
                return response = "Tache modifier";
            }
        }catch(err) {
            console.log("[Request.js][updateTask] Error to update Task");
            throw new Error(err);
        }
    }

    /**
     * 
     * @param {*} id id pour eliminer une tache
     * @returns message pour confirmer l'elimination d'une tache.
     */
    static async removeTask(id) {
        try {
            console.log("[Request.js][removeTask] request was sended");
            const response = await axios.delete(BASE_URLTASKS.removeTask + id);
            if (parseInt(response.status) === 200) {
                return response = "Deleted task successfully";
            }
        }catch(err) {
            console.log("[Request.js][removeTask] Error to remove Tasks");
            throw new Error(err);
        }
    }

    /**
     * 
     * @returns liste des colonnes
     */
    static async getListColumns() {
        try {
            console.log("[Request.js][geListColumns] request was sended");
            const response = await axios.get(BASE_URLCOLUMNS.getListColumns);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][getListColumns] Error to get request for Columns list");
            throw new Error(err);
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une colonne.
     * @returns message pour confirmer ajout d'une colonne.
     */
    static async postColumn(post) {
        try {
            console.log("[Request.js][postColumns] request was sended");
            const response = await axios.post(BASE_URLCOLUMNS.postColumn, post);
            if (parseInt(response.status) === 200) {
                return response.data;
            }
        }catch(err) {
            console.log("[Request.js][postColumns] Error to add a Column");
            throw new Error(err);
        }
    }
    
    /**
     * 
     * @param {*} id id pour eliminer une colonne.
     * @returns message pour confirmer l'elimination une colonne.
     */
    static async removeColumn(id) {
        try {
            console.log("[Request.js][removeColumns] request was sended");
            const response = await axios.delete(BASE_URLCOLUMNS.removeColumn + id);
            if (parseInt(response.status) === 200) {
                return response = "Deleted column successfully";
            }
        }catch(err) {
            console.log("[Request.js][removeColumns] Error to remove column");
            throw new Error(err);
        }
    }
}

export { Request };