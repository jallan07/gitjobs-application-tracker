const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('./config/passport');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const db = require('./models');

//* ================================
//* Twilio - needs further build
//* ================================
// const Twilio = require('twilio');
// const accountSid = process.env.twilioSID;
// const authToken = process.env.twilioAuth;
// const client = new Twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from GitJobs! Twilio integration FTW!',
//     to: '+18042002897',
//     from: '+19382018822'
//   })
//   .then((message) => console.log(message.sid));

// Body Parser
app.use(bodyParser.json());
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

// static css
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//* =============================================================
//* Routes
//* =============================================================
require('./routes/contacts-api-routes')(app);
require('./routes/applications-api-routes')(app);
require('./routes/companies-api-routes')(app);
require('./routes/html-routes')(app);

const PORT = process.env.PORT;

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log('App listening on port http://localhost:' + PORT);
  });
});
