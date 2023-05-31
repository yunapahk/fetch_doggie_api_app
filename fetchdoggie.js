// Hamburger menu // 
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

$.ajax(settings).done(function (response) {
	console.log(response);
});

  