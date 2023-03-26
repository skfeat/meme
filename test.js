


const fetchedUrls = [];

function fetchMeme() {
  fetch("https://meme-api.com/gimme/animememes/1")
    .then(response => response.json())
    .then(meme => {
      const url = meme["url"];
      if (fetchedUrls.includes(url)) {
        fetchMeme(); // Fetch another meme if URL has already been fetched
      } else {
        fetchedUrls.push(url); // Add URL to fetchedUrls array
        const div = document.createElement("div");
        div.innerHTML += `<div class="card shadow mt-2 p-2">
                <div class="card-body p-1">
                  <h4 class="card-title ml-2">Posted By <span class="text-success">${meme["author"]}</span></h4>
                  <p class="card-text ml-2"><b>Caption:- </b><span class="text-primary">${meme["title"]}</span></p>
                </div>
                <img class="card-img-bottom p-1 shadow" style="border-radius:10px;" src="${meme["url"]}" alt="Card image cap" width=320px height=350px onerror="this.onerror=null; this.src='error.jpg';">
              </div>
           `;
        document.getElementById('meme').appendChild(div);
      }
    });
}

for (let i = 0; i < 1000; i++) {
  fetchMeme();
}

function mixedmeme() {

  function fetchMeme() {
    document.getElementById('meme').innerHTML=""
    fetch("https://meme-api.com/gimme/animememes/1")
      .then(response => response.json())
      .then(meme => {
        const url = meme["url"];
        if (fetchedUrls.includes(url)) {
          fetchMeme(); // Fetch another meme if URL has already been fetched
        } else {
          fetchedUrls.push(url); // Add URL to fetchedUrls array
          const div = document.createElement("div");
          div.innerHTML += `<div class="card">
                  <div class="card-body p-1">
                    <h4 class="card-title">Posted By <span class="text-success">${meme["author"]}</span></h4>
                    <p class="card-text">${meme["title"]}</p>
                  </div>
                  <img class="card-img-bottom p-1" src="${meme["url"]}" alt="Card image cap" width=300px height=350px>
                </div>
             `;
          document.getElementById('meme').appendChild(div);
        }
      });
  }
  
  for (let i = 0; i < 100; i++) {
    fetchMeme();
  }
  
}

