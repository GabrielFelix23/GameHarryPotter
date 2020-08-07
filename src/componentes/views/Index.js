import React from 'react'
import {View, 
Text, 
Image, 
ScrollView, 
TouchableOpacity, 
Alert} from 'react-native'
import Styles from '../styles/stylesIndex'

export default function Index({navigation}){
    return(
        <View style={Styles.containerItens}>
            <View style={Styles.containerInfo}> 
                <TouchableOpacity onPress={() => Alert.alert("GameHarryPotter","Esse jogo é para provar que você é um bruxo ou uma bruxa de verdade, para entrar na escola de magia e bruxaria de Hogwarts.\nPrimeiro, escolha qual é o seu filme favorito.\nLogo após, vamos ver o quão você sabe sobre ele...")}>  
                    <Image  
                        style={Styles.info}
                        source={require("../img/info.png")}
                    />
                </TouchableOpacity> 
            </View>
            <View style={Styles.containerTitulo}>
                <Text style={Styles.titulo}>Escolha o seu filme favorito:</Text>
            </View>

            <View style={Styles.containerFilmes}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>

                    <TouchableOpacity onPress={() => navigation.navigate('Pedra Filosofal')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/pedraFilosofal.jpg")}
                        />  
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Câmara Secreta')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/camaraSecreta.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Prisioneiro de Azkaban')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/prisioneiroDeAzkaban.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Calice de Fogo')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/caliceDeFogo.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Ordem da Fenix')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/ordemDaFenix.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Enigma do Principe')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/enigmaDoPríncipe.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Reliquias da Morte')}>
                        <Image
                            style={Styles.filmes}
                            source={require("../img/reliquiaDaMorteP1.jpg")}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>  
    )
}