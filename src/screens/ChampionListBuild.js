import React, { Component } from 'react'
import { Text, View, ScrollView, Image, AsyncStorage, StyleSheet, ImageBackground } from 'react-native'
import { CHAMPIONBYID } from '../utils/ChampionObject'
import Header from '../components/HeaderL'
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
            this.setState({builds : response.data})
            //console.log(this.state.builds[2].sum1)
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

      renderBuild(){
        return this.state.builds.map(build => {
            return(
            <View style = {styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item1}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item2}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item3}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item4}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item5}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.item6}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2, marginLeft: 15}}
                      source={{uri : build.sum1}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30, margin : 2}}
                      source={{uri : build.sum2}}
                  />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rp1}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rp2}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rp3}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rp4}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rs1}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rs2}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rt1}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rt2}}
                  />
                  <Image
                      style={{flexDirection: 'row', width:30, height:30}}
                      source={{uri : build.rt3}}
                  />
                </View>
              </View>
            )
        })
    }  

    componentDidMount(){
        this._retrieveData()
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%',flex:1, flexDirection:'row'}}>
            <View  style={{width: '100%'}}>               
             <Header />
                <ScrollView>
                    <View style={styles.iconChamp}>
                    <Image
                    style={{flexDirection: 'row', width:100, height:100}}
                    source={{uri : this.state.imageChamp}}
                    />
                    <Text style={styles.iconText}>{CHAMPIONBYID[this.state.idChamp]['name']}</Text>

                    </View>
                    {this.state.builds !== '' ?this.renderBuild() : null}
                    <TouchableOpacity
                        style={styles.buttonReturnContainer}
                        onPress={() => this.props.navigation.navigate('BuildCreaction')}>
                        <Text style={styles.buttonText}>Ajouter un build</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            </ImageBackground>
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

    },
    buttonReturnContainer :{
        backgroundColor: '#010a13',
        color:'#bf8d3a',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        borderWidth:1,
        borderColor: '#bf8d3a',
        alignContent: 'center',
        alignSelf : 'center',
        width : "40%"
    },
    buttonText: {
        color: '#bf8d3a',
        textAlign : 'center'

    },
    container :{
        backgroundColor: '#010a13',
        borderRadius: 5,
        padding : 10,
        marginTop :20,
        justifyContent: 'center',
        borderWidth:1,
        borderColor: '#bf8d3a',
        marginLeft : 20,
        marginRight : 20

    },
})