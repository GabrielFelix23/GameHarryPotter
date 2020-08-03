import React from 'react'
import { StyleSheet,
Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'

export default class PedraFilosofal extends React.Component{
  frases = [
  //Verdadeiras
  "A pena de fênix foi usada para fazer o núcleo da varinha de Lorde Voldemort?",
  "O nome do professor de Feitiços é Filio Flitwick?",
  "Hagrid coloca um rabo de porco em Duda quando ele come o bolo de Harry?",
  "As casas se Hogwarts são: Lufa Lufa, Sonserina, Grifinoria E Corvinal?",
  "Hagrid leva um bolo de aniversário a Harry na noite em que ele foi até o Casebre-Sobre-o-Rochedo?",
  "Foi no terceiro ano que Hagrid estava cursando, quando ele foi expulso de Hogwarts?",
  //Falsas
  "Harry Potter faz aniversário dia 31/05?",
  "Rony tem três irmãos?",
  "São os alunos que se classificados para as casas de Hogwarts?",
  "No capítulo dez, a professora Minerva diz que Harry e Rony tiveram muita sorte por quê eles obtiveram muitos pontos para a Grifinória?",
  "A descrição da velha varinha de Rúbeo Hagrid é: Cedro e pena de fênix,trinta centímetros e rígida?"
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
    if(this.state.perguntas == "A pena de fênix foi usada para fazer o núcleo da varinha de Lorde Voldemort?" || this.state.perguntas == "O nome do professor de Feitiços é Filio Flitwick?" || this.state.perguntas == "Hagrid coloca um rabo de porco em Duda quando ele come o bolo de Harry?"|| this.state.perguntas == "As casas se Hogwarts são Lufa Lufa, Sonserina, Grifinoria E Corvinal?"|| this.state.perguntas == "Hagrid leva um bolo de aniversário a Harry na noite em que ele foi até o Casebre-Sobre-o-Rochedo?"|| this.state.perguntas == "Foi no terceiro ano que Hagrid estava cursando, quando ele foi expulso de Hogwarts?"){
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
    }
  }

  falso = () => {
    if(this.state.perguntas == "Harry Potter faz aniversário dia 31/05?" || this.state.perguntas == "Rony tem três irmãos?"|| this.state.perguntas == "São os alunos que se classificados para as casas de Hogwarts?"|| this.state.perguntas == "No capítulo dez, a professora Minerva diz que Harry e Rony tiveram muita sorte por quê eles obtiveram muitos pontos para a Grifinória?"|| this.state.perguntas == "A descrição da velha varinha de Rúbeo Hagrid é: Cedro e pena de fênix,trinta centímetros e rígida?"){
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
                Alert.alert("Olá, eu sou o Harry Potter!", "Agora vamos saber se você pode fazer parte da escola de magia e bruxaria de Hogwarts.\nVamos nessa ?\nPara começar aperte o botão 'Estou pronto!'.\nLogo em seguida, se você acertar 10 pontos a vaga da escola de magia e bruxaria de Hogwarts é sua\nBoa sorte!")}
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
