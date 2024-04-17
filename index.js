console.log('js ЗАПУЩЕН');

let btn = document.querySelector('.theme')
let title = document.querySelector('.title')
let h = 0


console.log('переменная btn', btn);
console.log('переменная title', title);

function theme_change(){
    // Если включена темная тема переключаем на светлую
    if(title.style.color == 'white'){
        document.body.style.background = 'white'
        title.style.color = 'black'
        btn.innerText = 'тема:светлая'
    }else {
        document.body.style.background = 'black'
        title.style.color = 'white'
        btn.innerText = 'тема: темная'
    }
    h += 1

    if (h == 5){
        btn.removeEventListener('click', theme_change)
    }
}


btn.addEventListener('click', theme_change)