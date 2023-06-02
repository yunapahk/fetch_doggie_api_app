// Hamburger menu
$(document).ready(function() {
    const toggleButton = $('.toggle-button');
    const navbarLinks = $('.navbar-links');

    toggleButton.click(function() {
        navbarLinks.toggleClass('active');
    });
});

// Linking API
const settings = {
    async: true,
    crossDomain: true,
    url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '02f3b69c35msh4a0aadf57595284p121757jsn8b3c7e60e543',
        'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
    }
};



// Search Form
const $searchForm = $("form");
const $result = $(".card-body");

$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const breeds = formData.get("breeds").toLowerCase();

    const url = `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${breeds}`;

    console.log(url);

    $result.empty();
    $result.html(`<div>Fetching...</div>`);

    $.ajax({
        url: url,
        headers: {
            'X-RapidAPI-Key': '02f3b69c35msh4a0aadf57595284p121757jsn8b3c7e60e543',
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        },
        method: "GET",
        success: data => {
            console.log(data);
            $result.html(`
                <div>
                    <b>breed:&nbsp;</b> <span>${data[0].breed}</span>
                </div>
                <div>
                    <b>img:&nbsp;</b> <img src=${data[0].img}>
                </div>
                <div>
                    <b>origin:&nbsp;</b> <span>${data[0].origin}</span>
                </div>
            `);
        },
        error: () => {
            $result.html(`<div>There was an error...</div>`);
        }
    });
});

// Allowing users to search with spaces
const encodedSpace = encodeURIComponent(' ');
console.log(encodedSpace);