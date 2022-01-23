var lista = document.getElementById('lista');

for (var i=1; i<101; i++) {

    if (i%15==0) {
        let i = "fizzBuzz";
        lista.innerHTML += "<li id=li-lista-5_3>"+i+"</li>"; // multipli di 3 e 5
    } else if (i%5==0) {
        let i = "Buzz";
        lista.innerHTML += "<li id=li-lista-5>"+i+"</li>"; // multipli di 5
    } else if (i%3==0){
        let i = "fizz";
        lista.innerHTML += "<li id=li-lista-3>"+i+"</li>"; // multipli di 3
    }else {
        lista.innerHTML += "<li id=li-lista>"+i+"</li>";
    }
    
}