"use strict";

import HttpService from './HttpService';

export default class UniversityService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/university" }

    static getUniversities(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }



    static updateUniversity(university) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${university._id}`, university, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createUniversity(university) {
        university.id = Math.floor((Math.random() * 100000000) + 1).toString();
        // studyplan.posters = {
        //     thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
        //     original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        // };
        return new Promise((resolve, reject) => {
            HttpService.post(UniversityService.baseURL(), university, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}