//initialize express framework
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')
const app = express()

//env-config
dotenv.config()

//disable security policy CORS
app.use(cors())

//apply body-parser
app.use(require('body-parser').json())

//web push module initialized w/ VAPID keys & contact address
webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

//test GET endpoint to see server works
app.get('/', (req, res) => {
  res.send('Hello world!')
    // res.sendfile('index.html');
})

//endpoint accepting a request w/ credentials
//server gets called by SB which triggers this function
    //'/notifications/subscribe'
app.post('/profanity', (req, res) => {
  const subscription = req.body
  console.log(subscription)

  const payload = JSON.stringify({
    title: 'Profanity filter works'
  })

  webpush.sendNotification(subscription, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});


app.listen(9000, () => console.log('The server has been started on the port 9000'))