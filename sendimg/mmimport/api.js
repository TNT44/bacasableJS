import request from 'utils/request';

export const uploadFileRequest = ({ file }) => {
  const data = new FormData();
  data.append('file', file, file.name);

  return request.post(`/files`, data, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
    timeout: 30000,
  });
};

export const downloadFileRequest = id =>
  request.get(`/files/${id}`, {
    responseType: 'blob',
    timeout: 30000,
  });