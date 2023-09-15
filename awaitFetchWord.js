const apiURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/kink?key=00fb466c-3a42-4624-bd7a-fa38c40951fa`

async function fetchData() {
    try {
        const res = await fetch(apiURL)

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }
        
        const data = await res.json()
        const def = data[0].shortdef
        console.log(def)
    } catch (error) {
      console.log(`An error occured: ${error.message}`)
    }
}

fetchData()