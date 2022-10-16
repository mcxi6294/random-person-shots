//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getRandomPerson)

function getRandomPerson(){
    // let dogBreed = document.querySelector('input').value.toLowerCase()

    fetch(`https://randomuser.me/api/`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.results)
      document.querySelector('#fname').innerText = data.results[0].name.first
      document.querySelector('#lname').innerText = data.results[0].name.last
      document.querySelector('#gender').innerText = data.results[0].gender
      document.querySelector('#country').innerText = data.results[0].location.country

 
      document.querySelector('img').src = data.results[0].picture.large
      // document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}