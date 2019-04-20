const axios = require('axios');

const stuff = () => {
    const baseUrl = 'https://swapi.co/api'
    axios.get(`${baseUrl}/people`)
        .then((res)=>{
             const answer = (res.data.results.map((e)=>{
                 return e.name
             }))
         })    
         console.log(answer)
}



