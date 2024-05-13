// Constantes para establecer la etiqueta del cuerpo la página web.
const BODY = document.querySelector('body');
// Constantes para establecer la etiqueta del cuadro principal la página web.
const MAIN = document.querySelector('main');
// Constantes para establecer las etiquetas de encabezado y pie de la página web.
const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');

document.addEventListener('DOMContentLoaded', async () => {
    BODY.classList.add('grey', 'darken-4');
    MAIN.classList.add('container');
    FOOTER.classList.add('page-footer', 'grey', 'darken-3');
    HEADER.innerHTML = `
    <div class="navbar-fixed">
        <nav class="grey darken-3">
            <div class="nav-wrapper container">
                <div class="row">
                    <a href="#!" class="brand-logo"><i class="large material-icons">airplanemode_active</i></a>
                    <a href="#" data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul class="sidenav" id="mobile">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>
    </div>
    `;
    FOOTER.innerHTML = `
    <div class="container">
        <div class="row">
            <h5 class="white-text">Sitio dedicado todo aquel entusiasta de la aviación militar</h5>
        </div>
    </div>
    <div class="footer-copyright grey darken-2">
        <div class="container">
        Desarrollado por Daniel Hernández
        <a class="grey-text text-lighten-4 right" href="https://www.instagram.com/dnlhernandez_/" target="_blank"><img src="../../../sitio_aviones/res/img/icons8-instagram.svg"></a>
        <a class="grey-text text-lighten-4 right" href="https://twitter.com/dnlhernandez_" target="_blank">tw</a>
        </div>
    </div>
    `;
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });