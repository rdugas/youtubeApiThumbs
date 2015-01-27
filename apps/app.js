$(document).ready(function() {
    $("#search-term").submit(function(event) {

        console.log("button hit");
        console.log($('#query').val());

        event.preventDefault();
        var searchString = $('#query').val();
        // var searchString = 'http://www.omdbapi.com/?s=' + searchTerm + '&r=json';
        console.log(searchString);
        getRequest(searchString);

    });
});

function getRequest(searchString) {
    var params = {
        s: searchString,
        r: 'json'
    };
    url = 'http://www.omdbapi.com';

    $.getJSON(url, params, function(data) {
        console.log("get json called");
        console.log(data.Search);
        showResults(data.Search);
    });
}


function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $('#search-results').html(html);
}
