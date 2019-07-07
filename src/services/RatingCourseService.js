"use strict";
import HttpService from "./HttpService";

/**
 * RateCoursService
 * Needed for the rate course usecase
 * Author: Maria
 */
export default class RateCourseService {
    constructor(){
    }

    static baseURL() {return "http://localhost:3000/rating" }

    static createRating(rating){
        return new Promise((resolve, reject) => {
            HttpService.post(RateCourseService.baseURL(), rating, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
};