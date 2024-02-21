// const body = document.querySelector('body');

// const parent = document.createElement('div');
// parent.className = 'parent';

// const child = document.createElement('div');
// child.className = 'child';


const topStories = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

//set const for parent to append to
const headlines = document.querySelector('#headlines')

function fetchData(response){
    let apiClips = `https://hacker-news.firebaseio.com/v0/item/${response}.json?print=pretty`
    return fetch(apiClips)
}

fetch(topStories)
    .then((response)=>{
        return response.json()
    })
    .then((arr)=>{
        arr.length = 100
        let newarr = []
        for(let item of arr){
            newarr.push(fetchData(item))
        }
        console.log(newarr)
        //promise.all shorthand from Kyle
        // Promise.all(arrayOfPromises)
        // .then((results) =>{Promise.all(results.map(res => res.json()))})
        // .then((data)=>{
        //     console.log(data)
        })
        //loop, create element (clips), set inner html to url           