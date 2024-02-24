const arrayOfImages = [
  {
    src: "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
    title: "A peacock dancing around",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg?fmt=webp&w=500",
    title: "Old fort treasure",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    title: "bench",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/39a/spring-1377434.jpg?fmt=webp&w=500",
    title: "flower",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&w=500",
    title: "Curious bird",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/ab3/puppy-2-1404644.jpg?fmt=webp&w=500",
    title: "dog eyes",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
    title: "A peacock dancing around",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg?fmt=webp&w=500",
    title: "Old fort treasure",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&w=500",
    title: "bench",
  },
  {
    src: "https://images.freeimages.com/images/large-previews/39a/spring-1377434.jpg?fmt=webp&w=500",
    title: "flower",
  },
];
const gallery = document.getElementById("gallery")
const createCard= function(imageSource,text){
    const card = document.createElement('div')
    const title = document.createElement('div')
    const cross = document.createElement('div')
    const image = document.createElement('img')
    cross.innerHTML = "&#10060;";
    title.innerHTML= text
    image.src=imageSource
    card.classList.add("card")
    title.classList.add("title")
    cross.classList.add("cross")
    image.classList.add("image")
    card.appendChild(image)
    card.appendChild(title)
    card.appendChild(cross)
    gallery.appendChild(card)
    cross.addEventListener("click",(e)=>{
      const clicked = e.target;
      clicked.parentElement.remove()
    })
}

// createCard(arrayOfImages[0].src,arrayOfImages[0].title)
for(let i of arrayOfImages){
    createCard(i.src, i.title);
}

const search = document.getElementById("search")
const add = document.getElementsByTagName("label")[0]
console.log(add)
function addHandler(e){
    const str = search.value
    if(!str) return;
    const data = fetch(str)
    data.then((res)=>{
      if(!res.ok) return
      createCard(str, "random title");
    }).catch(()=>{})
    
}
add.addEventListener("click",addHandler)

