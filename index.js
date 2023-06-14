//promise

function fetchAndDisplayUser() {
    fetch('https://api.github.com/users/jonassobotta')
      .then(response => response.json())
      .then(user => console.log(user))
      .catch(error => console.error('Error:', error));
  }
  
fetchAndDisplayUser();

// async/await


// async function fetchAndDisplayUser() {
//   try {
//     const response = await fetch('https://api.github.com/users/jonassobotta');
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchAndDisplayUser()
// .then(() => console.log('This is shown after the user!'));
// console.log('This is shown before the user!');

// async function fetchAndDisplayUser() {
//     fetch('https://api.github.com/users/jonassobotta')
//       .then(response => response.json())
//       .then(user => console.log(user))
//       .catch(error => console.log(error));
//   }
  
// // fetchAndDisplayUser()

// async function fetchAndDisplayUser() {
//     const response = await fetch('https://api.github.com/users/jonassobotta');
    
//     response.json()
//       .then(user => console.log(user))
//       .catch(error => console.log(error));
//   }
  
//  fetchAndDisplayUser()
  




// // Other use cases
// //

// //Serverless function in Kyma

// module.exports = {
//     main: async function (event, context) {
//       const axios = require('axios');
//       const message = {
//         greeting: `Hi there, welcome from Kyma Function ${context['function-name']}`,
//         context: context,
//         eventdata: event.data,
//         eventtype: event.type,
//         eventcontent: event.datacontenttype,
//       };
//       console.log(message);
//       const url = 'https://apj-o2c.free.beeceptor.com/test';
//       axios.post(url, message, { headers: { 'Content-Type': 'application/json' }})
//       .then(response => {
//         console.log('Response:', response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error.message);
//       });
//       return message;
//     }
// }




// // Serverless function in Kyma completly with async/await
// module.exports = {
//     main: async function (event, context) {
//       try {
//         const axios = require('axios');
//         const message = {
//           greeting: `Hi there, welcome from Kyma Function ${context['function-name']}`,
//           context: context,
//           eventdata: event.data,
//           eventtype: event.type,
//           eventcontent: event.datacontenttype,
//         };
//         console.log(message);
//         const url = 'https://apj-o2c.free.beeceptor.com/test';
//         const response = await axios.post(url, message, { headers: { 'Content-Type': 'application/json' }});
//         console.log('Response:', response.data);
//         return message;
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     }
//   }

// // Database Operations
// async function getUser(userId) {
//   const result = await database.fetchUser(userId);  // Assuming fetchUser returns a Promise
//   return result;
// }

// // // API Requests
// const axios = require('axios');

// async function getGithubUser(username) {
//   const response = await axios.get(`https://api.github.com/users/${username}`);
//   return response.data;
// }

// // // File Operations
// const fs = require('fs').promises;

// async function readMyFile(filePath) {
//   const data = await fs.readFile(filePath, 'utf-8');
//   console.log(data);
// }
  



  