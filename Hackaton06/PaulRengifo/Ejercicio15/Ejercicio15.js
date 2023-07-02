const calculadora = document.querySelector("#calculator");
for (let i = 0; i < calculadora.childElementCount; i++){
    let child = calculadora.children[i];
    if (child.tagName != 'INPUT'){
        continue
    }
    child.addEventListener('click', (event) =>{
        const ans = document.querySelector("#ans");
        if (event.target.value == 'c'){
            ans.value = "";
        }
        else if (event.target.value == '='){
            ans.value = eval(ans.value);
        }else{
            ans.value += event.target.value;
        }
        
    })
}