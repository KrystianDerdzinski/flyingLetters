
window.onload = () => {
    const lettersBox = document.querySelector('#lettersBox');
    const slogan = document.querySelector('#slogan');
    const go = document.querySelector('#go');
    go.addEventListener('click', flyingLetters)
    go.addEventListener('click'. hndlr);

    function flyingLetters() {
        lettersBox.innerHTML = "";
        let splitted = slogan.value.split('');
        splitted.forEach(item => lettersBox.innerHTML += '<span class="letter">' + item + '</span>');
        let lettersArray = document.querySelectorAll('.letter');
        setInterval(showLetter, 300);
        let i = 0;
        function showLetter() {
            lettersArray[i].classList.add('show');
            if (i === lettersArray.length) {
                clearInterval(showLetter)
            }
            i++;
        }
    }

    //todo google api image
    // apikey AIzaSyD3nhWqOcLaUq01CaTzt75J5glBrfVypmI 
    function hndlr (response) {
        for (var i = 0; i < response.items.length; i++) {
            let item = response.items[i];
            // in production code, item.htmlTitle should have the HTML entities escaped.
            document.getElementById("imgGoogle").innerHTML += "<br>" + item.htmlTitle;
        }
    }
}
