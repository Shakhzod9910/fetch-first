// const API_KEY = "5ebec614";

// console.log(
// fetch('https://omdbapi.com/?apikey=' + API_KEY + '&s=ironmen')
// .then((Response)=> Response.json())
// .then(data => console.log(data))

// )


function render(element){
    element.forEach((row) => {
        let newLi = document.createElement('li')
        let newspan = document.createElement('img')
        newLi.textContent = row.Title
        newspan.setAttribute('src', row.Poster)
        newspan.onerror =((evt)=>{evt.target.src= 'Spinner-1s-200px.svg';})
        list.appendChild(newLi)
        list.appendChild(newspan)

    });

}




async function fetchto(){
const API_KEY = "5ebec614";
const response = await fetch('https://omdbapi.com/?apikey=' + API_KEY + '&s=hulk&page=3');
const data = await response.json();
render(data.Search)
console.log(data)
}

fetchto()