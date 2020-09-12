import axios from 'axios';
import fs from 'fs';

// ...

return axios.request({
  responseType: 'arraybuffer',
  url: 'http://www.example.com/file.mp3',
  method: 'get',
  headers: {
    'Content-Type': 'audio/mpeg',
  },
}).then((result) => {
  const outputFilename = '/tmp/file.mp3';
  fs.writeFileSync(outputFilename, result.data);
  return outputFilename;
});

