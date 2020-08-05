import axios from 'axios';
import { imgurApi, imgurClientKey } from 'src/utils/constants';

const apiImgur = axios.create({
  timeout: 5000,
  baseURL: imgurApi,
  headers: {
    Authorization: `Client-ID ${imgurClientKey}`,
  },
});

export default apiImgur;
