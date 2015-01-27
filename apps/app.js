$(document).ready(function() {
    $("#search-term").submit(function(event) {

        console.log("button hit");
        console.log($('#query').val());

        event.preventDefault();
        var searchString = $('#query').val();
        // var searchString = 'http://www.omdbapi.com/?s=' + searchTerm + '&r=json';
        console.log(searchString);
        var endpoint = "https://www.googleapis.com/youtube/v3/search"
        getRequest(endpoint, searchString);

    });
});

function getRequest(endpoint, searchString) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyC9vnMgUmuZEa9bUHCO2eF63LhNDk728D8',
        q: searchString
    };

    $.getJSON(endpoint, params, function(data) {
        console.log("get json called");
        console.log("params: " + params.part + params.key + params.q);
        console.log(data);
        ytdata = data;
        showResults(data.items);
    });
}


function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        thumbNailImgUrl = value.snippet.thumbnails.default.url;
        html += ("<img src=" + value.snippet.thumbnails.default.url + ">");
        console.log(value.Title);
    });
    $('#search-results').html(html);
}
