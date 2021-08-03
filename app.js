const url = 'http://hp-api.herokuapp.com/api/characters';


const selectTag = document.querySelector('#all-characters')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')


// console.log(form)

const getAllCharacters = async () => {
  try {
    const response = await axios.get(url)
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data[i])
      console.log(response.data[i].name)
      const characterList = Object.values(response.data)
      console.log(characterList)
      // setOptionTags(characterList)

      return characterList
    }
    } catch (error) {
      console.error(error)
    }
  }
getAllCharacters()

  
// function setOptionTags(list) {
//   list.forEach((character) => {
//     // console.log()
//     const optionTag = document.createElement('option')
//     optionTag.value = name
//     optionTag.textContent = name
//     selectTag.append(optionTag)
//   })
//   return list
// }