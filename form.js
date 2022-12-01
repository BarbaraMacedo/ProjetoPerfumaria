const form  = document.getElementById('form'); //essa variavel ela pega o formulario pela ID
const campos = document.querySelectorAll('.required'); //Pega todos os elementos que tem a classe required
const spans = document.querySelectorAll('.span-required'); //Pega todos os elementos que tem a classe span-required

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
    raValidate();
    dadosValidate();
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function cpfValidate(){
    if(campos[1].value.length < 10)
    {
        setError(1);
    }
    else{
        removeError(1);
    }
}


function endValidate(){
    if(campos[2].value.length < 1)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

function compra(){
    alert("COMPRA REALIZADA!");
}