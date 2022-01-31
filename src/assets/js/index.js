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

changeLanguage = (selectedLanguage) => {
    const className = 'selected';
    
    let selectedFlag = document.getElementById(selectedLanguage);
    let deselectedFlag = document.getElementById(selectedLanguage == 'pt' ? 'en' : 'pt');

    if (!selectedFlag.classList.contains(className)) {
        selectedFlag.classList.toggle(className);

        deselectedFlag.classList.toggle(className);
    }
}

(() => {
    setCopyrightCurrentYear();

    setBehaviorToSmooth();
})();