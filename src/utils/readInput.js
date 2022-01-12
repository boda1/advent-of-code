// import node filesystem to handle files
// export result of function to be used in other files
// create function to contain reading of file
// Promise, containing fs call, to return data or reject

import fs from 'fs';

export const readInput = (inputPath) => {
  return new Promise((reject, resolve) =>
   fs.readFile(inputPath, 'UTF8', (err, data) => {
     if (err) {
       console.log(err);
       reject(err);
     }
     resolve(data);
   })
  )
}



