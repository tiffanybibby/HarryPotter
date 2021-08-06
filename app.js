const url = 'https://hp-api.herokuapp.com/api/characters';
const studentUrl = 'https://hp-api.herokuapp.com/api/characters/students';
const staffUrl = 'https://hp-api.herokuapp.com/api/characters/staff';


const characterList = document.querySelector('.character-container')
const selectTag = document.querySelector('#select-tag')
const allCharactersBtn = document.querySelector('#btn1')
const studentBtn = document.querySelector('#btn2')
const staffBtn = document.querySelector('#btn3')
const form = document.querySelector('form')

// Function for All Characters List
  const getAllCharacters = async () => {
    remove(characterList)
    try {
      const response = await axios.get(url)
      const data = response.data
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }
  getAllCharacters()

// Function for All Students List

  const getStudents = async () => {
    remove(characterList)
    try {
      const response = await axios.get(studentUrl)
      const data = response.data
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }

//Function for All Staff List
  const getStaff = async () => {
    remove(characterList)
    try {
      const response = await axios.get(staffUrl)
      const data = response.data
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }


//Function for All Houses Filter List

const getHouse = async (houses) => {
  remove(characterList)
    try {
      const houseUrl = `https://hp-api.herokuapp.com/api/characters/house/${houses}`;
      const response = await axios.get(houseUrl)
      const data = response.data
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }
  

//Event Handler

  allCharactersBtn.addEventListener("click", getAllCharacters)
  studentBtn.addEventListener("click", getStudents)
  staffBtn.addEventListener("click", getStaff)
  form.addEventListener("submit", (e) => {
  e.preventDefault()
  getHouse(selectTag.value)
  })


  // Build Elements

  function buildElements(data) {
    for (let i = 0; i < data.length; i++) {
      const characters = data[i].name


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

function remove(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}