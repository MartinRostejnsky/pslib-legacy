(() => {
    const applyEffect = () => {
        removeInfoTopDiv();
        replaceLogo();
    }

    const removeInfoTopDiv = async () => {
        var infoTopDiv = document.querySelector('div.info_top');
        if (infoTopDiv) {
            infoTopDiv.remove();
        }
      }

    const replaceLogo = async () => {
        var logo = document.querySelector('div.logo img');

        if (logo) {
            logo.src = "https://web.pslib.cz/sites/pslib.cz/images/logo.svg"
        }
    }

    applyEffect();
    document.addEventListener('DOMContentLoaded', applyEffect);
})();
