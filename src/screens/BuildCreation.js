import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../components/Header'

export default class BuildCreation extends Component {
    constructor(props) {
        super(props);
      }
      state = { 
        isVisibleJaune: false,
        isVisibleRouge: false,
        isVisibleBleu: false,
        isVisibleVert: false,
        isVisibleCyan: false,
        test: 'Rune Fondamental',
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
        rp1: 'Rune 1 ',
        rp2: 'Rune 2',
        rp3: 'Rune 3',
        rp4: 'Rune 4 ',
        rs1: '',
        rs2: '',
        rt1: '',
        rt2: '',
        rt3: '',
        sum1: '',
        sum2: '',
      };

      _whoIsVisible(Test){
          if(Test === 'Jaune'){
            this.setState({isVisibleJaune: true})
            this.setState({isVisibleRouge: false})
            this.setState({isVisibleBleu: false})
            this.setState({isVisibleVert: false})
            this.setState({isVisibleCyan: false})
        }
          if(Test === 'Rouge'){
            this.setState({isVisibleJaune: false})
            this.setState({isVisibleRouge: true})
            this.setState({isVisibleBleu: false})
            this.setState({isVisibleVert: false})
            this.setState({isVisibleCyan: false})

        }
          if(Test === 'Bleu'){
            this.setState({isVisibleJaune: false})
            this.setState({isVisibleRouge: false})
            this.setState({isVisibleBleu: true})
            this.setState({isVisibleVert: false})
            this.setState({isVisibleCyan: false})

        }
          if(Test === 'Vert'){
            this.setState({isVisibleJaune: false})
            this.setState({isVisibleRouge: false})
            this.setState({isVisibleBleu: false})
            this.setState({isVisibleVert: true})
            this.setState({isVisibleCyan: false})

        }
          if(Test === 'Cyan'){
            this.setState({isVisibleJaune: false})
            this.setState({isVisibleRouge: false})
            this.setState({isVisibleBleu: false})
            this.setState({isVisibleVert: false})
            this.setState({isVisibleCyan: true})
        }
      }

      _submit(value){
        this.setState({test : value})
          console.log(this.state.test)
      }
     
    render() {
        return (
            <ScrollView>
                <Header />
                <Picker
                    style={{ height: 50, width: 200, }}
                    onValueChange={(itemValue) =>  this._whoIsVisible(itemValue)}
                    >
                    <Picker.Item label="Arbre Principal" value="" />
                    <Picker.Item label="Jaune" value="Jaune" />
                    <Picker.Item label="Rouge" value="Rouge" />
                    <Picker.Item label="Bleu" value="Bleu" />
                    <Picker.Item label="Vert" value="Vert" />
                    <Picker.Item label="Cyan" value="Cyan" />
                </Picker>  

                {this.state.isVisibleJaune ? 
                    <View>
                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                            >
                            <Picker.Item label={this.state.rp1} value="" />
                            <Picker.Item label="Attaque Soutenue" value="AttaqueSoutenue" />
                            <Picker.Item label="Tempo mortel" value="TempoMortel" />
                            <Picker.Item label="Jeu de jambe" value="JeuDeJambe" />
                            <Picker.Item label="Conquerant" value="Conquerant" />
                        </Picker> 

                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                            >
                            <Picker.Item label={this.state.rp2} value="" />
                            <Picker.Item label="Surcharge de PV" value="SurchargedePV" />
                            <Picker.Item label="Triomphe" value="Triomphe" />
                            <Picker.Item label="Présence d'esprit" value="PrésenceEsprit" />
                        </Picker>

                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                            >
                            <Picker.Item label={this.state.rp3} value="" />
                            <Picker.Item label="Alacrité" value="Alacrité" />
                            <Picker.Item label="Tenacité" value="Tenacité" />
                            <Picker.Item label="Soif de sang" value="SoifDeSang" />
                        </Picker>

                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                            >
                            <Picker.Item label={this.state.rp4} value="" />
                            <Picker.Item label="Coup de Grace" value="CoupDeGrace" />
                            <Picker.Item label="Abattage" value="Abattage" />
                            <Picker.Item label="Barroud d'Honneur" value="BarroudHonneur" />
                        </Picker>
                    </View>
                : null }














                {this.state.isVisibleRouge ? <ArbreRouge /> : null }
                <Text>{this.state.test}</Text>
                <TouchableOpacity
                onPress={() => this._submit()}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    iconText: {
        alignItems: 'center',
        paddingTop:'15%'
    }, 

})
