const apiURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/frugal?key=00fb466c-3a42-4624-bd7a-fa38c40951fa`

fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      const def = data[0].shortdef
      console.log(def)
    })
    .catch((error) => {
      console.log(`An error occured: ${error.message}`)
    })