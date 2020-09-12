const FormData = require('form-data')
const fs = require('fs')
const path = require('path')

const formData = new FormData()
formData.append('files[]', JSON.stringify({ to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }] }), 'test.json')
formData.append('files[]', fs.createReadStream(path.join(__dirname, 'test.png')), 'test.png')
await rc.post('/restapi/v1.0/account/~/extension/~/fax', formData, {
  headers: formData.getHeaders()
})