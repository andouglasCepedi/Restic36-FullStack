//Ex.1: Alteração dinâmica do nome do usário
var username = "João";
var texto_nome = document.getElementById('username');
texto_nome.textContent = `Seja Bem-Vindo(a), ${username}`;

//Ex.2: Sintaxe de Controle (IF)
if(username === "João"){
    texto_nome.style.color = 'red';
}else{
    texto_nome.style.color = 'blue';
}

//Ex.3: Sintaxe de Controle (FOR)
for(var i=0;i<5;i++){
    console.log('Loop:', i);
}