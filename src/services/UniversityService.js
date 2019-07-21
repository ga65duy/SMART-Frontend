"use strict";

import HttpService from './HttpService';

export default class UniversityService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/university"
    }

    static getUniversities() {
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    /**
     * Get all courses from a university
     *Author: Maria
     */
    static getCoursesFromUniversity(universityId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UniversityService.baseURL()}/${universityId}/courses`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving courses from uni');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    /**
     * Get all Fos from university by uniID
     *Author: Maria
     */
    static getFosFromUniversity(universityId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UniversityService.baseURL()}/${universityId}/fos`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving fos from uni');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}