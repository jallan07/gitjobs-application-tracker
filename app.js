const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('./config/passport');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const db = require('./models');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//* =============================================================
//* Routes
//* =============================================================
require('./routes/contacts-api-routes')(app);
require('./routes/applications-api-routes')(app);
require('./routes/html-routes')(app);

const port = 3000;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('App listening on port http://localhost:' + port);
  });
});
