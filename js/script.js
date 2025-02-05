document.getElementById('year').innerText = new Date().getFullYear();

function reachUs(x){
    let text = document.createElement('p');
    let links = [];
    for(let i = 0; i < 3; i++){

    }
    let insert = x == 1? "to purchase your items" : "for any inquiry or anything you might need";

    text.classList.add("text");
    text.innerText = `Hello our esteemed customer, reach us directly ${insert}
                    `;
    let message = document.querySelector(".message").appendChild(text);
}

reachUs(1);