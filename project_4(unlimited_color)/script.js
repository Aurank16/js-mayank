const body1 = document.querySelector('body')
const button = document.querySelector('#start')
const button2 = document.querySelector('#stop')
let end
button.addEventListener('click',()=>{
    end = setInterval(()=>{

        const color = Math.floor(Math.random()*100000)
        body1.style.backgroundColor = `#${color}`
    },100)
})
 button2.addEventListener('click',()=>{
    clearInterval(end)

 })