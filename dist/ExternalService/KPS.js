// const soapRequest = require('easy-soap-request');
// const url = 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?op=TCKimlikNoDogrula';
// const headers = {
//     'Content-Type': 'text/xml; charset=utf-8',
//     'soapAction': 'http://tckimlik.nvi.gov.tr/WS/TCKimlikNoDogrula',
// };
// // example data
// const xml = `
// <?xml version="1.0" encoding="utf-8"?>
// <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   <soap:Body>
//     <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
//       <TCKimlikNo>34312423158</TCKimlikNo>
//       <Ad>FURKAN</Ad>
//       <Soyad>ÖZTÜRK</Soyad>
//       <DogumYili>1994</DogumYili>
//     </TCKimlikNoDogrula>
//   </soap:Body>
// </soap:Envelope>
// `;
// // usage of module
// export const kpsCheck = soapRequest(url, headers, xml).then(({response: {body, statusCode}}) => {
//     console.log(body);
//     console.log(statusCode);
// }).catch((errorBody) => {
//     console.error(errorBody);
// });
"use strict";
//# sourceMappingURL=KPS.js.map