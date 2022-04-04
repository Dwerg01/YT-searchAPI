


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
    }
};
// xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=yoga+beginners&type=video&key=AIzaSyASyUoAD4gC9bzt3WDyqVMuNvnQZNwDnnc", true);
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=yoga+beginners&type=video&maxResults=20&key=AIzaSyASyUoAD4gC9bzt3WDyqVMuNvnQZNwDnnc", true);
xhttp.send();





