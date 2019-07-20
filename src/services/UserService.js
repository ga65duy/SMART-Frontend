"use strict";

import HttpService from "./HttpService";

/**
 * UserService
 *
 * Author: Maria
 */
export default class UserService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/auth";
    }

    static register(userData, userType) {
        let path = "";
        if (userType) {
            path = "/registerUniversityUser"
        } else {
            path = "/registerStudent"
        }
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}${path}`, userData, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                username: user,
                password: pass
            }, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout() {
        window.localStorage.removeItem('jwtToken');
    }

    static getLoggedInUserInfo() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/me`, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');

        return {
            id: JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username,
            email: JSON.parse(window.atob(base64)).email,
            isUniversityUser: JSON.parse(window.atob(base64)).isUniversityUser,
            studyplans: JSON.parse(window.atob(base64)).studyplans,
        };
    }

    static updateUser(userData, userType) {
        let path = "";
        if (userType) {
            path = "/updateUniUserProfile"
        } else {
            path = "/updateStudentProfile"
        }

        return new Promise((resolve, reject) => {
            HttpService.put(`${UserService.baseURL()}${path}`, userData, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }

    static isUniversityUser() {
        return (this.getCurrentUser().isUniversityUser)
    }
}