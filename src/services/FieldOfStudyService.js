"use strict";

import HttpService from './HttpService';

export default class FieldOfStudyService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/fos" }

    static getFoSs(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);

            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    /**
     * Get all courses from a fos
     * Author: Maria
     */
    static getCoursesForFos(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${FieldOfStudyService.baseURL()}/${id}/courses`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving Field of Study');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}