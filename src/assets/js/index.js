setCopyrightCurrentYear = () => {
    let span = document.getElementById('copyright');

    span.innerText = `© ${new Date().getFullYear()} LOOKING 4 METALS`;
}

setBehaviorToSmooth = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

(() => {
    setCopyrightCurrentYear();

    setBehaviorToSmooth();
})();