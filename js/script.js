document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("img");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach((el) => {
        if(el.classList == "logo"){
            // pass
        }else{
            observer.observe(el)
        }
    });
  });
  
document.getElementById('year').innerText = new Date().getFullYear();

function reachUs(x){
    let text = document.createElement('p');
    let insert = x == 1? "to purchase your items" : "for any inquiry or anything you might need";
    text.classList.add("text");
    text.innerText = `Hello our esteemed customer, reach us directly ${insert}`;
    let first = document.querySelector(".message > button");
    first.parentElement.insertBefore(text,first.nextSibling);
    document.querySelector(".popup").style.display = "block";
}

document.querySelectorAll(".message > button").forEach(btn => {
    btn.addEventListener('click',()=>{
        document.querySelector(".text").remove();
        document.querySelector(".popup").style.display = "none";
        
    });
});