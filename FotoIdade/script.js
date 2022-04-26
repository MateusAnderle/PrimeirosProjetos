function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value);
        let genero
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
            
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'assets/mkid.jpg')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'assets/youngman.jpg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'assets/man.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'assets/oldman.jpg')
                }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/fkid.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/youngwoman.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/woman.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/oldwoman.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}