function verificaTimeEFaixaEtaria(idade) {
  // inicializa as variáveis
  const resultado = ['', '']
  let time = ""
  // pega o valor do input do sexo masculino/feminino
  const fsex = document.querySelector('input[name="radsex"]:checked').value
  // pega o valor do time colorado/gremista
  const ftime = document.querySelector('input[name="radtime"]:checked').value

  const caminhoImagem = 'src/images/'

  if (fsex === 'masculino') {
    time = ftime === 'colorado' ? 'colorado' : 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      resultado[0] = 'Menino ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + time + '/' + 'menino.png'
      return resultado
    } else if (idade < 21) {
      //jovem
      resultado[0] = 'Jovem ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + time + '/' + 'jovem.png'
      return resultado
    } else if (idade < 50) {
      resultado[0] = 'Adulto ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + time + '/' + 'adulto.png'
      return resultado
    } else {
      resultado[0] = 'Idoso ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + time + '/' + 'idoso.png'
      return resultado
    }
  }
  if (fsex === 'feminino') {
    timeCaminho = ftime === 'colorado' ? 'colorado' : 'gremista'
    time = ftime === 'colorado' ? 'colorada' : 'gremista'
    if (idade >= 0 && idade < 10) {
      //criança
      resultado[0] = 'Menina ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'menina.png'
      return resultado
    } else if (idade < 21) {
      //jovem
      resultado[0] = 'Jovem ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'jovemm.png'
      return resultado
    } else if (idade < 50) {
      resultado[0] = 'Adulta ' + time + ' de ' + idade + ' anos'
      resultado[1] = caminhoImagem + timeCaminho + '/' + 'adulta.png'
      return resultado
    } else {
      resultado[0] = 'Idosa ' + time + ' de ' + idade + ' anos'
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

  // função que verifica e retorna o time e a faixa etaria da pessoa
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

  // deixa visivel a div do resultado
  resultadoContainer.style.opacity = 1

}