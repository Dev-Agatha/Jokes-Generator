const button =document.getElementById('btn');
const jokees = document.getElementById('joke')



const apiKey = "UUuElZ2TT2vJ0MEzf1RVMw==4W88qVjzd1UHJ4Xy"
// apis methods 
const options = {
    method:"GET",
    headers:{
        'X-Api-Key':apiKey,
    },
};

const apiURL= 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function clickCheck(){

//find errors in case of network obstruction

    try {
        //get loading effect
        joke.innerText = "updating...";
        button.disabled = true;
        button.innerText = "Loading...";
        const response = await fetch(apiURL, options)
        const data =await response.json()

        button.disabled= false;
        button.innerText="Tell me a joke"

        jokees.innerText = data[0].joke;
    } catch (error) {
        jokees.innerText = "An error happened, try again later";
        button.disabled= false;
        button.innerText="Tell me a joke"
        console.log(error);

    }

}
//activate button clicks
    button.addEventListener('click', clickCheck);
