let apiUrl = 'https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=10'
let apiKey = 'VUPWCkT7xtpH6R9nSsV_-GcTE2ze693pWtEEOcwvOj4';

let main = document.querySelector("main")
let count = 0
async function fetchImg(params) {
    let promise = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`);
    let response = await promise.json();
    console.log("count : ",count++);
  displayOnUI(response)
}

fetchImg();

function displayOnUI(arr){
    console.log(arr)
arr.forEach((value) =>{
   let img = document.createElement("img");
   img.src = `${value.urls.full}`

   main.appendChild(img);
})

}

window.addEventListener("scroll" , () =>{
    console.log(Math.ceil(window.scrollY + window.innerHeight) , document.body.offsetHeight)
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight){
       console.log("true")
      fetchImg();
    }
})