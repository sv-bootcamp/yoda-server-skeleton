'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

let userSchema = new Schema({
    // _id: String,
    userId: String,
    email: String,
    name: String,
    age: Number,
    field: String,
    region: String,
    skills: String,
    regDate: { type: Date, default: Date.now() }
})

userSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

export default mongoose.model('User', userSchema);
