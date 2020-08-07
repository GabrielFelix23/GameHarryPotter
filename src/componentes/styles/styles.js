import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
      width: 180, 
      height: 189
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
  