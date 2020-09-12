import { uploadFileRequest } from './api';
import * as types from './actionTypes';
import fileSaver from 'utils/fileSaver';
import fileReader from 'utils/fileReader';
import { downloadFileRequest } from './api';


export const uploadFile = data => async dispatch => {
  try {
    dispatch({
      type: types.UPLOAD_FILE_REQUEST,
    });

    await uploadFileRequest(data);

    dispatch({
      type: types.UPLOAD_FILE_SUCCESS,
    });

    alert('File uploaded successfully!');
  } catch (error) {
    dispatch({
      type: types.UPLOAD_FILE_ERROR,
    });
    
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert('Something went wrong while uploading this file');
    }
  }
};

  
  export const downloadFile = id => async dispatch => {
    try {
      dispatch({
        type: types.DOWNLOAD_FILE_REQUEST,
      });
  
      const { data } = await downloadFileRequest(id);
      
      await fileSaver(data, 'fileName.txt');
  
      dispatch({
        type: types.DOWNLOAD_FILE_SUCCESS,
      });
  
      alert('File downloaded successfully!');
    } catch (error) {
      dispatch({
        type: types.DOWNLOAD_FILE_ERROR,
      });
      
      if (error.response) {
        try {
          const { data } = error.response;
          // Read file
          const file = await fileReader(data);
          // Parse content and retrieve 'message'
          const { message } = JSON.parse(file);
  
          alert(message);
        } catch (readError) {
          // Show a dummy error if sth goes wrong while retrieving 'message'
          alert('Something went wrong while downloading this file');
        }
      } else {
        alert('Something went wrong while downloading this file');
      }
    }
  };  