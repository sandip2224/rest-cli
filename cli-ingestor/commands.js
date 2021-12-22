#!/usr/bin/env node

const mongoose = require('mongoose')
const program = require('commander')
const chalk = require('chalk')

require('dotenv').config({ path: './.env' })
const connectDB = require('../api/config/db')
const todoModel = require('../api/models/Todo')

connectDB()
