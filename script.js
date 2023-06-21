  const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "To My";
            }, 0);
            setTimeout(() => {
                text.textContent = "UI/UX";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Portfolio";
            }, 8000); //1s = 1000 miliseconds
        }


        textLoad();
        setInterval(textLoad, 12000);

        import anime from 'animejs/lib/anime.es.js';


