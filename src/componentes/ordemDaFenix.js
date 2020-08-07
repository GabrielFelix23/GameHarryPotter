import React from 'react'
import { StyleSheet,
Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'

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
    styleComecar: styles.botaoComecar,
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
          styleVedareiro: styles.botaoVerdade,
          verdadeiro: "Verdadeiro",
          styleFalso: styles.botaoFalso,
          falso: 'Falso',
          styleComecar: '',
          comecar: '',
          styleZerar: styles.botaoZera,
          zerar: "Zerar"
        })
  }

  verdade = () => {
    if(this.state.perguntas == "No primeiro capítulo do livro 'Harry Potter e a Ordem da Fênix', o primo de Harry, Duda alega para seus pais que irá tomar chá na casa de Polkiss" || this.state.perguntas == "No livro Harry encontra dementadores e é obrigado à usar magia, assim recebe duas cartas do Ministério da Magia. Quem escreveu essas cartas foi a Mafalda Hopkirk" || this.state.perguntas == "Belatriz Lestrange e o marido, aparecem na árvore genealógica da casa dos Black. O nome dele é Rodolfo"|| this.state.perguntas == "A nova capitã do time de quadribol da Grifinória se chama Angelina Johnson"|| this.state.perguntas == "O nome da planta que Neville ganhou de aniversário é Mimbulus mimbletonia"){
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
            styleComecar: styles.botaoComecar,
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
          styleComecar: styles.botaoComecar,
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
          styleComecar: styles.botaoComecar,
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
          styleComecar: styles.botaoComecar,
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
      styleComecar: styles.botaoComecar,
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
      <View style={styles.planodefundo}>
          <View style={styles.containerInfo}> 
            <TouchableOpacity 
              onPress={() => {
                Alert.alert("Olá, eu sou o Harry Potter!", "Agora vamos saber se você pode fazer parte da escola de magia e bruxaria de Hogwarts.\nVamos nessa?\nPara começar aperte o botão 'Estou pronto!'.\nLogo em seguida, se você acertar 10 pontos a vaga da escola de magia e bruxaria de Hogwarts é sua. Se caso errar 10 pontos, você pode tentar entrar para escola no segundo semestre.\nBoa sorte!")}
              }>
              <Image
                style={styles.info}
                source={require("./img/info.png")}
              />
            </TouchableOpacity>  
          </View>

          <View style={styles.containerPontos}> 
            <Text style={styles.fontePontos}>Acertos: {this.state.pontosCertos}</Text>
            <Text style={styles.fontePontos}>Erros: {this.state.pontosErrados}</Text>
            <View style={styles.containerBotao}>
              <TouchableOpacity 
                style={this.state.styleComecar}
                onPress={this.comecar}
                >
                  <Text style={styles.textbotao}>{this.state.comecar}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={this.state.styleZerar}
                onPress={this.zerar}
                >
                  <Text style={styles.textbotao}>{this.state.zerar}</Text>
              </TouchableOpacity>
              </View>
          </View>

        <View style={styles.container}>  

          <Text style={styles.fonteRespostaCerta}>{this.state.respostaCerta}
            <Text style={styles.fonteRespostaErrada}>{this.state.respostaErrada}</Text>
          </Text>

          <View style={styles.containerImg}>  
            <Image  
              style={styles.img}
              source={require("./img/Chapeu.jpg")}
            />
          </View>

          <Text style={styles.fonte}>{this.state.perguntas}</Text>

          <View style={styles.containerBotao}>
            <TouchableOpacity 
              style={this.state.styleVedareiro}
              onPress={this.verdade}
              >
                <Text style={styles.textbotao}>{this.state.verdadeiro}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={this.state.styleFalso}
              onPress={this.falso}
              >
                <Text style={styles.textbotao}>{this.state.falso}</Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </View>
    )
  }
}

export const styles = StyleSheet.create({
  planodefundo:{
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#744B2B'
  },  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInfo:{
    marginLeft:'80%',
    marginRight: 15,
    marginTop: 35,
  },
  containerPontos:{
    marginRight:'50%',
    marginLeft: 25,
    marginTop: -50,
    marginBottom: -30,
  },
  containerImg:{
    marginTop: 5,
    marginBottom: 20
  },
  containerBotao:{
    marginTop: 20,
    flexDirection: "row"
  },
  botaoVerdade:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 20,
    width: 110,
    height: 50,
    margin: 10
  },
  botaoFalso:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    width: 110,
    height: 50,
    margin: 10
  },
  botaoZera:{
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 30,
    marginTop: 0,
    marginBottom: -20,
  },
  botaoComecar:{
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 30,
    marginTop: 0,
    marginRight: 10,
    marginBottom: -20,
  },
  textbotao:{
    fontSize: 20,
    color: 'white'
  },
  img:{
    borderRadius: 100, 
    width: 160, 
    height: 160
  },
  info:{
    width: 50,
    height: 50
  },
  fonte:{
    fontSize: 23,
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
    marginRight: 20,
    marginLeft: 20
  },
  fontePontos:{
    fontSize: 20,
    color: "white",
    textAlign: "left"
  },
  fonteRespostaCerta:{
    fontSize: 25,
    color: "green",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  },
  fonteRespostaErrada:{
    fontSize: 25,
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  }
})
