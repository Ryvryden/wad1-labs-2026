'use strict';
import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employe_1={
    createView(request,response){
        const info = employe_1.getAppInfo();
        logger.debug(info);

        logger.info("Current page loading")
        response.json(info);
    },

   
};
export default employe_1;
