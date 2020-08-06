import React from 'react'
import { StyleSheet,
Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'

export default class CamaraSrcreta extends React.Component{
  frases = [
  //Verdadeiras
  "O Sr, Weasley trabalha no Departamento de Execução das Leis da Magia, incluindo a Seção de Controle do Uso Indevido de Magia, o Quartel General dos Aurores e os Serviços Administrativos da Suprema Corte dos Bruxos",
  "O nome da Coruja de Rony, que pertencia a Percy é  Errol",
  "O modelo e cor do carro voador que Harry e Rony usam para ir a Hogwarts é Ford Anglia, Azul",
  "O nome da Fênix de Dumbledore que salva Harry na Câmara Secreta é Fawkes",
  "O nome da Árvore em que Rony e Harry pousam com o carro voador ao chegarem em Hogwarts é Salgueiro Lutador",
  "O nome da planta que grita, que os alunos conhecem na aula de Herbologia é Mandrágora",
  //Falsas
  "O modelo das novas vassouras do time de Quadribol de Slytherin",
  "O nome pelo qual é chamado a pessoa que assim como Harry, consegue se comunicar com as cobras é Poliglota",
  "O nome do primeira pessoa ou animal, a ser petrificado Colin Creevey",
  "Feitiço que Rony usa em Malfoy porém volta contra ele Cara de Cachorro",
  "Os dizeres escritos em sangue na parede, no qual Harry, Rony e Hermione encontram Madame Nora petrificada foi A Câmara Secreta foi fechada",
  "Os nomes dos fundadores das 4 casas de Hogwarts foram Rowena Ravenclaw, Helga Hufflepuff, Minerva McGonagall e Salazar Slytherin"
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
    if(this.state.perguntas == "O Sr, Weasley trabalha no Departamento de Execução das Leis da Magia, incluindo a Seção de Controle do Uso Indevido de Magia, o Quartel General dos Aurores e os Serviços Administrativos da Suprema Corte dos Bruxos" || this.state.perguntas == "O nome da Coruja de Rony, que pertencia a Percy é  Errol" || this.state.perguntas == "O modelo e cor do carro voador que Harry e Rony usam para ir a Hogwarts é Ford Anglia, Azul"|| this.state.perguntas == "O nome da Árvore em que Rony e Harry pousam com o carro voador ao chegarem em Hogwarts é Salgueiro Lutador"|| this.state.perguntas == "O nome da planta que grita, que os alunos conhecem na aula de Herbologia é Mandrágora" || this.state.perguntas == "O nome da Fênix de Dumbledore que salva Harry na Câmara Secreta é Fawkes"){
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
    if(this.state.perguntas == "O modelo das novas vassouras do time de Quadribol de Slytherin" || this.state.perguntas == "O nome pelo qual é chamado a pessoa que assim como Harry, consegue se comunicar com as cobras é Poliglota"|| this.state.perguntas == "O nome do primeira pessoa ou animal, a ser petrificado Colin Creevey"|| this.state.perguntas == "Feitiço que Rony usa em Malfoy porém volta contra ele Cara de Cachorro"|| this.state.perguntas == "Os dizeres escritos em sangue na parede, no qual Harry, Rony e Hermione encontram Madame Nora petrificada foi A Câmara Secreta foi fechada" || this.state.perguntas == "Os nomes dos fundadores das 4 casas de Hogwarts foram Rowena Ravenclaw, Helga Hufflepuff, Minerva McGonagall e Salazar Slytherin"){
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
