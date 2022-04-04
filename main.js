var maxResults = 20;

var searchString = document.getElementById("search-bar") ? document.getElementById("search-bar").nodeValue() : "yoga beginner"; 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const response = JSON.parse(xhttp.responseText);
        var videoData = response.items.map(function(entry) {
            return entry.snippet
        })
        var mainVideoContainer = document.querySelector("#hero-main")
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
            mainVideoContainer.append(videoresult)
        });
        console.log(document.getElementById("search-bar").nodeValue())
    }
};


xhttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchString.split(" ").join("+")}&type=video&maxResults=${maxResults}&key=AIzaSyASyUoAD4gC9bzt3WDyqVMuNvnQZNwDnnc`, true);
xhttp.send();





var searchString = document.getElementById("search-bar").nodeValue();
