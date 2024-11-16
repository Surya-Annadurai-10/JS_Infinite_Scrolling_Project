let apiUrl =
  "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=10";
let apiKey = "SUh2CQnguVPGWJ6dar0cneCTS75WcFcRkIuGzBCkSwI";
let con = document.querySelector(".con");
let main = document.querySelector("main");
let count = 0;
async function fetchImg(params) {
  let promise = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`
  );
  let response = await promise.json();
  console.log("count : ", count++);
  displayOnUI(response);
}

fetchImg();

function displayOnUI(arr) {
  console.log(arr);
  arr.forEach((value) => {
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = `${value.urls.full}`;
    // console.log(img)
    main.appendChild(img);

    img.addEventListener("click", () => {
      let div = document.createElement("div");
      div.classList.add("section");
      let popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = `
        <div class="pop-img">
            <img src="${value.urls.full}" alt="">
        </div>
        <div class="img-content">
           <div class="top">
            <div class="likes-box">
                <span style="font-size: 2.5rem;" class="material-symbols-outlined icon">
                    favorite
                </span>
                <span class="likes">Likes <span>${value.likes}</span></span>
             </div>
             <div class="download">
                <button>Download</button>
             </div>
           </div>
           <div class="bottom">
            <p>${value.alt_description}</p>
           </div>
        </div>
         <button class="clear">X</button>
       `;
      div.appendChild(popup);
      con.appendChild(div);

      let clear = document.querySelectorAll(".clear");

      clear.forEach((value) => {
        value.addEventListener("click", () => {
          div.remove();
        });
      });
    });
  });

  let imgAll = document.querySelectorAll(".img");

  // imgAll.addEventListener("click" , () =>{

  // })
}

window.addEventListener("scroll", () => {
  console.log(
    Math.ceil(window.scrollY + window.innerHeight),
    document.body.offsetHeight
  );
  if (
    Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight
  ) {
    console.log("true");
    fetchImg();
  }
});
