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
                    
                    string += " <img src'"+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension  +"' />";

                    string += "<h3>" +element.title + "</h3>";

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
