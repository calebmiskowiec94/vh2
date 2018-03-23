const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const passport = require('./strategies/sql.localstrategy');
const sessionConfig = require('./modules/session-middleware');

// Route includes
const userRouter = require('./routes/user.router');
const mondayRouter = require('./routes/monday.router');
const tuesdayRouter = require('./routes/tuesday.router');
const wednesdayRouter = require('./routes/wednesday.router');
const thursdayRouter = require('./routes/thursday.router');
const fridayRouter = require('./routes/friday.router');
const saturdayRouter = require('./routes/saturday.router');
const sundayRouter = require('./routes/sunday.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/monday', mondayRouter);
app.use('/tuesday', tuesdayRouter);
app.use('/wednesday', wednesdayRouter);
app.use('/thursday', thursdayRouter);
app.use('/friday', fridayRouter);
app.use('/saturday', saturdayRouter);
app.use('/sunday', sundayRouter);


// Serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
