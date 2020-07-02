/*
public key = 2bbafa01269795b83d2ecb54085faed4
private key = afcfa8996725f83ce931a01e22184e62b62e0b77
 */

    var marvel = {
        render: function() {
            var url = " https://gateway.marvel.com/v1/public/characters/1010338/comics?ts=1&apikey=2bbafa01269795b83d2ecb54085faed4&hash=fc25c4d68df68f0b6973931719a0cc20"
            var message = document.getElementById("message");
            var footer = document.getElementById("footer");
            var marvelContainer = document.getElementById("marvel-container");
            $.ajax({    
                url: url,
                type: "GET",
                beforeSend: function() {
                    message.innerHTML = "Loading...";
                },
                complete: function() {
                    message.innerHTML = "Successfully done!";
                },
                success: function(data) {
                    footer.innerHTML = data.attributionHTML;
                    var string = "";

                    for(var i = 0; i<data.data.results.length; i++) {
                        var element = data.data.results[i];
                        
                        string += "<div class='cards'>";
                        string += "<ul>";
                        string += "<a href='" +element.urls[0].url+  "' target='_blank'>";
                        string += "<img src='"+element.thumbnail.path+"/portrait_uncanny."+element.thumbnail.extension+"' />";
                        string += "</a>";
                        string += "<h3>" +element.title + "</h3>";
                        string += "<h4>" +element.dates[0].date+ "</h4>";
                        string += "</ul>";
                        string += "</div>";
                    }

                    marvelContainer.innerHTML = string;

                },
                error: function() {
                    message.innerHTML =  "We are sorry!";
                }
            });
        }
    };
    marvel.render(); 

    var currentScrollPosition = window.scrollY;
var timeToWait = 1000; // No of millisecond to wait before call loadImages function.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function loadImages(e){
   if((currentScrollPosition + 500) < window.scrollY){
   currentScrollPosition = window.scrollY;
    console.log('dfdf');
   // Do you image loading here
   }
}
window.onscroll = debounce(loadImages,timeToWait);