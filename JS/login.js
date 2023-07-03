const url = 'login.html'
const btnEntrar = document.querySelector('#btn_entrar')
const mode = document.getElementById('mode_icon')


function openInNewTab(url) {
    const win = window.open(url, '_self')
    win.focus()
}

btnEntrar.addEventListener('click', () =>{
    openInNewTab(url)
})

mode.addEventListener('click', () => {
    const form = document.getElementById('entrar_form');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
})

