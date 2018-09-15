import usersRoute from './users.route'
import articlesRoute from './articles.route'
import mainRoute from './main.route'

export default (app) => {

    app.use('/', mainRoute)
    app.use('/users', usersRoute)
    app.use('/articles', articlesRoute)
}