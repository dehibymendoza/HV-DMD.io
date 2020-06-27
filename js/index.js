< script >
    document.addEventListener('DOMContentLoaded', function() {
        $('.carousel').carousel({
            interval: 6000,
            pause: false,
        }).carousel('cycle')


        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");

            } else {
                navbar.classList.remove("sticky");
            }
        }

        // Get the navbar
        var navbar = document.getElementById("sticky-header");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {
            myFunction()
        };
    }) <
    /script>