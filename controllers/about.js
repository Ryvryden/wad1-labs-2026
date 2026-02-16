'use strict';
import logger from "../utils/logger.js";
import employe_1 from "../models/employe_1.js";

const about ={
    createView(request, response){
        logger.info("About page loading!");

        const viewData ={
            title: "About the app"
        };
        response.render('about', viewData);
        
    },
};

export default about;