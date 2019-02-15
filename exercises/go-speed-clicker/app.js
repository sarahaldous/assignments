var display = document.getElementById('count-display')
var btn = document.getElementById('clickBtn')


var count = 0

if(localStorage.clickCount > 0){
    count = localStorage.clickCount
}
display.textContent = count

btn.addEventListener('click', function(){
    count++
    display.textContent = count
    localStorage.clickCount = count
})


