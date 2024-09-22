const fs = require('fs');
const axios = require('axios');
const https = require('https');
let data = 'eyJhbGciOiJSUzI1NiJ9.\r\nZXlKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQXRNalUySW4wLkVpa0NvVHU1ZW55UHdOc1VYMm1uS3dac3p4TEFROVpQ\r\nUXMwcTh2LUJpaVc1U1NYNU9Id3pONFpsWkFFOExCRTBMWW9FTEVDR1MxVDdzTHVTeEFvajd6SVF6Wk5UcXNhY2dMYTAxMmtfRUhFYS00b1libT\r\nZtTjlEZV9FUW5oYW1fSGhvNDg2TGh1Tmd3UWJIMlR1ZEZiVEppNF9CQUVuV3FSbnc5RHZWcWFiV0o5YXRaMGZRR3p6NGZyYTQ0SzlabHRDbTBVT\r\n0hMYWZZakZpeXJBVVVpZzROa3hucndHMy1QMmpQelhvZTIySFpKb2hpSldTTTRha3NxSXhyWDA5SmRGME93dy1CdC05aWwwdmlVNTN0N29mN0F\r\n0RnFaTDQyYVdlcUMwYUpGalhmRkd3N3d1bmF0VTN3YVJDUXo1SEYtdXZXNVZJZERvSjZySDlhbmxlOGNXdy5hMjRralZUVUNiekE5SFFiLnVmczdaM\r\n2RlNTZjY3N6alVJVUdINHAzQkhKUk1kREpsX1E0Rkh4YUx4a05KZGRXTzBpa3kyZzkwNTZTZkVUR3owSk80dGt5M1RkTWRscjFZVE1ORndwUVYtcEs2\r\ncVJLTldWcUVkRk5TT0ZXcVVzYk8xeDZleWhnR0JRNEN4dXc0cGVDU0V0UWJkWk9oTGplYVZTRnJUMFgyOVFJVjlNNk1tMlJFNzRDZW02aF9yZTlGTm\r\ngxbWZOdUp5WUtOR2NGU0tpcFdqUWhyUHp5Y2J6dl9tU1VsbGR5dmgxWmd1UjBrQ1ppVTRvaS03N0pyWWxPQngxZ2oxUTQ2NDcyckEwbXdGc0d2X0\r\npONGFiMW5OanVQS1E5aTdDaGdpckR4QmFyWmFzSkYxdW5OSC1LYndIWVRtdzJVSk9CamVrTS10akYzaS1BVGN5NFQ0M3l4RFY5eXJma0dRTG8\r\nuWFdzOEo0V2hxNlFPZHozVU1LRW5ndw.\r\ni5ll3S4NLequRDCzT9zPxeDXjmICpX9MhuKOg44T774i55ujccZ7N14X1dOHCTTkPOGI8nkFnZHNTCiuoxyieiP9uiNzt968Sn9PYLziiWAPrlFrPrCbp25FczTmAQ_TMY2VILFhY5r_2U_ZJDGSaFLt02zMb3o3mw2yuJ0D7W-hrfQTSjWZjPEQIOBSSKJqMkxcwKePU8OuXEJDjYA6T7lhfUiZGjYhRxhVGW9HKsTEwAfY82ibpJKArHelqh0ZQKwgzcTouCUNxUnwgOcRzZT8zDdkGqmplQ9_n2clkjz9f56EUjHdqkxAsqquAt7HGH25A0SfE7QrTTgImB5Q\r\n';
const p12Buffer = fs.readFileSync('D:/backup-data/docs/axix-api/axis.p12');
const apiUrl = 'https://sakshamuat.axisbank.co.in/gateway/api/v1/fidb/trade-journey-inquiry';
const p12Password = 'axis@123';
const requestData = data;

const httpsAgent = new https.Agent({
    pfx: p12Buffer,
    passphrase: p12Password,
  });

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  httpsAgent:httpsAgent,
  url: 'https://sakshamuat.axisbank.co.in/gateway/api/v1/fidb/trade-journey-inquiry',
  headers: { 
    'X-IBM-Client-Id': 'a4b13c62d6d6f5b35898469cccf123c4', 
    'X-IBM-Client-Secret': '539eaeac493b5571f704f4d4a90bcd4e', 
    'x-fapi-epoch-millis': '1695707558117', 
    'x-fapi-channel-id': 'CYFUTURE', 
    'x-fapi-uuid': '00400003911', 
    'x-fapi-serviceId': 'AE.API.TRX.SDBSP.001', 
    'x-fapi-serviceVersion': '1.0', 
    'Content-Type': 'text/plain'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error.message);
});
