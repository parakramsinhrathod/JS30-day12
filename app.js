const pressed = []
const secretCode = 'vish'
let body = document.querySelector('h1')

window.addEventListener('keyup', (e)=> {
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secretCode - 1, pressed.length - secretCode.length)
    console.log(pressed)

    if(pressed.join('').includes(secretCode )){
        console.log('secret code activated')
        body.append('Code Crecked')
        cornify_add()
    }

})