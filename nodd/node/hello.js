const fs = require('fs');
const axios = require('axios');
const https = require('https');
var data = '';
// const p12Buffer = fs.readFileSync('D:\\backup-data\\docs\\axix-api\\axis.p12');
const p12Buffer = fs.readFileSync('D:/backup-data/docs/axix-api/axis.p12');
 
const apiUrl = 'https://sakshamuat.axisbank.co.in/gateway/api/v1/fidb/trade-journey-inquiry';
const p12Password = 'axis@123';
const requestData = data;
// console.log(p12Buffer);

const httpsAgent = new https.Agent({
    pfx: p12Buffer,
    passphrase: p12Password,
  });

  
  // Axios configuration
const axiosConfig = {
    httpsAgent: httpsAgent,
    headers: {
      'Accept':'text/plain',
      'Content-Type': 'text/plain',
      'x-ibm-client-id': 'a4b13c62d6d6f5b35898469cccf123c4',
      'x-ibm-client-secret': '539eaeac493b5571f704f4d4a90bcd4e',
      'x-fapi-epoch-millis': '1695890244076',
      'x-fapi-channel-id': 'CYFUTURE',
      'x-fapi-uuid': 'ea243976-e53a-4092-bf0b-35e77d9a2dd3',
      'x-fapi-serviceId': '2861402547027968',
      'x-fapi-serviceVersion': '1.0',
    },
  };
  
  console.log(axiosConfig);
  // Make a POST request with the P12 certificate and data
  axios
    .post(apiUrl, requestData, axiosConfig)
    .then((response) => {
      console.log('API Response:', response.data);
    })
    .catch((error) => {
        // console.log(error);
      // console.error('API Request Error:', error.message);
    });
