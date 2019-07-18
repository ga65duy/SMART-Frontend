"use strict";

import HttpService from './HttpService';
import UniversityService from "./UniversityService";

/**
 * StudyplanService
 *
 * Needed for the UseCase Load and create studyplan
 * Author: Maria and Gerhard
 */

export default class StudyplanService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/studyplan" }

    static listStudyplans(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getStudyplan(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${StudyplanService.baseURL()}/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                } else {
                    reject('Error while retrieving studyplan');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteStudyplan(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${StudyplanService.baseURL()}/${id}`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateStudyplan(studyplan) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${studyplan._id}`, studyplan, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createStudyplan(studyplan) {
        return new Promise((resolve, reject) => {
            HttpService.post(StudyplanService.baseURL(), studyplan, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}