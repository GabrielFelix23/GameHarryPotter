import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerItens:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#744B2B',
    },
    containerTitulo:{
        marginBottom: 20,
        flexDirection: "row"
    },
    titulo:{
        fontSize: 27,
        color: "white"
    },
    containerFilmes:{
        margin: 10,
        marginLeft: 10,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    filmes:{
        width: 250,
        height: 400,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10
    },
    containerInfo:{
        marginLeft:'80%',
        marginRight: 15,
        marginBottom: 15,
        marginTop: 10
    },
    info:{
        width: 50,
        height: 50
    }
})