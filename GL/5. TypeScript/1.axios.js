//return the status,server name and date
const axios = require('axios');
// async function doHeadRequest(){
//     let res=await axios.head('http://webcode.me');
//     console.log(`Status:${res.status}`)
//     console.log(`Server:${res.headers.server}`)
//     console.log(`Date:${res.headers.date}`)
// }
// doHeadRequest();

//Request to github api-to get number of followers
async function getNumberOfFollowers(){
    let res=await axios.get('https://api.github.com/users/janbodnar');
    let nOfFollowers=res.data.followers;
    let location = res.data.location;
    console.log(`# of followers : ${nOfFollowers}`)
    console.log(`Location: ${location}`)
}
getNumberOfFollowers();