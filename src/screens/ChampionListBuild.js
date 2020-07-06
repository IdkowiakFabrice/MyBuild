import React, { Component } from 'react'
import { Text, View, ScrollView, Image, AsyncStorage, StyleSheet } from 'react-native'
import { CHAMPIONBYID } from '../utils/ChampionObject'
import Header from '../components/Header'
import * as axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class ChampionListBuild extends Component {
    constructor(props){
        super(props)
    }

    state = {
        token: '',
        idUser: '',
        idChamp:'0',
        imageChamp: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        rp1: '',
        rp2: '',
        rp3: '',
        rp4: '',
        rs1: '',
        rs2: '',
        rt1: '',
        rt2: '',
        rt3: '',
        sum1: '',
        sum2: '',
        builds: ''
      };

    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const idUser = await AsyncStorage.getItem('@idUser');
            const idChamp = await AsyncStorage.getItem('@idChamp');
            const imageChamp = await AsyncStorage.getItem('@imageChamp');
            if (idUser !== null) {
              this.setState({ idUser })
            }
            if (token !== null) {
                console.log(token)
                this.setState({ token })
            }
            if (idChamp !== null) {
                this.setState({ idChamp })
            }
            if (imageChamp !== null) {
                this.setState({ imageChamp })
            }
            this._jsonListBuild()
        } catch (error) {
            console.error(error);
        }
      };

      _jsonListBuild = async () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
          }
        };
        axios.get('https://mybuild-api.herokuapp.com/api/users/' + this.state.idUser + '/buildByChamp/'+ this.state.idChamp, axiosConfig)
        .then((response) => {
            let item1 = 'https://github.com/YanisRili/MyBuild_Items/blob/master/items/01.PNG'
            this.setState({builds : response.data})
            console.log(this.state.builds)
        })
        .catch((error) => {
          console.log(error)
        });
      }
      
      _navigate(){
          this._StoreData(this.state.token, this.state.idUser, this.state.idChamp)
          this.props.navigation.navigate('BuildCreaction')
      }

      _StoreData = (token, idUser, idChamp) =>{
        try {
            AsyncStorage.multiSet([['@token', token], ['@idUser', idUser], ['@idChamp', idChamp]])
          } catch (error) {
           console.error(error);
          }
      }

    componentDidMount(){
        this._retrieveData()
    }
    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                    <View style={styles.iconChamp}>
                    <Image
                    style={{flexDirection: 'row', width:100, height:100}}
                    source={{uri : this.state.imageChamp}}
                    />
                    </View>
                    <Text style={styles.iconText}>{CHAMPIONBYID[this.state.idChamp]['name']}</Text>
                    <Image
                    style={{flexDirection: 'row', width:100, height:100}}
                        source={{uri : 'https://raw.githubusercontent.com/YanisRili/MyBuild_Summs/master/summs/01.PNG'}}
                    />
                    <TouchableOpacity
                        onPress={() => this._navigate()}
                        style={styles.buttonContainer}
                        >
                            <Text>+ Ajouter un build</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconChamp: {
        alignItems: 'center',
        paddingTop:'15%'
    },
    iconText: {
        fontSize: 30, 
        paddingTop:'2%', 
        color:'#bf8d3a',
        alignSelf:'center',
    },
    buttonContainer: {
        backgroundColor: 'green',
        borderRadius: 5,

    }

})