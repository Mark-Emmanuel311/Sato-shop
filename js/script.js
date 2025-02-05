document.getElementById('year').innerText = new Date().getFullYear();

function reachUs(x){
    let text = document.createElement('p');
    let insert = x == 1? "to purchase your items" : "for any inquiry or anything you might need";
    text.classList.add("text");
    text.innerText = `Hello our esteemed customer, reach us directly ${insert}`;
    let first = document.querySelector(".message > button");
    first.parentElement.insertBefore(text,first.nextSibling);
}

reachUs(0);