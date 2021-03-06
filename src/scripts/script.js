/* 
  função que monta o texto 
  Ex.: Menino colorado de 10 anos
*/
function montaTexto(FaixaEtaria, time, idade) {
  const anos = idade <= 1 ? 'ano' : 'anos'
  return FaixaEtaria + ' ' + time + ' de ' + idade + ' ' + anos
}

function verificaTimeEFaixaEtaria(idade) {
  // inicializa as variáveis
  const resultado = ['', '']
  let time = ""
  // pega o valor do input do sexo masculino/feminino
  const fsex = document.querySelector('input[name="radsex"]:checked').value
  // pega o valor do time colorado/gremista
  const ftime = document.querySelector('input[name="radtime"]:checked').value

  const caminhoImagem = 'src/images/'

  // verifica se o sexo é masculino
  if (fsex === 'masculino') {
    /* isso aqui é um if simplificado seria a mesma coisa que fazer isso: 
      if(ftime === 'colorado') {
        time = 'colorado'
      } else {
        time = 'gremista'
      }
    */
    time = ftime === 'colorado' ? 'colorado' : 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      /* 
        nessas duas linha do resultado eu estou montando o texto que desejo mostrar no resultado e coloco na posição 0 do resultado
        e tambem coloco na posição 1 o caminho da imagem que eu quero mostrar.
        o resultado vai ficar assim:
        ["Menino colorado de 10 anos", "src/images/colorado/menino.png"]
      */
      resultado[0] = montaTexto('Menino', time, idade)
      resultado[1] = caminhoImagem + time + '/' + 'menino.png'
      // isso é o retorno da função quando uso esse return todo o codigo que vem depois é ignorado.
      return resultado
    } else if (idade < 21) {
      //jovem
      resultado[0] = montaTexto('Jovem', time, idade)
      resultado[1] = caminhoImagem + time + '/' + 'jovem.png'
      return resultado
    } else if (idade < 50) {
      resultado[0] = montaTexto('Adulto', time, idade)
      resultado[1] = caminhoImagem + time + '/' + 'adulto.png'
      return resultado
    } else {
      resultado[0] = montaTexto('Idoso', time, idade)
      resultado[1] = caminhoImagem + time + '/' + 'idoso.png'
      return resultado
    }
  }

  if (fsex === 'feminino') {
    timeCaminho = ftime === 'colorado' ? 'colorado' : 'gremista'
    time = ftime === 'colorado' ? 'colorada' : 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      resultado[0] = montaTexto('Menina', time, idade)
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'menina.png'
      return resultado
    } else if (idade < 21) {
      //jovem
      resultado[0] = montaTexto('Jovem', time, idade)
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'jovemm.png'
      return resultado
    } else if (idade < 50) {
      resultado[0] = montaTexto('Adulta', time, idade)
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'adulta.png'
      return resultado
    } else {
      resultado[0] = montaTexto('Idosa', time, idade)
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'idosa.png'
      return resultado
    }
  }
}

function verificar() {
  // pega o ano selecionado
  const fano = document.getElementById('txtano')

  // pega o ano atual
  const ano = new Date().getFullYear()

  // verifica se o ano foi selecionado corretamente
  if (fano.value.lenght === 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente')
    return
  }


  // pega a idade fazendo o ano atual - o ano de nascimento
  const idade = ano - Number(fano.value)

  /*
    Aqui eu estou fazendo o uso da função que foi criada logo acima, nela ira retornar os resultados
    Ex.: ["Menino colorado de 10 anos", "src/images/colorado/menino.png"]
    dessa forma que escrevi eu estou pegando o que vem na posição 0 e jogando na variavel texto, o mesmo para a posição 1 que vai na variavel srcDaImagem
  */
  const [texto, srcDaImagem] = verificaTimeEFaixaEtaria(idade)

  // pega a div onde será mostrado o resultado
  const resultadoContainer = document.getElementById('resultado-container')

  // pega div onde será mostrado o texto do resultado
  const resultadoTexto = document.getElementById('resultado-texto')

  // pega div onde será mostrado a imagem do resultado
  const img = document.getElementById('img')


  // HORA DE MOSTRAR O RESULTADO NA TELA

  // joga a imagem na div
  img.setAttribute('src', srcDaImagem)

  // joga o texto na div
  resultadoTexto.innerHTML = texto

  // eu setei no css que a opacidade da div que mostra o resultado é 0 isso faz com que ela n apareça na tela, portante é preciso seta para 1 para que ela mostre
  resultadoContainer.style.opacity = 1

}