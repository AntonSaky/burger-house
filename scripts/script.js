const mainBtn = document.getElementById("main-action-btn");
mainBtn.onclick = function (){
    document.getElementById('menu').scrollIntoView({behavior: 'smooth'});
}

const links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        document.getElementById(links[i].dataset.link).scrollIntoView({behavior:'smooth'});
    }
    
}

const buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        document.getElementById('order').scrollIntoView({behavior:'smooth'});
    }
}

const burger = document.getElementById('burger');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const makeOrder = document.getElementById('order-action');
makeOrder.onclick = () => {
    let hasError = false;
    [burger, name, phone].forEach((item) => {
        if(!item.value){
            item.parentElement.style.background = 'red';
            hasError = true;
        }else{
            item.parentElement.style.background = '';
        }
    })

    if(!hasError){
        [burger, name, phone].forEach((item) => {
            item.value = '';
        });
        alert("Заказ успешно оформлен");
    }
}

const prices = document.getElementsByClassName('products-item-price')
const currency = document.getElementById("currency");
currency.onclick = function(e){
    let currentCurrency = e.target.innerText;
    let newCurrecny = '$';
    let coefficient = 1;
    if(currentCurrency == '$'){
        newCurrecny = '₽';
        coefficient = 80;
    }else{
        if (currentCurrency == '₽') {
            newCurrecny = 'BYN';
            coefficient = 3;
        }
    }
    e.target.innerText = newCurrecny;
    for (let i = 0; i < prices.length; i++) {
        const item = prices[i];
        item.innerText = `${+(item.dataset.basePrice)*coefficient} ${newCurrecny}`
    }
}