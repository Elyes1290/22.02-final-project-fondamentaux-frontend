import { Request } from "../axios/Request.js";
import { BASE_URLCOLUMNS, BASE_URLTASKS, BASE_URLUSERS } from "../axios/CONST_URL.js";

class Service {

    /**
     * 
     * @returns la response de axios (listes des users), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async getUsers() {
        try {
            console.log("[Service.js][getUsers] request get sended to axios");
            return await Request.get(BASE_URLUSERS.getListUsers);
        } catch (err) {
            console.error('[Service.js][getUsers] error request from service.js');
            throw new Error('[Service.js][getUsers] error request from service.js');
        }
    }

    /**
     * 
     * @returns la response de axios (listes des taches), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async getTasks() {
        try {
            console.log("[Service.js][getTasks] request get sended to axios");
            return await Request.get(BASE_URLTASKS.getListTasks);
        } catch (err) {
            console.error("[Service.js][getTasks] error request from service.js")
            throw new Error('[Service.js][getTasks] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} id id de la tache a eliminer
     * @returns la response de axios (une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async getTask(id) {
        try {
            console.log("[Service.js][getTask] request get sended to axios");
            return await Request.get(BASE_URLTASKS.getTask, id);
        } catch (err) {
            console.error("[Service.js][getTask] error request from service.js")
            throw new Error('[Service.js][getTask] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une tache.
     * @returns la response de axios (ajout de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async postTask(post) {
        try {
            console.log("[Service.js][postTask] request post sended to axios");
            return await Request.post(BASE_URLTASKS.postTask, post);
        } catch (err) {
            console.error("[Service.js][postTask] error request from service.js");
            throw new Error('[Service.js][postTask] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} id id de la tache a modifier.
     * @param {*} update format json avec les nouvelle donnee.
     * @returns la response de axios (modification de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async updateTask(id, update) {
        try {
            console.log("[Service.js][updateTask] request update sended to axios");
            return await Request.update(BASE_URLTASKS.updateTask, id, update);
        } catch (err) {
            console.error("[Service.js][updateTask] error request from service.js");
            throw new Error('[Service.js][updateTask] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} id id pour eliminer une tache
     * @returns la response de axios (elimination de une tache), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async removeTask(id) {
        try {
            console.log("[Service.js][removeTask] request remove sended to axios");
            return await Request.remove(BASE_URLTASKS.removeTask, id);
        } catch (err) {
            console.error("[Service.js][removeTask] error request from service.js");
            throw new Error('[Service.js][removeTask] error request from service.js');
        }
    }

    /**
     * 
     * @returns la response de axios (listes de colonnes), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async getColumns() {
        try {
            console.log("[Service.js][getColumns] request get sended to axios");
            return await Request.get(BASE_URLCOLUMNS.getListColumns);
        } catch (err) {
            console.log("[Service.js][getColumns] error request from service.js");
            throw new Error('[Service.js][getColumns] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} post format json pour ajouter une colonne.
     * @returns la response de axios (ajout de colonne), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async postColumn(post) {
        try {
            console.log("[Service.js][postColumns] request post sended to axios");
            return await Request.post(BASE_URLCOLUMNS.postColumn, post);
        } catch (err) {
            console.error("[Service.js][postColumns] error request from service.js");
            throw new Error('[Service.js][postColumns] error request from service.js');
        }
    }

    /**
     * 
     * @param {*} id id pour eliminer une colonne.
     * @returns la response de axios (elimination de une colonne), puis renvoie une erreur ou/et le loading si il y a.
     */
    static async removeColumn(id) {
        try {
            console.log("[Service.js][removeColumns] request remove sended to axios");
            return await Request.remove(BASE_URLCOLUMNS.removeColumn, id);
        } catch (err) {
            console.error("[Service.js][removeColumns] error request from service.js");
            throw new Error('[Service.js][removeColumns] error request from service.js');
        } 
    }
}

export { Service };