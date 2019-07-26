$("#searchButton").on("click", function () {
    event.preventDefault();
    console.log("click fired");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=sIeQ11D7pHHiGHjdQjBjoz977P8B5oRl";
    var userInput = $("#searchTerm").val();
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            var results = response;
            console.log(results);
        });
})  