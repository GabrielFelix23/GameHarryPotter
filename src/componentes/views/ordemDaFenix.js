import React from 'react'
import {Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'
import Styles from '../styles/styles'

export default class OrdemDaFenix extends React.Component{
  frases = [
  //Verdadeiras
  "No primeiro capítulo do livro 'Harry Potter e a Ordem da Fênix', o primo de Harry, Duda alega para seus pais que irá tomar chá na casa de Polkiss",
  "No livro Harry encontra dementadores e é obrigado à usar magia, assim recebe duas cartas do Ministério da Magia. Quem escreveu essas cartas foi a Mafalda Hopkirk",
  "Belatriz Lestrange e o marido, aparecem na árvore genealógica da casa dos Black. O nome dele é Rodolfo",
  "O nome da planta que Neville ganhou de aniversário é Mimbulus mimbletonia",
  "A nova capitã do time de quadribol da Grifinória se chama Angelina Johnson",
  //Falsas
  "O nome do lugar onde os estudantes da futura Armada de Dumbledore se encontram pela primeira vez foi no Três Vassouras",
  "O primeiro encontro da futura Armada de Dumbledore na escola, foi em uma sala que se encontrava em frente à tapeçaria do Caldeirão Furado",
  "No livro, Hagrid foi (a pedido de Dumbledore) atrás dos gigantes. O nome do gigante com quem ele falou era Gurgue",
  "O nome do hospital em que o senhor Weasley foi internado, após ser atacado por uma cobra gigante (Nagini) era Hospital St. Mungus para Acidentes e Doenças Trágicas",
  "O nome do garoto que Gina diz estar saindo no final do livro era o Harry Potter"
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
    if(this.state.perguntas == "No primeiro capítulo do livro 'Harry Potter e a Ordem da Fênix', o primo de Harry, Duda alega para seus pais que irá tomar chá na casa de Polkiss" || this.state.perguntas == "No livro Harry encontra dementadores e é obrigado à usar magia, assim recebe duas cartas do Ministério da Magia. Quem escreveu essas cartas foi a Mafalda Hopkirk" || this.state.perguntas == "Belatriz Lestrange e o marido, aparecem na árvore genealógica da casa dos Black. O nome dele é Rodolfo"|| this.state.perguntas == "A nova capitã do time de quadribol da Grifinória se chama Angelina Johnson"|| this.state.perguntas == "O nome da planta que Neville ganhou de aniversário é Mimbulus mimbletonia"){
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
    if(this.state.perguntas == "O nome do lugar onde os estudantes da futura Armada de Dumbledore se encontram pela primeira vez foi no Três Vassouras" || this.state.perguntas == "O primeiro encontro da futura Armada de Dumbledore na escola, foi em uma sala que se encontrava em frente à tapeçaria do Caldeirão Furado"|| this.state.perguntas == "No livro, Hagrid foi (a pedido de Dumbledore) atrás dos gigantes. O nome do gigante com quem ele falou era Gurgue"|| this.state.perguntas == "O nome do hospital em que o senhor Weasley foi internado, após ser atacado por uma cobra gigante (Nagini) era Hospital St. Mungus para Acidentes e Doenças Trágicas"|| this.state.perguntas == "O nome do garoto que Gina diz estar saindo no final do livro era o Harry Potter"){
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