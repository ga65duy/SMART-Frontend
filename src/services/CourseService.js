"use strict";

import HttpService from './HttpService';

export default class CourseService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/courses"
    }

    static getCourses() {
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function (data) {
                resolve(data);

            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CourseService.baseURL()}/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving the course');
                }
            }, function (textStatus) {
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

    static updateCourse(course) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${course._id}`, course, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static createCourse(course) {
        return new Promise((resolve, reject) => {
            HttpService.post(CourseService.baseURL(), course, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    /**
     * Get all rated courses of a user
     * Author: Maria
     */
    static listCoursesOfAUser(user) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CourseService.baseURL()}/ratings/user/${user._id}`, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}