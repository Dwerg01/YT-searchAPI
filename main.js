




var searchForm = document.querySelector("#search-form");
console.log(searchForm)


searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            const response = JSON.parse(xhttp.responseText);
            var videoData = response.items.map(function(entry) {
                return entry.snippet
            })
            var mainVideoContainer = document.querySelector("#hero-main")
            mainVideoContainer.innerHTML = "";
            videoData.forEach(element => {
                console.log(element)
                var videoresult = document.createElement('div');
                videoresult.classList.add("hero-video")
                videoresult.innerHTML = `
                <img src="${element.thumbnails.high.url}" class="video-thumb" alt="video preview"></img>
                <span class="video-title">${element.title}</span>
                <span class="video-detail">${element.channelTitle}</span>
                <sapn class="video-detail">${new Date(element.publishedAt).toLocaleString()}</sapn>
                `
                mainVideoContainer.appendChild(videoresult)
            })
        }
    };
    var searchString = document.querySelector("#search-bar").value;
    
    xhttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchString}&type=video&maxResults=12&key=AIzaSyASyUoAD4gC9bzt3WDyqVMuNvnQZNwDnnc`, true);
    xhttp.send();
})






