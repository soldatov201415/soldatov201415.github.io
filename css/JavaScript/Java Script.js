var userName = prompt("Привіт! Як тебе звати?");
var stranger = "Незнайомець, false або null";
if (userName == false) {
    userName = "";
    userName = null;
    userName = false;
    if(confirm("ви не ввели ім'я! Можливо ви хочете ввести своє ім'я")){
       var UserNameTwo = prompt("Введіть своє ім'я, або як би ви хотіли, щоб до вас звертались");
           
       }
    }else{
        alert("Ми будем називати вас " + stranger);
        alert("Привіт, Незнайомцю");
        userName = " Незнайомець";
    }
}else{
    alert("Привіт, " + userName + "!");
}
