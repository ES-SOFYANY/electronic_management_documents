'use strict';

import path from 'path';


let defaultConfig = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(`${__dirname}/../..`),

    // Browser-sync port
    browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

    // Server port
    port: process.env.PORT || 9000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'angular-app-secret'
    },

    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/documents-dev',
        options: {
            useNewUrlParser: true
        }
    },

};

const config = Object.assign(defaultConfig, require(`./${process.env.NODE_ENV}.js`).default || {});

export default config;
