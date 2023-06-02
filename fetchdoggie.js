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
    $result.html(`<div>Loading...</div>`);

    fetch(url, 
        
        {headers: {

        'X-RapidAPI-Key': '02f3b69c35msh4a0aadf57595284p121757jsn8b3c7e60e543',
        'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
    },method: "GET",
})
        .then(response => {
            
            return response.json();
        })
        .then(data => {
            console.log(data)
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
        })
        .catch(() => {
            $result.html(`<div>There was an error...</div>`);
        });
});

// Allowing users to search with spaces
const encodedSpace = encodeURIComponent(' ');
console.log(encodedSpace);

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

window.addEventListener('load', function() {
    var animationElement = document.querySelector('.sausage-dog-animation');
    var restOfPage = document.querySelector('.rest-of-page');
    
    animationElement.addEventListener('animationend', function() {
      restOfPage.style.display = 'block';
    });
  });