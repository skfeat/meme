


// for (let i = 0; i < 20; i++) {
//     fetch("https://meme-api.com/gimme")
// .then(response => response.json())
// .then(meme=> {
//     console.log(meme["url"])
//     document.write=`<img src='${meme["url"]}'><br>`
//     const div = document.createElement("div");
//     div.innerHTML+=`<img src='${meme["url"]}' width=250px height=250px>`
//     document.getElementById('test').appendChild(div)
// })
    
// }


const fetchedUrls = [];

function fetchMeme() {
  fetch("https://meme-api.com/gimme")
    .then(response => response.json())
    .then(meme => {
      const url = meme["url"];
      if (fetchedUrls.includes(url)) {
        fetchMeme(); // Fetch another meme if URL has already been fetched
      } else {
        fetchedUrls.push(url); // Add URL to fetchedUrls array
        const div = document.createElement("div");
        div.innerHTML+=`<div style="border:1px solid grey; border-radius: 10px; margin:10px; padding:5px;"><center>`+`<b>Post Title : ${meme["title"]}<br></b>`+`<img src='${url}' width=300px height=300px><br>`+`<b>Posted by ${meme["author"]}</b>`+`</center></div>`
        document.getElementById('test').appendChild(div)
      }
    })
}

for (let i = 0; i < 100; i++) {
  fetchMeme();
}
