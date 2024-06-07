const gifSection = document.getElementById("gifs");
const searchBtn = document.getElementById("searchBtn");
const delBtn = document.getElementById("delAllBtn");
const searchInput = document.getElementById("search");

async function getGif(){
    const searchTerm = searchInput.value;
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=pPA10qpPqy8kPY9fkLkH5d7iUq80MtbA`);
    // console.log(res);
    searchInput.value = '';
    return res;
}

async function addToPage(){
    const searchTerm = searchInput.value;
    const res = await getGif();
    const newGif = document.createElement('img');
    newGif.src=res.data.data.images.fixed_height.url;
    newGif.alt=searchTerm;
    newGif.classList.add('gif');
    gifSection.appendChild(newGif);
}

function clearPage(){
    gifSection.innerHTML = '';
}

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    addToPage();
});

delBtn.addEventListener('click', function(e){
    e.preventDefault();
    clearPage();
});