import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'

export default function Index({navigation}){
    return(
        <View style={styles.containerItens}>
            <View style={styles.containerInfo}> 
                <TouchableOpacity onPress={() => Alert.alert("Filme favorito","Esse jogo é para provar que você é um bruxo ou uma bruxa de verdade, para entrar na escola de magia e bruxaria de Hogwarts.\nPrimeiro, escolha qual é o seu filme favorito.\nLogo após, vamos ver o quão você sabe sobre ele...")}>  
                    <Image  
                        style={styles.info}
                        source={require("./img/info.png")}
                    />
                </TouchableOpacity> 
            </View>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Escolha o seu filme favorito:</Text>
            </View>

            <View style={styles.containerFilmes}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedra Filosofal')}>
                        <Image
                            style={styles.filmes}
                            source={require("./img/pedraFilosofal.jpg")}
                        />  
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/camaraSecreta.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/prisioneiroDeAzkaban.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/caliceDeFogo.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/ordemDaFenix.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/reliquiaDaMorteP1.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            style={styles.filmes}
                            source={require("./img/reliquiaDaMorteP2.jpg")}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
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