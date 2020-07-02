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




                {this.state.isVisibleRouge ? 
                    <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Electrocution" value="Electrocution" />
                        <Picker.Item label="Prédateur" value="Prédateur" />
                        <Picker.Item label="Moisson Noire" value="MoissonNoire" />
                        <Picker.Item label="Déluge de lames" value="DélugeDeLames" />
                    </Picker> 

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Coup Bas" value="CoupBas" />
                        <Picker.Item label="Goût du Sang" value="GoûtDuSang" />
                        <Picker.Item label="Ruée Offensive" value="RuéeOffensive" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Balise Zombie" value="BaliseZombie" />
                        <Picker.Item label="Poro Fantôme" value="PoroFantôme" />
                        <Picker.Item label="Arracheur d'Oeil" value="ArracheurDOeil" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                        >
                        <Picker.Item label={this.state.rp4} value="" />
                        <Picker.Item label="Chasseur Vorace" value="ChasseurVorace" />
                        <Picker.Item label="Chasseur Ingénieux" value="ChasseurIngénieux" />
                        <Picker.Item label="Chasseur Acharné" value="ChasseurAcharné" />
                        <Picker.Item label="Chasseur Ultime" value="ChasseurUltime" />
                    </Picker>
                </View>
                : null }
                
                {this.state.isVisibleBleu ? 
                    <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Invocation d'Aery" value="InvocationDAery" />
                        <Picker.Item label="Comète Arcanique" value="ComèteArcanique" />
                        <Picker.Item label="Rush Phasique" value="RushPhasique" />                        
                    </Picker> 

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Orbe Anti-Magie" value="OrbeAntiMagie" />   
                        <Picker.Item label="Ruban de Mana" value="RubanDeMana" />
                        <Picker.Item label="Manteau Nuageux" value="ManteauNuageux" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Transcendance" value="Transcendance" />
                        <Picker.Item label="Célérité" value="Célérité" />
                        <Picker.Item label="Concentration Absolue" value="ConcentrationAbsolue" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                        >
                        <Picker.Item label={this.state.rp4} value="" />
                        <Picker.Item label="Brûlure" value="Brûlure" />
                        <Picker.Item label="Marche sur l'Eau" value="MarcheSurLEau" />
                        <Picker.Item label="Tempête Menaçante" value="TempêteMenaçante" />
                    </Picker>
                </View>
                : null }


                {this.state.isVisibleVert ? 
                    <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Poigne de l'Immortel" value="PoigneDeLImmortel" />
                        <Picker.Item label="Après-Coup" value="AprèsCoup" />
                        <Picker.Item label="Gardien" value="Gardien" />                        
                    </Picker> 

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Démolition" value="Démolition" />   
                        <Picker.Item label="Fontaine de Vie" value="FontaineDeVie" />
                        <Picker.Item label="Coup de Bouclier" value="CoupDeBouclier" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Conditionnement" value="Conditionnement" />
                        <Picker.Item label="Second Souffle" value="Second Souffle" />
                        <Picker.Item label="Plaque D'Os" value="PlaqueDOs" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                        >
                        <Picker.Item label={this.state.rp4} value="" />
                        <Picker.Item label="Surcroissance" value="Surcroissance" />
                        <Picker.Item label="Revitalisation" value="Revitalisation" />
                        <Picker.Item label="Inébranlable" value="Inébranlable" />
                    </Picker>
                </View>
                : null }



                {this.state.isVisibleCyan ? 
                    <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Optimisation Glaciale" value="OptimisationGlaciale" />
                        <Picker.Item label="Grimoire Déchaîné" value="GrimoireDéchaîné" />
                        <Picker.Item label="Prototype Omnipierre" value="PrototypeOmnipierre" />                        
                    </Picker> 

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Canaliportation Hextech" value="CanaliportaionHextech" />   
                        <Picker.Item label="Chaussures Magiques" value="ChaussuresMagiques" />
                        <Picker.Item label="Timing Parfait" value="TimingParfait" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Marché du Futur" value="MarchéDuFutur" />
                        <Picker.Item label="Désintégrateur de Sbires" value="DésintégrateurDeSbires" />
                        <Picker.Item label="Livraison de Biscuits" value="LivraisonDeBiscuits" />
                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                        >
                        <Picker.Item label={this.state.rp4} value="" />
                        <Picker.Item label="Savoir Cosmique" value="SavoirCosmique" />
                        <Picker.Item label="Vitesse d'Approche" value="VitesseDApproche" />
                        <Picker.Item label="Philtre de Chronodistorsion" value="PhiltreDeChronodistorsion" />
                    </Picker>
                </View>
                : null }
                
                
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
