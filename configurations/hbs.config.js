import exphbs from 'express-handlebars'
import path from 'path'
const CURRENT_WORKING_DIR = process.cwd()


const hbs = exphbs.create({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(CURRENT_WORKING_DIR, './views/layouts'),
    partialsDir: [
        path.join(CURRENT_WORKING_DIR, './views/partials'),
        path.resolve(CURRENT_WORKING_DIR, './views/shared')
    ],
    helpers: {}
})

export default hbs