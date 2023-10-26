document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    dropdown.addEventListener("click", function() {
        dropdown.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});

