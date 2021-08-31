const counter=document.querySelector('#counter')
const btn=document.querySelectorAll('.btn')

let count=0;
btn.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
                const styles=e.currentTarget.classList
                if(styles.contains('increase')){
                    count++
                    counter.style.color='green'
                }
                else if(styles.contains('decrease')){
                    count--
                    counter.style.color='red'
                }
                else{
                    count=0
                    counter.style.color='black'
                }
                counter.textContent=count;
            })
});
