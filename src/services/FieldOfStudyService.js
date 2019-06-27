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

    static getFoS(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${FieldOfStudyService.baseURL()}/${id}`, function(data) {
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

    /*static deleteCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${MovieService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

     */

    static updateFoS(fos) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${fos._id}`, fos, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }



    static createFoS(fos) {
        fos.id = Math.floor((Math.random() * 100000000) + 1).toString();

        return new Promise((resolve, reject) => {
            HttpService.post(FieldOfStudyService.baseURL(), fos, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


}