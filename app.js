$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();

        var searchTerm = $("#searchTerm").val();

        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                q: searchTerm,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
            }
        })
        .then(function (response) {
            var gifs = response.data.data;

            $("#gifsContainer").empty();

            gifs.forEach(function (gif) {
                var gifUrl = gif.images.fixed_height.url;

                var imgElement = $("<img>").attr("src", gifUrl);

                $("#gifsContainer").append(imgElement);
            });
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
    });

    $("#clearGifs").click(function () {
        $("#gifsContainer").empty();
    });
});
