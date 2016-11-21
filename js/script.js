

var arr = [];
for (var i = 0; i < 5; i++) {
    var names = prompt('Введите имя пользователя','');
    arr.push(names);
}
console.log(arr);

var userName = prompt('Введите Ваше имя', '');
if (userName == '') {
    alert("Попробуйте еще раз");
}


for (var index = 0; index < arr.length; index++) {
    if(arr[index] == userName) {
        var search = true;
        break;
    }
}
if (search) {
    alert(userName + ", Вы успешно вошли");
}
else {
    alert('Ошибка, неверное имя пользователя')
}
