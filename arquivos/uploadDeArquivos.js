const fs = require('fs')

fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
    console,console.log(('Cachorro'));
    
    fs.writeFile('./assets/salsicha2.jpg', buffer, (erro) => {
        console.log('imagem foi escrita')
    })
})