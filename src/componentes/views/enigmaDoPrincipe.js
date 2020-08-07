import React from 'react'
import {Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'
import Styles from '../styles/styles'


export default class EnigmaDoPrincipe extends React.Component{
  frases = [
  //Verdadeiras
  "O nome do novo professor de Defesa Contra as Artes das Trevas é Severo Snape",
  "O objeto que Draco Malfoy estava mexendo na Borgin e Burkes era no Armário Sumidouro",
  "O nome da poção que Harry ganha por fazer a poção do morto-vivo é Felix Felicis",
  "As Horcrux que Dumbledore destruíu foi o Anel de Servolo Gaunt",
  "As seres que estavam em volta da caverna onde a Horcrux estava era Inferi",
  //Falsas
  "Quem trouxe comensais da morte para Hogwarts foi a Hemione",
  "Quem matou Dumbledore foi o Rony",
  "O Príncipe Mestiço é o professor Snape",
  "No fim, Harry descobre que o medalhão é falso. E quem pegou o verdadeiro foi o Percy Weasley",
  "O feitiço usado por Harry contra Draco Malfoy foi o wingardium leviosa"
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
    if(this.state.perguntas == "O nome do novo professor de Defesa Contra as Artes das Trevas é Severo Snape" || this.state.perguntas == "O objeto que Draco Malfoy estava mexendo na Borgin e Burkes era no Armário Sumidouro" || this.state.perguntas == "O nome da poção que Harry ganha por fazer a poção do morto-vivo é Felix Felicis"|| this.state.perguntas == "As seres que estavam em volta da caverna onde a Horcrux estava era Inferi"|| this.state.perguntas == "As Horcrux que Dumbledore destruíu foi o Anel de Servolo Gaunt"){
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
    if(this.state.perguntas == "Quem trouxe comensais da morte para Hogwarts foi a Hemione" || this.state.perguntas == "Quem matou Dumbledore foi o Rony"|| this.state.perguntas == "O Príncipe Mestiço é o professor Snape"|| this.state.perguntas == "No fim, Harry descobre que o medalhão é falso. E quem pegou o verdadeiro foi o Percy Weasley"|| this.state.perguntas == "O feitiço usado por Harry contra Draco Malfoy foi o wingardium leviosa"){
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