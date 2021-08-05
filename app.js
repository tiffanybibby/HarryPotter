const url = 'http://hp-api.herokuapp.com/api/characters';
const studentUrl = 'http://hp-api.herokuapp.com/api/characters/students';
const staffUrl = 'http://hp-api.herokuapp.com/api/characters/staff';


const characterList = document.querySelector('.character-container')
const selectTag = document.querySelector('#select-tag')
const allCharactersBtn = document.querySelector('#btn1')
const studentBtn = document.querySelector('#btn2')
const staffBtn = document.querySelector('#btn3')
const form = document.querySelector('form')

console.log(form)

// console.log(selectTag)

// Function for All Characters List
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


// // Function for All Students List

  const getStudents = async () => {
    remove(characterList)
    try {
      const response = await axios.get(studentUrl)
      // console.log("students",response)
      const data = response.data
      // console.log(data)
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }




// //Function for All Staff List
  const getStaff = async () => {
    remove(characterList)
    try {
      const response = await axios.get(staffUrl)
      console.log("staff", response)
      const data = response.data
      // console.log(data)
      buildElements(data)

    } catch (error) {
      console.error(error)
    }
  }


//Function for All Houses Filter List

const getHouse = async (houses) => {
  remove(characterList)
    try {
      const houseUrl = `http://hp-api.herokuapp.com/api/characters/house/${houses}`;
      const response = await axios.get(houseUrl)
      console.log(response)
      const data = response.data
      console.log(data)
      buildElements(data)
      // for (let i = 0; i < (data.length = 7); i++) {
      //   const houses = [...new Set(data.map(({ house }) => house))]
      //   console.log(houses)
      //   setOptionTags(houses)
      //   return houses
      // }
    } catch (error) {
      console.error(error)
    }
  }
  

  // Create form option tags from request

  // function setOptionTags(houses) {
  //   house.forEach((houses) => {
  //     const optionTag = document.createElement('option')
  //     optionTag.id = "houseOption"
  //     optionTag.value = houses
  //     optionTag.textContent = houses
  //     selectTag.appendChild(optionTag)
  //   })
  //   return house
  // }


  // Get value of option tag from the form select tag



  //Event Handler
  allCharactersBtn.addEventListener("click", getAllCharacters)
  studentBtn.addEventListener("click", getStudents)
staffBtn.addEventListener("click", getStaff)
form.addEventListener("submit", (e) => {
  e.preventDefault()
  // selectTag.value
  console.log(selectTag.value)
  getHouse(selectTag.value)
  })



  // async function showHouse(houseValue) {
  //   remove(characterList)
  //   try {
  //     const houseURL = `http://hp-api.herokuapp.com/api/characters/house/${houseValue}`
  //     const response = await axios.get(houseURL)
  //     const data = response.data
  //     console.log(response.data)
  //     buildElements(data)
  //     // console.log(houses)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // Build Elements

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