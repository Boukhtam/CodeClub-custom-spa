import exphbs from 'express-handlebars'
import path from 'path'

const hbs = exphbs.create({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, './../views/layouts'),
    partialsDir: [
        path.join(__dirname, './../views/partials'),
        path.join(__dirname, './views/shared')
    ],
    helpers: {}
})

export default hbs