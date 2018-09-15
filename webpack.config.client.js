const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = { 
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
        path.join(CURRENT_WORKING_DIR, "source/code.club.js")
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, "public/js"),
        filename: "code.club.js",
        publicPath: "/public/js"
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
         }
    }
 }

module.exports = config