import React from 'react'
import {Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'
import Styles from '../styles/styles'

export default class PrisioneiroDeAzkaban extends React.Component{
  frases = [
  //Verdadeiras
  "Hermione dá a Harry de presente de aniversário um estojo de manutenção para vassoura",
  "O nome do cachorro que tia Guida leva para a casa dos Dursley é Estripador",
  "Harry se identifica com o nome de outro bruxo para o condutor do Nôitibus, Lalau Shunpike. Que nome foi esse Neville Longbottom",
  "O assunto da primeira aula de Transfiguração do terceiro ano foi Animagos",
  "O bicho-papão de Parvati Patil é Uma múmia",
  //Falsas
  "A pintura que substituiu a Mulher Gorda depois que ela foi atacada por Sirius Black era uma menina de olhos tristes",
  "A passagem secreta que leva Harry até Hogsmeade deixa o garoto no porão",
  "A pessoa que conta à Professora Minerva que Harry ganhou a Firebolt, fazendo-a ser confiscada foi o Draco",
  "A matéria favorita de Hermione é Runas Antigas",
  "A pessoa que acorda aos gritos dizendo ter visto Sirius Black ao lado de sua cama na Torre da Grifinória foi o Snap"
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
    zerar: '',
    imgHarry: require("../img/Harry.png"),
  }

  verdade = () => {
    if(this.state.perguntas == "Hermione dá a Harry de presente de aniversário um estojo de manutenção para vassoura" || this.state.perguntas == "O nome do cachorro que tia Guida leva para a casa dos Dursley é Estripador" || this.state.perguntas == "Harry se identifica com o nome de outro bruxo para o condutor do Nôitibus, Lalau Shunpike. Que nome foi esse Neville Longbottom"|| this.state.perguntas == "O bicho-papão de Parvati Patil é Uma múmia"|| this.state.perguntas == "O assunto da primeira aula de Transfiguração do terceiro ano foi Animagos"){
        const perguntaRandom = Math.floor(Math.random() * this.frases.length)
        this.setState({
          perguntas: this.frases[perguntaRandom],
          respostaCerta: "Resposta Certa. Parabéns!",
          imgHarry: require("../img/dumbledore.png"),
          respostaErrada: '',
          pontosCertos: this.state.pontosCertos + 1
        })
        if(this.state.pontosCertos === 10){
          this.setState({
            perguntas: "Parabéns!! Eu sábia que você iria fazer parte das nossas aventuras.\nAgora a escola de magia e bruxaria de Hogwarts espera por você.\nSeja bem vindo(a)!",
            imgHarry: require("../img/HarryVencedor.png"),
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
        imgHarry: require("../img/Rony.png"),
        respostaCerta: '',
        pontosErrados: this.state.pontosErrados + 1
      })
      if(this.state.pontosErrados === 10){
        this.setState({
          perguntas: "Muito triste!\nDessa vez você não pode entrar para a escola de magia e bruxaria de Hogwarts.\nMas não desista, refaça a teste e venha fazer parte das nossas aventuras. Boa sorte!", 
          imgHarry: require("../img/hagrid.png"),
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
    if(this.state.perguntas == "A pintura que substituiu a Mulher Gorda depois que ela foi atacada por Sirius Black era uma menina de olhos tristes" || this.state.perguntas == "A passagem secreta que leva Harry até Hogsmeade deixa o garoto no porão"|| this.state.perguntas == "A matéria favorita de Hermione é Runas Antigas" || this.state.perguntas == "A pessoa que acorda aos gritos dizendo ter visto Sirius Black ao lado de sua cama na Torre da Grifinória foi o Snap" | this.state.perguntas == "A pessoa que conta à Professora Minerva que Harry ganhou a Firebolt, fazendo-a ser confiscada foi o Draco"){
      let perguntaRandom = Math.floor(Math.random() * this.frases.length)

      this.setState({
        perguntas: this.frases[perguntaRandom],
        respostaCerta: "Resposta Certa. Parabéns!",
        imgHarry: require("../img/dumbledore.png"),
        respostaErrada: '',
        pontosCertos: this.state.pontosCertos + 1
      })
      if(this.state.pontosCertos === 10){
        this.setState({
          perguntas: "Parabéns!! Eu sábia que você iria fazer parte das nossas aventuras.\nAgora a escola de magia e bruxaria de Hogwarts espera por você.\nSeja bem vindo(a)!",
          imgHarry: require("../img/HarryVencedor.png"),
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
        imgHarry: require("../img/Rony.png"),
        respostaCerta: '',
        pontosErrados: this.state.pontosErrados + 1
      })
      if(this.state.pontosErrados === 10){
        this.setState({
          perguntas: "Muito triste!\nDessa vez você não pode entrar para a escola de magia e bruxaria de Hogwarts.\nMas não desista, refaça a teste e venha fazer parte das nossas aventuras. Boa sorte!", 
          imgHarry: require("../img/hagrid.png"),
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
          zerar: "Zerar",
          imgHarry: require("../img/Harry.png"),
        })
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
      imgHarry: require("../img/Harry.png"),
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
              source={this.state.imgHarry}
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