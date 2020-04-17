import { HttpHeaders } from '@angular/common/http';

// export const environment = {
//     API_SERVER: 'http://localhost:3000',
//     httpOptions : {
//         headers: new HttpHeaders({
//             'Content-Type': 'application/json',
//             Authorization : 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
//         })
//     }
// }

// Production
export const environment = {
  API_SERVER: 'http://34.87.103.51',
  httpOptions : {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization : 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
      })
  }
}
