const URL = 'https://dog.ceo/api/breeds/image/random'

 const data = async()=> {
    console.log('fetching data .......')
    let response = await  fetch(URL)
    console.log(response) // JSON FORMATE
     /* while the reponse send by api is in json formate to make it in readable
     formate we have to cinvert it in javascript obj and for that we use
     json() */
     let data1 = await response.json()
     console.log(data1)
    
}