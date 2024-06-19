function calculaMedia(){

    var numeroUm = document.getElementById("numeroUm").value;
    var numeroDois = document.getElementById("numeroDois").value;
    var numeroTres = document.getElementById("numeroTres").value;

    numeroUm = parseFloat(numeroUm) || 0;
    numeroDois = parseFloat(numeroDois) || 0;
    numeroTres = parseFloat(numeroTres) || 0;

    var media = (numeroUm + numeroDois + numeroTres)/3;

    document.getElementById("resultado").innerText = "Média: " + media.toFixed(2);
    document.getElementById("buttonNovaMedia").style.display = "block";
}

function limparCampos(){
    document.getElementById("numeroUm").value = "";
    document.getElementById("numeroDois").value = "";
    document.getElementById("numeroTres").value = "";

    document.getElementById("resultado").innerText = "";
    
    document.getElementById("buttonNovaMedia").style.display = "none";
}

function verificaMaioridade(){

    var idade =  document.getElementById("idade").value;

    idade = parseFloat(idade);

    if(isNaN(idade)){
        alert("Por favor, insíra um número válido")
    }else{
        if(idade >= 18){
            alert("Pessoa maior de idade");
        }else{
            alert("Pessoa menor de idade")
        }
    }
}

function mesCorrespondente(){

    var mes = document.getElementById("numeroMes").value;

    mes = parseFloat(mes);

    switch(mes){
        case 1:
            document.getElementById("mesCorrespondente").innerText = "Janeiro";
            break;
        case 2:
            document.getElementById("mesCorrespondente").innerText = "Fevereiro";
            break;
        case 3:
            document.getElementById("mesCorrespondente").innerText = "Março";
            break;    
        case 4:
            document.getElementById("mesCorrespondente").innerText = "Abril";
            break;
        case 5:
            document.getElementById("mesCorrespondente").innerText = "Maio";
            break;  
        case 6:
            document.getElementById("mesCorrespondente").innerText = "Junho";
            break;
        case 7:
            document.getElementById("mesCorrespondente").innerText = "Julho";
            break;
        case 8:
            document.getElementById("mesCorrespondente").innerText = "Agosto";
            break;
        case 9:
            document.getElementById("mesCorrespondente").innerText = "Setembro";
            break;    
        case 10:
            document.getElementById("mesCorrespondente").innerText = "Outubro";
            break;
        case 11:
            document.getElementById("mesCorrespondente").innerText = "Novembro";
            break;  
        case 12:
            document.getElementById("mesCorrespondente").innerText = "Dezembro";
            break; 
        default:
            document.getElementById("mesCorrespondente").innerText = "Insira um número entre 1 e 12"             

    }

}