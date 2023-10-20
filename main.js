async function getChuckNorrisJoke() {
  let url = "https://api.chucknorris.io/jokes/random"
  try {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data.value)
  } catch (error) {
    console.log('Error:', error)
  }
}
getChuckNorrisJoke()