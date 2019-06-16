"use strict";

import HttpService from './HttpService';

export default class StudyplanService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/studyplan" }

    static getStudyplan(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static deleteStudyplan(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${StudyplanService.baseURL()}/${id}`, function(data) {
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

    static updateStudyplan(studyplan) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${studyplan._id}`, movstudyplan, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createStudyplan(studyplan) {
        studyplan.id = Math.floor((Math.random() * 100000000) + 1).toString();
        // studyplan.posters = {
        //     thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        // };
        return new Promise((resolve, reject) => {
            HttpService.post(StudyplanService.baseURL(), studyplan, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}