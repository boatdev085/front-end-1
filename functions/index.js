const functions = require('firebase-functions')
const axios = require('axios')
const cors = require('cors')({
  origin: true
})
const URL = 'https://api.webnovelsapp.com/v5/base'

exports.getCollection = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    try {
      axios
        .get(`${URL}/man.html`)
        .then(item => {
          if (item.data) {
            res.status(200).json({ status: 200, data: item.data })
            return
          } else {
            res.status(200).json({ status: 200, data: {} })
            return
          }
        })
        .catch(e => {
          res.status(200).json({ status: 200, data: {} })
          return
        })
    } catch (e) {
      res.status(200).json({ status: 200, data: {} })
      return
    }
  })
})

exports.getBanner = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    try {
      axios
        .get(`${URL}/banner_man.html`)
        .then(item => {
          if (item.data) {
            res.status(200).json({ status: 200, data: item.data })
            return
          } else {
            res.status(200).json({ status: 200, data: {} })
            return
          }
        })
        .catch(e => {
          res.status(200).json({ status: 200, data: {} })
          return
        })
    } catch (e) {
      res.status(200).json({ status: 200, data: {} })
      return
    }
  })
})
