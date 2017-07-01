// fetches https://fcctop100.herokuapp.com/api/fccusers/top/recent
let arrayRes = [];

const apiAddress = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
let httpRequest;

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const arrayRes = JSON.parse(httpRequest.responseText);
      console.log(arrayRes);
    }
  }
}

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', apiAddress);
  httpRequest.send();
};

makeRequest();

console.log(arrayRes);
