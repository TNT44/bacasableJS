

let formData = new FormData()
let imagefile = document.querySelector('#file')
formData.append('image', imagefile.files[0])

let data = {
  title: this.title,
  tagline: this.tagline,
  slug: this.slug,
  body: this.body
}

formData.append('data', data);

axios.post('http://localhost:8000/upload-post-img', formData)
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  alert(error)
})


