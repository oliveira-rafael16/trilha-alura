const fs = require('fs');
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => 
{
    // definindo os tipos validos e o caminho
    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;
    // condicional em caso o tipo seja invalido ou valido
    if(tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho)); //callback de imagem do novoCaminho
    } else {
        const erro = 'Tipo é inválido';
        console.log('Erro! Tipo inválido')
        callbackImagemCriada(erro)
    } 
}