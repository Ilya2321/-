// Анимация верта    

let animate = document.querySelector('.anim-vert');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    animate.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
}); 

let animatea = document.querySelector('.anim-vert2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    animatea.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
}); 

// Анимация верта закончилась

// Переключения    

var auth = document.getElementById('auth-tab');
var ashow = document.getElementById('auth');   
var reg = document.getElementById('reg');
var authav = document.getElementById('auth-av');

auth.addEventListener("click", function() {
    ashow.style.display = "none";
    reg.style.display = "block";
})

authav.addEventListener("click", function() {
    ashow.style.display = "block";
    reg.style.display = "none";
})

// закончились переключения

// "Авторизация" появление при клике 

var element = document.getElementById('el');
var showme = document.getElementById('show-me');

element.addEventListener("mouseover", function(){
showme.style.display = 'block';
showme.style.marginRight = '15px';
});

element.addEventListener("mouseout", function(){
showme.style.display = 'none';
showme.style.marginRight = '0px';
});

// знаю, что хуево сделал, не ругайтесь, ведь это просто слив!!
