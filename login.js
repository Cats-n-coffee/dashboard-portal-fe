const loginInput = document.querySelectorAll('.login-input');
const loginDiv = document.querySelectorAll('.login-div');

loginInput.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.toggle('active');
        zoomInput();
    })
});

function zoomInput() {
    loginDiv.forEach(div => {
        var hasChild = div.querySelector('.active') !== null;
        if (hasChild) {
            div.classList.toggle('zoom-input');
        }
        
    })
}

const loginExternal = document.querySelectorAll('.login-external');

function mobileButtons(media) {
    if(media.matches) {
        loginExternal.forEach(login => {
            login.innerText = 'Login';
        })
    }
}

var media = window.matchMedia("(max-width: 400px)");
mobileButtons(media);
media.addListener(mobileButtons);
