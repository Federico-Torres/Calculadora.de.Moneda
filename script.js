function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 174;
    let euro = 185;
    let dolarBlue = 370;
    let euroBlue = 373;

    let change = (valore, moneda, devolucion ) =>{

        let resultado = valore /moneda

       alert ( ` El cambio de pesos a ${ devolucion }` + ' ' + resultado.toFixed(2)  )
    }

    if (document.getElementById("uno").checked){
        change (valore,dolar , "Dolar")
        
    }
    else if (document.getElementById("dos").checked){
       change (valore,dolarBlue, "Dolar Blue")
     

    }else if (document.getElementById("tres").checked){
        change (valore, euro, "Euro" )
       

    }else if (document.getElementById("cuatro").checked){
        change (valore, euroBlue, "Euro Blue");
     
    }
    else{
        alert("Tienes que completar todos los requemientos")
    }  








}