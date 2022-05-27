class Request {

    /**
     * 
     * @param {*} id id pour obtenir une tache
     * @returns {Object[{
     * 
     * }]}
     */
    static async get(URL, id) {
        let response;
        try {
            console.log("[Request.js][getUsers] request was sended");
            if (id !== undefined) {
                response = await axios.get(URL + id);
            } else {
                response = await axios.get(URL);
            }

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
     * @param {*} post format json pour ajouter une tache.
     * @returns message pour confirmer ajout d'une tache.
     */
    static async post(URL, post) {
        try {
            console.log("[Request.js][postTask] post request was sended");
            const response = await axios.post(URL, post);
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
    static async update(URL, id, update) {
        try {
            console.log("[Request.js][updateTask] update request was sended");
            const response = await axios.put(URL + id, update);
            if (parseInt(response.status) === 200) {
                return response = "element update successfully";
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
    static async remove(URL, id) {
        try {
            console.log("[Request.js][removeTask] request was sended");
            const response = await axios.delete(URL + id);
            if (parseInt(response.status) === 200) {
                return response = "Deleted element successfully";
            }
        }catch(err) {
            console.log("[Request.js][removeTask] Error to remove Tasks");
            throw new Error(err);
        }
    }
}

export { Request };