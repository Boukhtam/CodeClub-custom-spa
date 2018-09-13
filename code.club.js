import mongoose from 'mongoose'
import app from './server/setup'

import {port, db_host, db_port, db_dialect, db_name} from './configurations/env.vars'

//Setup mongoose connection
mongoose.connect(`${db_dialect}://${db_host}:${db_port}/${db_name}`, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('open', console.info.bind(console , 'mongoose connected ...'))
.on('error', console.error.bind(console, 'mongoose connection error:'))

app.listen(port, (err) => {
    if (err) console.log(err);
    console.info('Server started on port: %s.', port);
});

