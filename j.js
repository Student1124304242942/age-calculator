let count = 0;

const result = document.querySelector('#result');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const r = e.currentTarget.classList;
        if(r.contains('crease')){
            count++
        } else if(r.contains('increase')){
            count--
        } else {
            count = 0
        }
        result.textContent = count
    })
})