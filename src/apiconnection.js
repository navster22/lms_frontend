import axios from 'axios';


const apiconnection = async (endpoint,method,payload = null,headersObject = {}) => {
  console.log(`http://127.0.0.1:8080${endpoint}`)
    return await axios({
        method: method,
        url: `http://127.0.0.1:8080${endpoint}`,
        withCredentials: true,
        headers: {
          ...headersObject
        },
        data: {
          ...payload
        }
    })
    .then(res => res)
    .catch(err => console.log(err))
}

export default apiconnection;