/*function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));      
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));      
}

whatsYourFavorite() //new Promise((resolve, reject) => resolve("Javascript"))
.then(displaySubject)  // .then(response => displaySubject(response)) => new Promise((resolve,reject) => resolve(`Hello, Javascript`))
.then (console.log);   // .then (result => console.log(result));
*/

async function whatsYourFavorite(){
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject){
  return `Hello, ${subject}`;
}

//whatsYourFavorite()
//.then(displaySubject)
//.then(console.log);

async function init(){
  const response = await whatsYourFavorite(); 
  const result = await displaySubject(response);
  console.log(result);
}

init();
