let input = document.querySelector("input");

input.addEventListener("keyup" ,()=>{
updateDebounce(input.value);    
});

function debounce(fn , delay){
    let timer;
    return function(query){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() =>{
            console.log(query)
        },delay);
    }
}

let updateDebounce = debounce(fetchData, 2000);
// console.log(updateDebounce)
async function fetchData(params) {
    let promise = await fetch("https://openapi.programming-hero.com/api/phones?search=oppo");
    let response = await promise.json();
    console.log(response);
}