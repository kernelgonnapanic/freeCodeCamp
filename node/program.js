const bl = require('bl');
const http = require('http');

const links = process.argv.slice(2);
const promises = [];

links.forEach(link => {
  const promise = new Promise((resolve, reject) => {
    http.get(link, (response) => {
      response.setEncoding('utf8');
      response.pipe(bl((err, data) => {
        if(err) {
          console.log(err);
          reject(err);
        }
        const content = data.toString();
        resolve(content);
      }))
    })
  });
  promises.push(promise);
});

Promise.all(promises).then(array => {
  array.forEach(elem => {
    console.log(elem);
  })
})
