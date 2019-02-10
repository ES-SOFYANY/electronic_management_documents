import mongoose from 'mongoose';
import config from '../conf'
import LOGGER from "./logger";

export default function connctDB() {
    mongoose.connect(config.mongo.uri, config.mongo.options);
    mongoose.connection.on('error', function(err) {
        LOGGER.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });
    mongoose.connection.on('connected', () => {
        LOGGER.error('db connection is now open');

    });
    mongoose.set('useFindAndModify', false);
}
