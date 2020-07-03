import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker, ScrollView, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as axios from 'axios'

import Header from '../components/Header'
import {RUNEBYID} from '../utils/Runes'

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
        isVisibleJauneSec: false,
        isVisibleRougeSec: false,
        isVisibleBleuSec: false,
        isVisibleVertSec: false,
        isVisibleCyanSec: false,
        test: 'Rune Fondamental',
        token: '',
        idUser: '',
        idChamp:'',
        imageChamp: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        rp1: 'Rune P1 ',
        rp2: 'Rune P2',
        rp3: 'Rune P3',
        rp4: 'Rune P4 ',
        rs1: 'Rune S1',
        rs2: 'Rune S2',
        rt1: 'Rune T1',
        rt2: 'Rune T2',
        rt3: 'Rune T3',
        sum1: '',
        sum2: '',
      };

      _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const idUser = await AsyncStorage.getItem('@idUser');
            const idChamp = await AsyncStorage.getItem('@idChamp');
            if (idUser !== null) {
              this.setState({ idUser })
            }
            if (token !== null) {
                this.setState({ token })
            }
            if (idChamp !== null) {
                this.setState({ idChamp })
            }
        } catch (error) {
            console.error(error);
        }
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

      _whoIsVisible2(Test){
        if(Test === 'Jaune'){
          this.setState({isVisibleJauneSec: true})
          this.setState({isVisibleRougeSec: false})
          this.setState({isVisibleBleuSec: false})
          this.setState({isVisibleVertSec: false})
          this.setState({isVisibleCyanSec: false})
      }
        if(Test === 'Rouge'){
          this.setState({isVisibleJauneSec: false})
          this.setState({isVisibleRougeSec: true})
          this.setState({isVisibleBleuSec: false})
          this.setState({isVisibleVertSec: false})
          this.setState({isVisibleCyanSec: false})

      }
        if(Test === 'Bleu'){
          this.setState({isVisibleJauneSec: false})
          this.setState({isVisibleRougeSec: false})
          this.setState({isVisibleBleuSec: true})
          this.setState({isVisibleVertSec: false})
          this.setState({isVisibleCyanSec: false})

      }
        if(Test === 'Vert'){
          this.setState({isVisibleJauneSec: false})
          this.setState({isVisibleRougeSec: false})
          this.setState({isVisibleBleuSec: false})
          this.setState({isVisibleVertSec: true})
          this.setState({isVisibleCyanSec: false})

      }
        if(Test === 'Cyan'){
          this.setState({isVisibleJauneSec: false})
          this.setState({isVisibleRougeSec: false})
          this.setState({isVisibleBleuSec: false})
          this.setState({isVisibleVertSec: false})
          this.setState({isVisibleCyanSec: true})
      }
    }

      _submit(){
          let rp1 = this.state.rp1
          let rp2 = this.state.rp2
          let rp3 = this.state.rp3
          let rp4 = this.state.rp4
          let rs1 = this.state.rs1
          let rs2 = this.state.rs2
          let rt1 = this.state.rt1
          let rt2 = this.state.rt2
          let rt3 = this.state.rt3
        RUNEBYID.map(function(rune){
            if(rp1 === rune.id){
                rp1 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp2 === rune.id){
                rp2 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp3 === rune.id){
                rp3 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp4 === rune.id){
                rp4 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rs1 === rune.id){
                rs1 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rs2 === rune.id){
                rs2 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt1 === rune.id){
                rt1 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt2 === rune.id){
                rt2 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt3 === rune.id){
                rt3 = 'https://github.com/YanisRili/MyBuild_Runes/blob/master/runes_all/' + rune.name + '.PNG'
            }
        })

        const newBuild = {
            'id_champ' : this.state.idChamp,
            "item1":'a',
            "item2":'a',
            "item3":'a',
            "item4":'a',
            "item5":'a',
            "item6":'a',
            "sum1":'a',
            "sum2":'a',
            "rp1": rp1,
            "rp2":rp2,
            "rp3":rp3,
            "rp4":rp4,
            "rs1":rs1,
            "rs2":rs2,
            "rt1":rt1,
            "rt2":rt2,
            "rt3":rt3,
            "commentaire": 'a',
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            }
        };
        axios.post(' https://mybuild-api.herokuapp.com/api/users/' + this.state.idUser + '/build', newBuild, axiosConfig)
        .then((response) => {
            console.log('OUI')
        })
        .catch((error) => {
          console.log(error)
        });
      }
     
      componentDidMount(){
          this._retrieveData()
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
                        <Picker.Item label="Marche sur l'Eau" value="MarcheSurLeau" />
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
                        <Picker.Item label="Poigne de l'Immortel" value="PoigneDeLimmortel" />
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
                        <Picker.Item label="Second Souffle" value="SecondSouffle" />
                        <Picker.Item label="Plaque D'Os" value="PlaqueDos" />
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
                        <Picker.Item label="Vitesse d'Approche" value="VitesseDapproche" />
                        <Picker.Item label="Philtre de Chronodistorsion" value="PhiltreDeChronodistorsion" />
                    </Picker>
                </View>
                : null }

                <Picker
                    style={{ height: 50, width: 200, }}
                    onValueChange={(itemValue) =>  this._whoIsVisible2(itemValue)}
                    >
                    <Picker.Item label="Arbre Secondaire" value="" />
                    <Picker.Item label="Jaune" value="Jaune" />
                    <Picker.Item label="Rouge" value="Rouge" />
                    <Picker.Item label="Bleu" value="Bleu" />
                    <Picker.Item label="Vert" value="Vert" />
                    <Picker.Item label="Cyan" value="Cyan" />
                </Picker>

                {this.state.isVisibleJauneSec && !this.state.isVisibleJaune ? 
                <View>
                    <Picker
                        style={{ height: 50, width: 200, }}
                        onValueChange={(itemValue) => this.setState({rs1:itemValue})}
                        >
                        <Picker.Item label={this.state.rs1} value="" />
                        <Picker.Item label="Surcharge de PV" value="SurchargedePV" />
                        <Picker.Item label="Triomphe" value="Triomphe" />
                        <Picker.Item label="Présence d'esprit" value="PrésenceEsprit" />
                        <Picker.Item label="Alacrité" value="Alacrité" />
                        <Picker.Item label="Tenacité" value="Tenacité" />
                        <Picker.Item label="Soif de sang" value="SoifDeSang" /> 
                        <Picker.Item label="Coup de Grace" value="CoupDeGrace" />
                        <Picker.Item label="Abattage" value="Abattage" />
                        <Picker.Item label="Barroud d'Honneur" value="BarroudHonneur" />
                    </Picker>
                    <Picker
                        style={{ height: 50, width: 200, }}
                        onValueChange={(itemValue) => this.setState({rs2:itemValue})}
                        >
                        <Picker.Item label={this.state.rs2} value="" />
                        <Picker.Item label="Surcharge de PV" value="SurchargedePV" />
                        <Picker.Item label="Triomphe" value="Triomphe" />
                        <Picker.Item label="Présence d'esprit" value="PrésenceEsprit" />
                        <Picker.Item label="Alacrité" value="Alacrité" />
                        <Picker.Item label="Tenacité" value="Tenacité" />
                        <Picker.Item label="Soif de sang" value="SoifDeSang" /> 
                        <Picker.Item label="Coup de Grace" value="CoupDeGrace" />
                        <Picker.Item label="Abattage" value="Abattage" />
                        <Picker.Item label="Barroud d'Honneur" value="BarroudHonneur" />
                    </Picker>
                </View>
                :null
                }

                {this.state.isVisibleRougeSec && !this.state.isVisibleRouge ? 
                <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs1:itemValue})}
                        >
                        <Picker.Item label={this.state.rs1} value="" />
                        <Picker.Item label="Coup Bas" value="CoupBas" />
                        <Picker.Item label="Goût du Sang" value="GoûtDuSang" />
                        <Picker.Item label="Ruée Offensive" value="RuéeOffensive" />
                        <Picker.Item label="Balise Zombie" value="BaliseZombie" />
                        <Picker.Item label="Poro Fantôme" value="PoroFantôme" />
                        <Picker.Item label="Arracheur d'Oeil" value="ArracheurDOeil" />
                        <Picker.Item label="Chasseur Vorace" value="ChasseurVorace" />
                        <Picker.Item label="Chasseur Ingénieux" value="ChasseurIngénieux" />
                        <Picker.Item label="Chasseur Acharné" value="ChasseurAcharné" />
                        <Picker.Item label="Chasseur Ultime" value="ChasseurUltime" />
                    </Picker>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs2:itemValue})}
                        >
                        <Picker.Item label={this.state.rs2} value="" />
                        <Picker.Item label="Coup Bas" value="CoupBas" />
                        <Picker.Item label="Goût du Sang" value="GoûtDuSang" />
                        <Picker.Item label="Ruée Offensive" value="RuéeOffensive" />
                        <Picker.Item label="Balise Zombie" value="BaliseZombie" />
                        <Picker.Item label="Poro Fantôme" value="PoroFantôme" />
                        <Picker.Item label="Arracheur d'Oeil" value="ArracheurDOeil" />
                        <Picker.Item label="Chasseur Vorace" value="ChasseurVorace" />
                        <Picker.Item label="Chasseur Ingénieux" value="ChasseurIngénieux" />
                        <Picker.Item label="Chasseur Acharné" value="ChasseurAcharné" />
                        <Picker.Item label="Chasseur Ultime" value="ChasseurUltime" />
                    </Picker>
                </View>
                : null}

                {this.state.isVisibleBleuSec && !this.state.isVisibleBleu ? 
                <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs1:itemValue})}
                        >
                        <Picker.Item label={this.state.rs1} value="" />
                        <Picker.Item label="Orbe Anti-Magie" value="OrbeAntiMagie" />   
                        <Picker.Item label="Ruban de Mana" value="RubanDeMana" />
                        <Picker.Item label="Manteau Nuageux" value="ManteauNuageux" />
                        <Picker.Item label="Transcendance" value="Transcendance" />
                        <Picker.Item label="Célérité" value="Célérité" />
                        <Picker.Item label="Concentration Absolue" value="ConcentrationAbsolue" />
                        <Picker.Item label="Brûlure" value="Brûlure" />
                        <Picker.Item label="Marche sur l'Eau" value="MarcheSurLeau" />
                        <Picker.Item label="Tempête Menaçante" value="TempêteMenaçante" />
                    </Picker>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs2:itemValue})}
                        >
                        <Picker.Item label={this.state.rs2} value="" />
                        <Picker.Item label="Orbe Anti-Magie" value="OrbeAntiMagie" />   
                        <Picker.Item label="Ruban de Mana" value="RubanDeMana" />
                        <Picker.Item label="Manteau Nuageux" value="ManteauNuageux" />
                        <Picker.Item label="Transcendance" value="Transcendance" />
                        <Picker.Item label="Célérité" value="Célérité" />
                        <Picker.Item label="Concentration Absolue" value="ConcentrationAbsolue" />
                        <Picker.Item label="Brûlure" value="Brûlure" />
                        <Picker.Item label="Marche sur l'Eau" value="MarcheSurLeau" />
                        <Picker.Item label="Tempête Menaçante" value="TempêteMenaçante" />
                    </Picker>
                </View>
                : null}
                
                {this.state.isVisibleVertSec && !this.state.isVisibleVert ? 
                <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs1:itemValue})}
                        >
                        <Picker.Item label={this.state.rs1} value="" />
                        <Picker.Item label="Démolition" value="Démolition" />   
                        <Picker.Item label="Fontaine de Vie" value="FontaineDeVie" />
                        <Picker.Item label="Coup de Bouclier" value="CoupDeBouclier" />     
                        <Picker.Item label="Conditionnement" value="Conditionnement" />
                        <Picker.Item label="Second Souffle" value="Second Souffle" />
                        <Picker.Item label="Plaque D'Os" value="PlaqueDOs" />   
                        <Picker.Item label="Surcroissance" value="Surcroissance" />
                        <Picker.Item label="Revitalisation" value="Revitalisation" />
                        <Picker.Item label="Inébranlable" value="Inébranlable" />        
                    </Picker>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs2:itemValue})}
                        >
                        <Picker.Item label={this.state.rs2} value="" />
                        <Picker.Item label="Démolition" value="Démolition" />   
                        <Picker.Item label="Fontaine de Vie" value="FontaineDeVie" />
                        <Picker.Item label="Coup de Bouclier" value="CoupDeBouclier" />     
                        <Picker.Item label="Conditionnement" value="Conditionnement" />
                        <Picker.Item label="Second Souffle" value="Second Souffle" />
                        <Picker.Item label="Plaque D'Os" value="PlaqueDOs" />   
                        <Picker.Item label="Surcroissance" value="Surcroissance" />
                        <Picker.Item label="Revitalisation" value="Revitalisation" />
                        <Picker.Item label="Inébranlable" value="Inébranlable" />        
                    </Picker>
                </View>
                : null}

                {this.state.isVisibleCyanSec && !this.state.isVisibleCyan ? 
                <View>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs1:itemValue})}
                        >
                        <Picker.Item label={this.state.rs1} value="" />
                        <Picker.Item label="Canaliportation Hextech" value="CanaliportationHextech" />   
                        <Picker.Item label="Chaussures Magiques" value="ChaussuresMagiques" />
                        <Picker.Item label="Timing Parfait" value="TimingParfait" />
                        <Picker.Item label="Marché du Futur" value="MarchéDuFutur" />
                        <Picker.Item label="Désintégrateur de Sbires" value="DésintégrateurDeSbires" />
                        <Picker.Item label="Livraison de Biscuits" value="LivraisonDeBiscuits" />
                        <Picker.Item label="Savoir Cosmique" value="SavoirCosmique" />
                        <Picker.Item label="Vitesse d'Approche" value="VitesseDapproche" />
                        <Picker.Item label="Philtre de Chronodistorsion" value="PhiltreDeChronodistorsion" />
                    </Picker>
                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue) => this.setState({rs2:itemValue})}
                        >
                        <Picker.Item label={this.state.rs2} value="" />
                        <Picker.Item label="Canaliportation Hextech" value="CanaliportaionHextech" />   
                        <Picker.Item label="Chaussures Magiques" value="ChaussuresMagiques" />
                        <Picker.Item label="Timing Parfait" value="TimingParfait" />
                        <Picker.Item label="Marché du Futur" value="MarchéDuFutur" />
                        <Picker.Item label="Désintégrateur de Sbires" value="DésintégrateurDeSbires" />
                        <Picker.Item label="Livraison de Biscuits" value="LivraisonDeBiscuits" />
                        <Picker.Item label="Savoir Cosmique" value="SavoirCosmique" />
                        <Picker.Item label="Vitesse d'Approche" value="VitesseDapproche" />
                        <Picker.Item label="Philtre de Chronodistorsion" value="PhiltreDeChronodistorsion" />
                    </Picker>
                </View>
                : null}

                <Picker
                    style={{ height: 50, width: 200, }}
                    onValueChange={(itemValue) =>  this.setState({rt1:itemValue })}
                    >
                    <Picker.Item label="Degat" value="degat" />
                    <Picker.Item label="Rapidité d'attaque" value="AS" />
                    <Picker.Item label="Reduction des delais" value="CDR" />
                </Picker>
                <Picker
                    style={{ height: 50, width: 200, }}
                    onValueChange={(itemValue) =>  this.setState({rt2:itemValue })}
                    >
                    <Picker.Item label="Degat" value="degat" />
                    <Picker.Item label="Armure" value="Armor" />
                    <Picker.Item label="Resistance magique" value="MR" />
                </Picker>
                <Picker
                    style={{ height: 50, width: 200, }}
                    onValueChange={(itemValue) =>  this.setState({rt3:itemValue })}
                    >
                    <Picker.Item label="HP" value="HP" />
                    <Picker.Item label="Armure" value="Armor" />
                    <Picker.Item label="Resistance magique" value="MR" />
                </Picker>
                
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



// spellbinder : 3907
// ombre jumelle : 3905
// targon ameliorer : 3860