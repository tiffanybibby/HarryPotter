const url = 'http://hp-api.herokuapp.com/api/characters';


const selectTag = document.querySelector('#all-characters')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')
const characterList = document.querySelector('ul.character-list')
// const loadingCards = document.querySelectorAll('.character-container')

// console.log(form)
function displayAllCharacters() {
  const getAllCharacters = async () => {
    try {
      const response = await axios.get(url)
      console.log(response)
      const data = response.data
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        // const characterList = data[i].name
        // console.log(characterList)

        
        const cardContainer = document.createElement("div");
        const card = document.createElement("div");
        const filterDiv = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardBody = document.createElement("div");

        filterDiv.appendChild(cardHeader)
        filterDiv.appendChild(cardBody)

        characterList.appendChild(cardContainer)
        cardContainer.appendChild(card)
        card.appendChild(filterDiv)
        cardHeader.innerText = data[i].name

        cardContainer.classList.add('card-container')
        card.classList.add('card')
        filterDiv.classList.add('filter')
        cardHeader.classList.add('header')
        cardBody.classList.add('card-body')


        // const cardHeader = document.querySelector('.header')
        
        // const card = document.querySelector('.card')
        card.style.backgroundImage = `url(${data[i].image})`
        // const cardBody = document.querySelector('.card-body')
        cardBody.innerText = `House: ${data[i].house}
        Species: ${data[i].species}
        Ancestry: ${data[i].ancestry}
        DOB: ${data[i].dateOfBirth}
        Patronus: ${data[i].patronus}
        Wand Core: ${data[i].wand.core} 
        Wand Length: ${data[i].wand.length} 
        Wand Wood: ${data[i].wand.wood}
        Actor Name: ${data[i].actor}
        `


      }
    
    } catch (error) {
      console.error(error)
    }
  }
  getAllCharacters()
}

// function setOptionTags(list) {
//   list.forEach((character) => {
//     // console.log()
//     const optionTag = document.createElement('option')
//     optionTag.value = name
//     optionTag.textContent = name
//     selectTag.append(optionTag)
//   })
//   return list
displayAllCharacters() 