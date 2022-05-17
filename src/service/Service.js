import { Request } from "../axios/Request.js";

let error = "";
let loading = true;

class Service {

    /**
     * 
     * @returns la response de axios (listes des users), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceGetUsers() {
        try {
            console.log("[Service.js][serviceGetUsers] request get sended to axios");
            return await Request.getUsers();
        } catch (err) {
            console.log("[Service.js][serviceGetUsers] error request from service.js")
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @returns la response de axios (listes des taches), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceGetTasks() {
        try {
            console.log("[Service.js][serviceGetTasks] request get sended to axios");
            return await Request.getListTasks();
        } catch (err) {
            console.log("[Service.js][serviceGetTasks] error request from service.js")
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} id id de la tache a eliminer
     * @returns la response de axios (une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceGetTask(id) {
        try {
            console.log("[Service.js][serviceGetTask] request get sended to axios");
            return await Request.getTask(id);
        } catch (err) {
            console.log("[Service.js][serviceGetTask] error request from service.js")
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une tache.
     * @returns la response de axios (ajout de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    async servicePostTask(post) {
        try {
            console.log("[Service.js][servicePostTask] request post sended to axios");
            return await Request.postTask(post);
        } catch (err) {
            console.log("[Service.js][servicePostTask] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} id id de la tache a modifier.
     * @param {*} update format json avec les nouvelle donnee.
     * @returns la response de axios (modification de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceUpdateTask(id, update) {
        try {
            console.log("[Service.js][serviceUpdateTask] request update sended to axios");
            return await Request.updateTask(id, update);
        } catch (err) {
            console.log("[Service.js][serviceUpdateTask] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} id id pour eliminer une tache
     * @returns la response de axios (elimination de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceRemoveTask(id) {
        try {
            console.log("[Service.js][serviceRemoveTask] request remove sended to axios");
            return await Request.removeTask(id);
        } catch (err) {
            console.log("[Service.js][serviceRemoveTask] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @returns la response de axios (listes de colonnes), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceGetcolumns() {
        try {
            console.log("[Service.js][serviceGetColumns] request get sended to axios");
            return await Request.getListColumns();
        } catch (err) {
            console.log("[Service.js][serviceGetColumns] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une colonne.
     * @returns la response de axios (ajout de colonne), puis renvoie une erreur ou/et le loading si il y a.
     */
    async servicePostColumn(post) {
        try {
            console.log("[Service.js][servicePostColumns] request post sended to axios");
            return await Request.postColumn(post);
        } catch (err) {
            console.log("[Service.js][servicePostColumns] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }

    /**
     * 
     * @param {*} id id pour eliminer une colonne.
     * @returns la response de axios (elimination de une colonne), puis renvoie une erreur ou/et le loading si il y a.
     */
    async serviceRemoveColumn(id) {
        try {
            console.log("[Service.js][serviceRemoveColumns] request remove sended to axios");
            return await Request.removeColumn(id);
        } catch (err) {
            console.log("[Service.js][serviceRemoveColumns] error request from service.js");
            error = err.message;
        } finally {
            loading = false;
        }
    }
}

export { Service, error, loading };