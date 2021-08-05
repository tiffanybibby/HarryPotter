const url = 'http://hp-api.herokuapp.com/api/characters';
const studentUrl = 'http://hp-api.herokuapp.com/api/characters/students';
const staffUrl = 'http://hp-api.herokuapp.com/api/characters/staff';



const characterList = document.querySelector('.character-container')
const selectTag = document.querySelector('#btn4')

console.log(selectTag)

// Function for All Characters List
function displayAllCharacters() {
  const getAllCharacters = async () => {
    remove(characterList)
    try {
      const response = await axios.get(url)
      // console.log(response)
      const data = response.data
      // console.log(data)
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }
  getAllCharacters()
}
displayAllCharacters()

// // Function for All Students List
function displayStudents() {
  const getStudents = async () => {
    remove(characterList)
    try {
      const response = await axios.get(studentUrl)
      // console.log(response)
      const data = response.data
      // console.log(data)
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }
  getStudents()
}


// //Function for All Staff List
function displayStaff() {
  const getStaff = async () => {
    remove(characterList)
    try {
      const response = await axios.get(staffUrl)
      // console.log(response)
      const data = response.data
      // console.log(data)
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }
  getStaff()
}

//Function for All Houses Filter List
function displayHouse() {
  const getHouse = async () => {
    const houseUrl = `http://hp-api.herokuapp.com/api/characters/house/${houses}`
    remove(characterList)
    try {
      const response = await axios.get(houseUrl)
      console.log(response)
      const data = response.data
      console.log(data)
      buildElements(data)
      const houses = [...new Set(data.map(({ house }) => house))]
      console.log(houses)
      setOptionTags(houses)

    } catch (error) {
      console.error(error)
    }
  }
  getHouse(ravenclaw)
}


// Create form option tags from request

function setOptionTags(house) {
  // console.log(houses)
  house.forEach((houses) => {
    // console.log(house)
    const optionTag = document.createElement('option')
    optionTag.value = houses
    optionTag.textContent = houses
    selectTag.appendChild(optionTag)
  })
  return list
}


// Get value of option tag from the form select tag

function getSelectValue(e) {
  e.preventDefault()
  const houseValue = selectTag.value
  console.log(houseValue)
  getBreedImage(houseValue)
  return houseValue
}


//Event Handler

document.getElementById("btn1").onclick = displayAllCharacters;
document.getElementById("btn2").onclick = displayStudents;
document.getElementById("btn3").onclick = displayStaff;
document.getElementById("btn4").onclick = getSelectValue;

//Build Elements

function buildElements(data) {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    const characters = data[i].name
    // console.log(characters)


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