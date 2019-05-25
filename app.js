const express = require('express')
const log4js = require('log4js')

const app = express()
const port = 3000
const logger = log4js.getLogger()
logger.level = 'debug'

app.get('/down',
  (req, res) => {
    logger.info('down start')
    res.download('files/2GB.dummy', (err) => {
      if (err) {
        logger.error(err)
        return
      }
      logger.info('down end')
    })
  })

app.listen(port, () => console.log('server started'))