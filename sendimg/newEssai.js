const formData = new FormData()

// add a non-binary file
formData.append('files[]', new Blob(['{"hello": "world"}'], { type: 'application/json' }), 'request.json')

// add a binary file
const element = document.getElementById('image')
const file = element.files[0]
formData.append('files[]', file, file.name)
await rc.post('/restapi/v1.0/account/~/extension/~/fax', formData)