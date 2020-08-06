import React from 'react'
import { StyleSheet,
Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'

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
    if(this.state.perguntas == "Hermione dá a Harry de presente de aniversário um estojo de manutenção para vassoura" || this.state.perguntas == "O nome do cachorro que tia Guida leva para a casa dos Dursley é Estripador" || this.state.perguntas == "Harry se identifica com o nome de outro bruxo para o condutor do Nôitibus, Lalau Shunpike. Que nome foi esse Neville Longbottom"|| this.state.perguntas == "O bicho-papão de Parvati Patil é Uma múmia"|| this.state.perguntas == "O assunto da primeira aula de Transfiguração do terceiro ano foi Animagos"){
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
    if(this.state.perguntas == "A pintura que substituiu a Mulher Gorda depois que ela foi atacada por Sirius Black era uma menina de olhos tristes" || this.state.perguntas == "A passagem secreta que leva Harry até Hogsmeade deixa o garoto no porão"|| this.state.perguntas == "A matéria favorita de Hermione é Runas Antigas" || this.state.perguntas == "A pessoa que acorda aos gritos dizendo ter visto Sirius Black ao lado de sua cama na Torre da Grifinória foi o Snap" | this.state.perguntas == "A pessoa que conta à Professora Minerva que Harry ganhou a Firebolt, fazendo-a ser confiscada foi o Draco"){
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
