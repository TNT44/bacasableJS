const form = new FormData();
    formData.append(item.name, fs.createReadStream(pathToFile));

    const response = await axios({
        method: 'post',
        url: 'http://www.yourserver.com/upload',
        data: form,
        headers: {
        'content-type': `multipart/form-data; boundary=${form._boundary}`,
        },
    });