const url = 'http://hp-api.herokuapp.com/api/characters';


const selectTag = document.querySelector('#all-characters')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')


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
        const characterList = data[i].name
        console.log(characterList)
        const header = document.querySelector('.header')
        header.innerText = characterList
        const card = document.querySelector('.card')
        card.style.backgroundImage = `url(${data[i].image})`



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