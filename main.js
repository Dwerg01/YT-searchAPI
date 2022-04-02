


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const response = JSON.parse(xhttp.responseText);
        console.log(response.items);
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=yoga+beginners&type=video&key=AIzaSyASyUoAD4gC9bzt3WDyqVMuNvnQZNwDnnc", true);
xhttp.send();





