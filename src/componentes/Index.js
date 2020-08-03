import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'

export default function Index({navigation}){
    return(
        <View style={styles.containerItens}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Escolha o seu filme favorito:</Text>
            </View>

            <View style={styles.containerFilmes}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    horizontal={true}>

                    <TouchableOpacity onPress={() => navigation.natigate("Pedra Filosofal")}>
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
        marginBottom: 30
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
    }
})