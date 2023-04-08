const player1 = document.querySelector('.p1')
const player2 = document.querySelector('.p2')
const h2 = document.querySelector('h2')
const max = document.querySelector('#number')
const reset = document.querySelector('.reset')
max.addEventListener('click',(e)=>{
    const high = parseInt(max.value) 
    let p1score = 0
    let p2score = 0
    h2.innerText=`${p1score} to ${p2score}`
    player1.addEventListener('click',(e) =>{
        e.stopPropagation()
        if(p1score===high || p2score===high){
            alert('please reset the game')   
        }
        else{
            p1score++;
        }
        h2.innerText = `${p1score} to ${p2score}`
        if(p1score===high){
            alert('Hurray P1 won')
        }
    })
    player2.addEventListener('click',(e) =>{
        e.stopPropagation()
        if(p1score===high || p2score===high){
            alert('please reset the game')   
        }
        else{
            p2score++;
        }
        h2.innerText = `${p1score} to ${p2score}`
        if(p2score===high){
            alert('Hurray P2 won')

        }
    })
    
})