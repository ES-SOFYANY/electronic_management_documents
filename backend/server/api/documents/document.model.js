'use strict';

import mongoose from 'mongoose';

let DocumentSchema = new mongoose.Schema({
    name: String,
    date: Date,
    category: String,
    description: String,
    urlFile: String,
    expiredDocument: Boolean,
    expiredDate: Date
});

export default mongoose.model('Document', DocumentSchema);
