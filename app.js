const url = 'http://hp-api.herokuapp.com/api/characters';
const studentUrl = 'http://hp-api.herokuapp.com/api/characters/students';
const staffUrl = 'http://hp-api.herokuapp.com/api/characters/staff';
const houseUrl = 'http://hp-api.herokuapp.com/api/characters/house/:house';

const dataContainer = document.querySelector('#data-container')
const characterList = document.querySelector('ul.character-list')

// console.log(form)
function displayAllCharacters() {
  const getAllCharacters = async () => {
    try {
      const response = await axios.get(url)
      console.log(response)
      const data = response.data
      console.log(data)
      buildElements(data)
      setOptionTags(data)

    } catch (error) {
      console.error(error)
    }
  }
  getAllCharacters()
}
displayAllCharacters()


// Form option tags from request

function setOptionTags(list) {
  console.log(list)
  list.forEach((data) => {
    // console.log(data)
    const optionTag = document.createElement('option')
    optionTag.value = data
    optionTag.textContent = data
    selectTag.append(optionTag)
  })
  return list
}


//Event Handler

form.addEventListener('submit', getSelectValue)

//Build Elements

function buildElements(data) {
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
    cardHeader.classList.add('card-header')
    cardBody.classList.add('card-body')

    card.style.backgroundImage = `url(${data[i].image})`
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
}