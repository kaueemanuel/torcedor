function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente')
    return
  }
  //
  var fsex = document.getElementsByName('radsex')
  var ftime = document.getElementsByName('radtime')
  var idade = ano - Number(fano.value)
  var gênero = ''
  var time = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if (fsex[0].checked && ftime[0].checked) {
    gênero = 'Homem'
    time = 'colorado'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'meninocolorado.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'jovemcolorado.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'adultocolorado.png')
    } else {
      //idoso
      img.setAttribute('src', 'idosocolorado.png')
    }
  } else if (fsex[0].checked && ftime[1].checked) {
    gênero = 'Homem'
    time = 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'meninogremista.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'jovemgremista.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'adultogremista.png')
    } else {
      //idoso
      img.setAttribute('src', 'idosogremista.png')
    }
  } else if (fsex[1].checked && ftime[0].checked) {
    gênero = 'Mulher'
    time = 'colorada'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'meninacolorada.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'jovemcolorada.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'adultacolorada.png')
    } else {
      //idoso
      img.setAttribute('src', 'idosacolorada.png')
    }
  } else if (fsex[1].checked && ftime[1].checked) {
    gênero = 'Mulher'
    time = 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'meninagremista.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'jovemmgremista.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'adultagremista.png')
    } else {
      //idoso
      img.setAttribute('src', 'idosagremista.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${gênero}, ${time} com ${idade} anos.`
  res.appendChild(img)

}