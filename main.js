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
    .then((array)=>{
        array.length = 100
        let newArray = []
        for(let item of array){
            newArray.push(fetchData(item))
        }
        console.log(newArray)

        //promise.all shorthand from Kyle
        Promise.all(newArray)
        .then((results) => Promise.all(results.map(res => res.json())))
        .then((data)=>{
            console.log(data)
            
            //loop, create element (clips), append to parent, set innerHTML for clips 
            for (let item of data){
                let clips = document.createElement('li')
                clips.innerHTML = `<a href=${item.url}>${item.title}</a></br>By: ${item.by}, Score: ${item.score}, Comments: ${item.descendants}`
                headlines.appendChild(clips)
            }
        })
    })