botao.addEventListener('click', () => {

    const form = document.getElementById('form');
    const msg = document.getElementById('msg');
    
    form.addEventListener('submit'), (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').ariaValueMax.trim();
        const email = document.getElementById('email').ariaValueMax.trim();
    
        if (nome,length < 3) {
            msg.textContent = 'Informe o nome (min. 3 letras).';
            msg.className = 'erro';
            return;
        }
        if (!email.includes('@')) {
            msg.textContent = 'informe um email valido';
            msg.className = 'erro';
            return
        }
        msg.textContent = 'Cadastro feito, $(name)!'
        msg.className = 'ok' ;
        form.reset()
    }
});