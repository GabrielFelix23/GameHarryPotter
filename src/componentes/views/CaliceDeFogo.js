import React from 'react'
import {Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'
import Styles from '../styles/styles'


export default class CaliceDeFogo extends React.Component{
  frases = [
  //Verdadeiras
  "Harry precisava falar com Cedrico sobre os dragoes. Para chamar sua atencao, o feitico ele lançou em sua mochila foi Diffindo",
  "Sirius por meio de cartas, sugeriu que Harry fizesse com seu dragao atingisse os olhos",
  "No livro, as vezes que Murta que Geme aparece no banheiro e no lago negro",
  "Rony diz sobre Krum na cabana dos Weasley, na Copa Mundial que ele e rápido com uma aguia, ninguém supera p Krum",
  //Falsas
  "O premio de Harry e de Krum é Hemione e Rony",
  "Fred e Jorge ficaram tontos quando eles tentam colocar seus nomes no calice",
  "O bicho rita skeeter conseguia se transformar em Gato",
  "A pessoa que foi acusado de conjurar a marca negra foi o Fred",
  ]
  
  state = {
    perguntas: 'Olá meus bruxos e bruxas, Vamos começar ?',
    respostaCerta: '',
    respostaErrada: '',
    pontosCertos: 0,
    pontosErrados: 0,
    styleVedareiro: '',
    verdadeiro: '',
    styleFalso: '',
    falso: '',
    styleComecar: Styles.botaoComecar,
    comecar: 'Estou pronto!',
    styleZerar: '',
    zerar: ''
  }

  comecar = () => {
    const perguntaRandom = Math.floor(Math.random() * this.frases.length)
        this.setState({
          perguntas: this.frases[perguntaRandom],
          respostaCerta: '',
          respostaErrada: '',
          pontosCertos: 0,
          pontosErrados: 0,
          styleVedareiro: Styles.botaoVerdade,
          verdadeiro: "Verdadeiro",
          styleFalso: Styles.botaoFalso,
          falso: 'Falso',
          styleComecar: '',
          comecar: '',
          styleZerar: Styles.botaoZera,
          zerar: "Zerar"
        })
  }

  verdade = () => {
    if(this.state.perguntas == "Harry precisava falar com Cedrico sobre os dragoes. Para chamar sua atencao, o feitico ele lançou em sua mochila foi Diffindo" || this.state.perguntas == "Sirius por meio de cartas, sugeriu que Harry fizesse com seu dragao atingisse os olhos" || this.state.perguntas == "No livro, as vezes que Murta que Geme aparece no banheiro e no lago negro" || this.state.perguntas == "Rony diz sobre Krum na cabana dos Weasley, na Copa Mundial que ele e rápido com uma aguia, ninguém supera p Krum"){
        const perguntaRandom = Math.floor(Math.random() * this.frases.length)
        this.setState({
          perguntas: this.frases[perguntaRandom],
          respostaCerta: "Resposta Certa. Parabéns!",
          respostaErrada: '',
          pontosCertos: this.state.pontosCertos + 1
        })
        if(this.state.pontosCertos === 10){
          this.setState({
            perguntas: "Parabéns!! Eu sábia que você iria fazer parte das nossas aventuras.\nAgora a escola de magia e bruxaria de Hogwarts espera por você.\nSeja bem vindo(a)!",
            respostaCerta: '',
            respostaErrada: '',
            pontosCertos: 0,
            pontosErrados: 0,
            styleComecar: Styles.botaoComecar,
            comecar: 'Refazer',
            styleZerar: '',
            zerar: '',
            styleVedareiro: '',
            verdadeiro: '',
            styleFalso: '',
            falso: '',
          })
        }
    }else{
      let perguntaRandom = Math.floor(Math.random() * this.frases.length)

      this.setState({
        perguntas: this.frases[perguntaRandom],
        respostaErrada: "Resposta Errada!",
        respostaCerta: '',
        pontosErrados: this.state.pontosErrados + 1
      })
      if(this.state.pontosErrados === 10){
        this.setState({
          perguntas: "Muito triste!\nDessa vez você não pode entrar para a escola de magia e bruxaria de Hogwarts.\nMas não desista, refaça a teste e venha fazer parte das nossas aventuras. Boa sorte!", 
          respostaCerta: '',
          respostaErrada: '',
          pontosCertos: 0,
          pontosErrados: 0,
          styleComecar: Styles.botaoComecar,
          comecar: 'Refazer',
          styleZerar: '',
          zerar: '',
          styleVedareiro: '',
          verdadeiro: '',
          styleFalso: '',
          falso: '',
        })
      }
    }
  }

  falso = () => {
    if(this.state.perguntas == "O premio de Harry e de Krum é Hemione e Rony" || this.state.perguntas == "Fred e Jorge ficaram tontos quando eles tentam colocar seus nomes no calice"|| this.state.perguntas == "O bicho rita skeeter conseguia se transformar em Gato"|| this.state.perguntas == "A pessoa que foi acusado de conjurar a marca negra foi o Fred"){
      let perguntaRandom = Math.floor(Math.random() * this.frases.length)

      this.setState({
        perguntas: this.frases[perguntaRandom],
        respostaCerta: "Resposta Certa. Parabéns!",
        respostaErrada: '',
        pontosCertos: this.state.pontosCertos + 1
      })
      if(this.state.pontosCertos === 10){
        this.setState({
          perguntas: "Parabéns!! Eu sábia que você iria fazer parte das nossas aventuras.\nAgora a escola de magia e bruxaria de Hogwarts espera por você.\nSeja bem vindo(a)!",
          respostaCerta: '',
          respostaErrada: '',
          pontosCertos: 0,
          pontosErrados: 0,
          styleComecar: Styles.botaoComecar,
          comecar: 'Refazer',
          styleZerar: '',
          zerar: '',
          styleVedareiro: '',
          verdadeiro: '',
          styleFalso: '',
          falso: '',
        })
      }
    }else{
      let perguntaRandom = Math.floor(Math.random() * this.frases.length)
      this.setState({
        perguntas: this.frases[perguntaRandom],
        respostaErrada: "Resposta Errada!",
        respostaCerta: '',
        pontosErrados: this.state.pontosErrados + 1
      })
      if(this.state.pontosErrados === 10){
        this.setState({
          perguntas: "Muito triste!\nDessa vez você não pode entrar para a escola de magia e bruxaria de Hogwarts.\nMas não desista, refaça a teste e venha fazer parte das nossas aventuras. Boa sorte!", 
          respostaCerta: '',
          respostaErrada: '',
          pontosCertos: 0,
          pontosErrados: 0,
          styleComecar: Styles.botaoComecar,
          comecar: 'Refazer',
          styleZerar: '',
          zerar: '',
          styleVedareiro: '',
          verdadeiro: '',
          styleFalso: '',
          falso: '',
        })
      }
    }
  }

  zerar = () => {
    this.setState({
      perguntas: 'Olá meus bruxos e bruxas, Vamos começar ?',
      respostaCerta: '',
      respostaErrada: '',
      pontosCertos: 0,
      pontosErrados: 0,
      styleComecar: Styles.botaoComecar,
      comecar: 'Estou pronto!',
      styleZerar: '',
      zerar: '',
      styleVedareiro: '',
      verdadeiro: '',
      styleFalso: '',
      falso: '',
    })
  }

  render(){ 
    return (
      <View style={Styles.planodefundo}>
          <View style={Styles.containerInfo}> 
            <TouchableOpacity 
              onPress={() => {
                Alert.alert("Olá, eu sou o Harry Potter!", "Agora vamos saber se você pode fazer parte da escola de magia e bruxaria de Hogwarts.\nVamos nessa?\nPara começar aperte o botão 'Estou pronto!'.\nLogo em seguida, se você acertar 10 pontos a vaga da escola de magia e bruxaria de Hogwarts é sua. Se caso errar 10 pontos, você pode tentar entrar para escola no segundo semestre.\nBoa sorte!")}
              }>
              <Image
                style={Styles.info}
                source={require("../img/info.png")}
              />
            </TouchableOpacity>  
          </View>

          <View style={Styles.containerPontos}> 
            <Text style={Styles.fontePontos}>Acertos: {this.state.pontosCertos}</Text>
            <Text style={Styles.fontePontos}>Erros: {this.state.pontosErrados}</Text>
            <View style={Styles.containerBotao}>
              <TouchableOpacity 
                style={this.state.styleComecar}
                onPress={this.comecar}
                >
                  <Text style={Styles.textbotao}>{this.state.comecar}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={this.state.styleZerar}
                onPress={this.zerar}
                >
                  <Text style={Styles.textbotao}>{this.state.zerar}</Text>
              </TouchableOpacity>
              </View>
          </View>

        <View style={Styles.container}>  

          <Text style={Styles.fonteRespostaCerta}>{this.state.respostaCerta}
            <Text style={Styles.fonteRespostaErrada}>{this.state.respostaErrada}</Text>
          </Text>

          <View style={Styles.containerImg}>  
            <Image  
              style={Styles.img}
              source={require("../img/Chapeu.jpg")}
            />
          </View>

          <Text style={Styles.fonte}>{this.state.perguntas}</Text>

          <View style={Styles.containerBotao}>
            <TouchableOpacity 
              style={this.state.styleVedareiro}
              onPress={this.verdade}
              >
                <Text style={Styles.textbotao}>{this.state.verdadeiro}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={this.state.styleFalso}
              onPress={this.falso}
              >
                <Text style={Styles.textbotao}>{this.state.falso}</Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </View>
    )
  }
}