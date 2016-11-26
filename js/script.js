function enterNames() {
 var arr = [];

for (i = 0; i < 5; i++) {
 arr[i] = prompt('Введите любое имя', '');

 while (arr[i] === '') {
    alert('Вы не указали имя');
    arr[i] = prompt('Введите любое имя', '');
}

if (arr[i] === null) {
    alert('Отмена');
    return false;
  }
}

console.log(arr);
    

var userName = prompt('Введите имя пользователя','');
 for ( var i = 0; i < 5; i++ ) {

if (userName === null) {
     alert('Отмена');
       return false;
        }
    }

while (userName === '') {
        alert('Вы не указали имя');
        userName = prompt('Введите имя пользователя','');
    }

for (var j = 0; j < arr.length; j += 1) {
        if (arr[j] === userName) {
            alert(userName + ', Вы успешно вошли');
            return;
}

if (arr[i] !== userName) {
            alert('Ошибка, пользователя с таким именем нету!');
            return;
        }

    }
} 
    
    enterNames();

