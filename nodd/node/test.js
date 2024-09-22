var express = require('express')
    , http = require('http')
    , https = require('https')
    , app = express();

http.createServer(app);
// https.createServer({ 


//  }, app);


const fs = require('fs');
const axios = require('axios');
// const https = require('https');
var data = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1OERlMjZJWDc5OGZfSFhNLUJZa21uR091eTRhX1labmFlQ0hVZkI5WGsifQ.ZXlKaGJHY2lPaUpTVTBFdFQwRkZVQzB5TlRZaUxDSmxibU1pT2lKQk1qVTJSME5OSWl3aWEybGtJam9pY21kM0xtcDNaV3AzY3k1MVlYUXVZWGhwYzJJdVkyOXRJbjAuWXNhcFFSZWdObXloQ3RfbXYxWjBtOGhCUlBjYjRZdmdhaF9jeEEwa1ZwMU53cGNGQ0JyM0ZOamZQYmJOWkFJbW1rUFY2dzdYeGZ4aEo0a0dvVDBzaHcwaU1TRTlac3E1WnZZaEhsejBha29meDM2TjNDM0VmcGg4bjhtNTZtN0p4M2NNdXk0XzR4c1U3RGtSTXFQZG9Nc1g0R2RTTERZa0l6Y3AzVDlEcS04bFJYWWI5VTVHRUhVQ28xZ3pzUmVpNXFVd1FkZ3hQMVdsS2NzdFlkeUxlX1lFSUpYb0dTdnV6ZXE5bUN4RW94OWFGRHYyd1lJZ3VqRm5zM0ZPcU1xVTFKTm8xWW1uYVpDRVg3UkdRLVpMREtWMXQwZUxRNy1wbFY4RVBRbXpCNFhqQUFNYU1MZVcybHBkbGdnZElLQWlPWndBcnNGTmtVcVlSenhVRlp1U1lBLmxlRzZmRFduNlRFWHVwZ1UuR1pjbUpaOGxXTktuMTlyU25wY3NiSUh2NTB2QzVyMUp3QThsQnBBd05LWGx6S2RDVUlSNHhCTk1ZZ1o3QnNZVEV4LUdjYlFzMHFHVTRxS3oza25wbGVxUkpybHJmT3AteFUtSFl0ZFFfekdBOVhwUUVJY0VrZV9LUktpTHIyRllZSnRLVTdId0dxTGtRNklIeFZHQzBRRy1IclFYV3cxMmo2Wnd1ZUFxMnlRTUNGLVo0LWR5WUJ2djNUZEhSdGhNZHBWREFJT2s3bmF5TThFVWlLYVAzZ0F6S0h5RExxTE5IbTRtRE1Cc3plWG1lZ244VmdRRTJHU1NTUHE0LjZRUHpOZkYtc0VDOHVGUkttV3ZQWFE.rCMoQPiDbGepasuLajgG9JwjA3RCTWO3n0pfBU34BePisP22PL_iGTQTIrNocv6nkVgJD2vQPB4Qw3pTRrXkHRsqgyU0YxDODIuClQkk1xOYBi4yHs7jyJpTAQg8mMCBE0J8iWaEvD0DsmVKbb3OEQfL4x9_82V8BpJTZmawTqOpJWToQsk9pAJ45JyXOuX_sgWt4pNpZtmtv0_bOekmErZu3dPmXfcp2PzlPdx6Kig_rcNe01GJO26eMO1ZBBiFS-8IHvOrURBWE5AL9MuIKDuS1RKc0RdpcP16V4mC-ki6EbAicBulyrJC_MAmQx-iSVCFYykRaqoKyqP0iQrmJA';
const p12Buffer = fs.readFileSync('D:/backup-data/docs/axix-api/axis.p12');
 
const apiUrl = 'https://sakshamuat.axisbank.co.in/gateway/api/v1/fidb/trade-journey-inquiry';
const p12Password = 'axis@123';
const requestData = data;

const httpsAgent = new https.Agent({
    pfx: p12Buffer,
    passphrase: p12Password,
  });

  
  // Axios configuration
const axiosConfig = {
    httpsAgent: httpsAgent,
    headers: {
      'Content-Type': 'text/plain',
      'x-ibm-client-id': 'a4b13c62d6d6f5b35898469cccf123c4',
      'x-ibm-client-secret': '539eaeac493b5571f704f4d4a90bcd4e',
      'x-fapi-epoch-millis': '1695890244076',
      'x-fapi-channel-id': 'CYFUTURE',
      'x-fapi-uuid': 'ea243976-e53a-4092-bf0b-35e77d9a2dd3',
      'x-fapi-serviceId': '2861402547027968',
      'x-fapi-serviceVersion': '1.0'
    }
  };

  

  // Make a POST request with the P12 certificate and data
  axios
    .post(apiUrl, requestData, axiosConfig)
    .then((response) => {
      console.log('API Response:', response.data);
    })
    .catch((error) => {
      console.log(apiUrl);
      console.error('API Request Error:', error.message);
    });
