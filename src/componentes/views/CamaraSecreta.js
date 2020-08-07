import React from 'react'
import {Text, 
View, 
Image, 
TouchableOpacity, 
Alert } from 'react-native'
import Styles from '../styles/styles'

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