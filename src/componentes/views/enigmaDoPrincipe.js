import React from 'react'
import { StyleSheet,
Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'

export default class EnigmaDoPrincipe extends React.Component{
  frases = [
  //Verdadeiras
  "O nome do novo professor de Defesa Contra as Artes das Trevas é Severo Snape",
  "O objeto que Draco Malfoy estava mexendo na Borgin e Burkes era no Armário Sumidouro",
  "O nome da poção que Harry ganha por fazer a poção do morto-vivo é Felix Felicis",
  "As Horcrux que Dumbledore destruíu foi o Anel de Servolo Gaunt",
  "As seres que estavam em volta da caverna onde a Horcrux estava era Inferi",
  //Falsas
  "Quem trouxe comensais da morte para Hogwarts foi a Emione",
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
    if(this.state.perguntas == "Quem trouxe comensais da morte para Hogwarts foi a Emione" || this.state.perguntas == "Quem matou Dumbledore foi o Rony"|| this.state.perguntas == "O Príncipe Mestiço é o professor Snape"|| this.state.perguntas == "No fim, Harry descobre que o medalhão é falso. E quem pegou o verdadeiro foi o Percy Weasley"|| this.state.perguntas == "O feitiço usado por Harry contra Draco Malfoy foi o wingardium leviosa"){
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
                source={require("../img/info.png")}
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
              source={require("../img/Chapeu.jpg")}
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
