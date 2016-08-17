'use strict'
import mongoose from 'mongoose'
import Schema from 'mongoose.Schema'
import co from 'co'

export var userSchema = new Schema({
    _id: String,
    userId: String,
    email: String,
    name: String,
    age: Number,
    field: String,
    region: String,
    skills: String,
    regDate: { type: Date, default: Date.now() }
})