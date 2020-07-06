import React, { Component } from 'react'
import { Text, View, StyleSheet, Picker, ScrollView, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as axios from 'axios'

import Header from '../components/Header'
import {RUNESIDBYNAME} from '../utils/Runes'
import {SUMMSIDBYNAME} from '../utils/Summs'
import {ITEMSIDBYNAME} from '../utils/Items'
import { white } from 'react-native-paper';

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
        item1: 'item1',
        item2: 'item2',
        item3: 'item3',
        item4: 'item4',
        item5: 'item5',
        item6: 'item6',
        rp1: 'Rune P1 ',
        rp2: 'Rune P2',
        rp3: 'Rune P3',
        rp4: 'Rune P4 ',
        rs1: 'Rune S1',
        rs2: 'Rune S2',
        rt1: 'Rune T1',
        rt2: 'Rune T2',
        rt3: 'Rune T3',
        sum1: 'Summoner 1',
        sum2: 'Summoner 2',
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
          let item1 = this.state.item1
          let item2 = this.state.item2
          let item3 = this.state.item3
          let item4 = this.state.item4
          let item5 = this.state.item5
          let item6 = this.state.item6
          let rp1 = this.state.rp1
          let rp2 = this.state.rp2
          let rp3 = this.state.rp3
          let rp4 = this.state.rp4
          let rs1 = this.state.rs1
          let rs2 = this.state.rs2
          let rt1 = this.state.rt1
          let rt2 = this.state.rt2
          let rt3 = this.state.rt3
          let sum1 = this.state.sum1
          let sum2 = this.state.sum2
          
        ITEMSIDBYNAME.map(function(item){
            if(item1 === item.id){
                item1 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
            if(item2 === item.id){
                item2 =  'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
            if(item3 === item.id){
                item3 =  'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
            if(item4 === item.id){
                item4 =  'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
            if(item5 === item.id){
                item5 =  'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
            if(item6 === item.id){
                item6 =  'https://raw.githubusercontent.com/YanisRili/MyBuild_Items/master/items/' + item.name + '.PNG'
            }
        })

        RUNESIDBYNAME.map(function(rune){
            if(rp1 === rune.id){
                rp1 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp2 === rune.id){
                rp2 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp3 === rune.id){
                rp3 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rp4 === rune.id){
                rp4 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rs1 === rune.id){
                rs1 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rs2 === rune.id){
                rs2 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt1 === rune.id){
                rt1 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt2 === rune.id){
                rt2 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
            if(rt3 === rune.id){
                rt3 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Runes/master/runes_all/' + rune.name + '.PNG'
            }
        })

        SUMMSIDBYNAME.map(function(summs){
            if(sum1 === summs.id){
                sum1 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Summs/master/summs/' + summs.name + '.PNG'
            }
            if(sum2 === summs.id){
                sum2 = 'https://raw.githubusercontent.com/YanisRili/MyBuild_Summs/master/summs/' + summs.name + '.PNG'
            }
        })


        const newBuild = {
            'id_champ' : this.state.idChamp,
            "item1":item1,
            "item2":item2,
            "item3":item3,
            "item4":item4,
            "item5":item5,
            "item6":item6,
            "sum1":sum1,
            "sum2":sum2,
            "rp1": rp1,
            "rp2":rp2,
            "rp3":rp3,
            "rp4":rp4,
            "rs1":rs1,
            "rs2":rs2,
            "rt1":rt1,
            "rt2":rt2,
            "rt3":rt3,
            "commentaire": '',
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            }
        };
        console.log(newBuild)
        axios.post('https://mybuild-api.herokuapp.com/api/users/' + this.state.idUser + '/build', newBuild, axiosConfig)
        .then(() => {
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
        <View  style={{width: '100%'}}>
        <Header />
        <ScrollView style={{backgroundColor: '#010a13'}}>
                
                {/* item 1 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item1: itemValue})}
                >
                    <Picker.Item label={this.state.item1} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>
                
                {/* item 2 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item2: itemValue})}
                >
                    <Picker.Item label={this.state.item2} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>
                
                {/* item 3 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item3: itemValue})}
                >
                     <Picker.Item label={this.state.item3} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>
                
                {/* item 4 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item4: itemValue})}
                >
                    <Picker.Item label={this.state.item4} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>
                
                {/* item 5 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item5: itemValue})}
                >
                    <Picker.Item label={this.state.item5} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>
                
                {/* item 6 */}
                <Picker
                style={styles.inputstyle}
                onValueChange={(itemValue) =>  this.setState({item6: itemValue})}
                >
                    <Picker.Item label={this.state.item6} value="" />
                    <Picker.Item label="Bouclier relique" value="BouclierRelique" />
                    <Picker.Item label="Faucille spectrale" value="FaucilleSpectrale" />
                    <Picker.Item label="Garde epaules d'acier" value="GardeEpauleAcier" />
                    <Picker.Item label="Lame du voleur de sorts" value="LameVoleurSorts" />
                    <Picker.Item label="Botte de celerité" value="BotteCélérité" />
                    <Picker.Item label="Botte de lucidité" value="BotteLucidité" />
                    <Picker.Item label="Botte de mobilité" value="BotteMobilité" />
                    <Picker.Item label="Sandales de mercure" value="SandalesMercure" />
                    <Picker.Item label="Botte du berzerker" value="BotteBerzerker" />
                    <Picker.Item label="Chaussures de sorcier" value="ChaussureSorcier" />
                    <Picker.Item label="Tabi ninja" value="TabiNinja" />
                    <Picker.Item label="Mejai" value="Mejai" />
                    <Picker.Item label="Songe de Shurelya" value="SongeShurelya" />
                    <Picker.Item label="Rédemption" value="Rédemption" />
                    <Picker.Item label="Graal impie d'Athene" value="GraalImpieAthene" />
                    <Picker.Item label="Creuset de Mikael" value="CreusetMikael" />
                    <Picker.Item label="Voeu du chevalier" value="VoeuChevalier" />
                    <Picker.Item label="Médaillon de l'Iron Solarie" value="MédaillonIronSolari" />
                    <Picker.Item label="Convergence de Zeke" value="ConvergenceZeke" />
                    <Picker.Item label="Encensoir Ardent" value="EncensoirArdent" />
                    <Picker.Item label="Muramana" value="Muramana" />
                    <Picker.Item label="Glaive d'ombre" value="GlaiveOmbre" />
                    <Picker.Item label="Ombres Jumelles" value="OmbresJumelles" />
                    <Picker.Item label="Protoceinture Hextech 01" value="ProtoceintureHextech" />
                    <Picker.Item label="Lithoplastron de gargouille" value="LithoplastronGargouille" />
                    <Picker.Item label="Baton séculaire" value="BatonSéculaire" />
                    <Picker.Item label="Danseur fantome" value="DanseurFantome" />
                    <Picker.Item label="Ouragan de Runaan" value="OuraganRunaan" />
                    <Picker.Item label="Poignard de Statikk" value="PoignardStatikk" />
                    <Picker.Item label="Canon ultrarapide" value="CanonUltrarapide" />
                    <Picker.Item label="Sceptre de Rylai" value="SceptreRylai" />
                    <Picker.Item label="Baton du vide" value="BatonVide" />
                    <Picker.Item label="Gloire du juste" value="GloireJuste" />
                    <Picker.Item label="Gantelet givrant" value="GanteletGivrant" />
                    <Picker.Item label="Coeur gelé" value="CoeurGelé" />
                    <Picker.Item label="Cape solaire" value="CapeSolaire" />
                    <Picker.Item label="Ange gardien" value="AngeGardien" />
                    <Picker.Item label="GLP Hextech 800" value="GLPHextech" />
                    <Picker.Item label="Rappel mortel" value="RappelMortel" />
                    <Picker.Item label="Salutations de Dominik" value="SalutationsDominik" />
                    <Picker.Item label="Visage spirituel" value="VisageSpirituel" />
                    <Picker.Item label="Casque adaptatif" value="CasqueAdaptatif" />
                    <Picker.Item label="Armure de Warmog" value="ArmureWarmog" />
                    <Picker.Item label="Cotte épineuse" value="CotteEpineuse" />
                    <Picker.Item label="Au bout du rouleau" value="AuBoutDuRouleau" />
                    <Picker.Item label="Lame spectre de Youmuu" value="LameYoumuu" />
                    <Picker.Item label="Présage de Randuin" value="PrésageRanduin" />
                    <Picker.Item label="Epée vesperale de Draktharr" value="EpeeDraktharr" />
                    <Picker.Item label="Sablier de Zhonya" value="SablierZhonya" />
                    <Picker.Item label="Plaque du mort" value="PlaqueDuMort" />
                    <Picker.Item label="Manteau de la nuit" value="ManteauNuit" />
                    <Picker.Item label="Attrape-sorts" value="AttrapeSorts" />
                    <Picker.Item label="Masque abyssal" value="MasqueAbyssal" />
                    <Picker.Item label="Couperet noir" value="CouperetNoir" />
                    <Picker.Item label="Voile de la banshee" value="VoileBanshee" />
                    <Picker.Item label="Dent de Nashor" value="DentNashor" />
                    <Picker.Item label="Morellonomicon" value="Morellonomicon" />
                    <Picker.Item label="Epée sanglante" value="EpeeSanglante" />
                    <Picker.Item label="Maillet gelé" value="MailletGelé" />
                    <Picker.Item label="Lame enragée de Guinsoo" value="LameGuinsoo" />
                    <Picker.Item label="Tourment de Liandry" value="TourmentLiandry" />
                    <Picker.Item label="Etreinte de séraphin" value="EtreinteSéraphin" />
                    <Picker.Item label="Gage de Sterak" value="GageSterak" />
                    <Picker.Item label="Lame tempête" value="LameTempete" />
                    <Picker.Item label="Fléau de liche" value="FleauLiche" />
                    <Picker.Item label="Echo de Luden" value="EchoLuden" />
                    <Picker.Item label="Guele de Malmortius" value="GueleMalmortius" />
                    <Picker.Item label="Lame du roi déchu" value="LameRoiDéchu" />
                    <Picker.Item label="Faux spectrale" value="FauxSpectrale" />
                    <Picker.Item label="Lame d'infini" value="LameInfini" />
                    <Picker.Item label="Cimeterre mercuriel" value="CimeterreMercuriel" />
                    <Picker.Item label="Pistolame Hextech" value="PistolameHextech" />
                    <Picker.Item label="Soif-de-sang" value="SoifDeSang" />
                    <Picker.Item label="Hydre vorace" value="HydreVorace" />
                    <Picker.Item label="Hydre titanesque" value="HydreTitanesque" />
                    <Picker.Item label="Coiffe de Rabadon" value="CoiffeRabadon" />
                    <Picker.Item label="Danse de la mort" value="DanseMort" />
                    <Picker.Item label="Force de la trinité" value="ForceTrinité" />
                    <Picker.Item label="Jungle: item rouge, Pierre jaune" value="JungleRougeJaune" />
                    <Picker.Item label="Jungle: item rouge, Pierre rouge" value="JungleRougeRouge" />
                    <Picker.Item label="Jungle: item rouge, Pierre vert" value="JungleRougeVert" />
                    <Picker.Item label="Jungle: item rouge, Pierre bleu" value="JungleRougeBleu" />
                    <Picker.Item label="Jungle: item bleu, Pierre jaune" value="JungleBleuJaune" />
                    <Picker.Item label="Jungle: item bleu, Pierre rouge" value="JungleBleuRouge" />
                    <Picker.Item label="Jungle: item bleu, Pierre vert" value="JungleBleuVert" />
                    <Picker.Item label="Jungle: item bleu, Pierre bleu" value="JungleBleuBleu" />
                </Picker>


                {/* Arbre PRINCIPALE */}
                <Picker
                    style={styles.inputstyle}
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
                            style={styles.inputstyleJ}
                            onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                            >
                            <Picker.Item label={this.state.rp1} value="" />
                            <Picker.Item label="Attaque Soutenue" value="AttaqueSoutenue" />
                            <Picker.Item label="Tempo mortel" value="TempoMortel" />
                            <Picker.Item label="Jeu de jambe" value="JeuDeJambe" />
                            <Picker.Item label="Conquerant" value="Conquerant" />
                        </Picker> 

                        <Picker
                            style={styles.inputstyleJ}
                            onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                            >
                            <Picker.Item label={this.state.rp2} value="" />
                            <Picker.Item label="Surcharge de PV" value="SurchargedePV" />
                            <Picker.Item label="Triomphe" value="Triomphe" />
                            <Picker.Item label="Présence d'esprit" value="PrésenceEsprit" />
                        </Picker>

                        <Picker
                            style={styles.inputstyleJ}
                            onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                            >
                            <Picker.Item label={this.state.rp3} value="" />
                            <Picker.Item label="Alacrité" value="Alacrité" />
                            <Picker.Item label="Tenacité" value="Tenacité" />
                            <Picker.Item label="Soif de sang" value="SoifDeSang" />
                        </Picker>

                        <Picker
                            style={styles.inputstyleJ}
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
                        style={styles.inputstyleR}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Electrocution" value="Electrocution" />
                        <Picker.Item label="Prédateur" value="Prédateur" />
                        <Picker.Item label="Moisson Noire" value="MoissonNoire" />
                        <Picker.Item label="Déluge de lames" value="DélugeDeLames" />
                    </Picker> 

                    <Picker
                        style={styles.inputstyleR}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Coup Bas" value="CoupBas" />
                        <Picker.Item label="Goût du Sang" value="GoûtDuSang" />
                        <Picker.Item label="Ruée Offensive" value="RuéeOffensive" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleR}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Balise Zombie" value="BaliseZombie" />
                        <Picker.Item label="Poro Fantôme" value="PoroFantôme" />
                        <Picker.Item label="Arracheur d'Oeil" value="ArracheurDOeil" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleR}
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
                        style={styles.inputstyleB}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Invocation d'Aery" value="InvocationDAery" />
                        <Picker.Item label="Comète Arcanique" value="ComèteArcanique" />
                        <Picker.Item label="Rush Phasique" value="RushPhasique" />                        
                    </Picker> 

                    <Picker
                        style={styles.inputstyleB}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Orbe Anti-Magie" value="OrbeAntiMagie" />   
                        <Picker.Item label="Ruban de Mana" value="RubanDeMana" />
                        <Picker.Item label="Manteau Nuageux" value="ManteauNuageux" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleB}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Transcendance" value="Transcendance" />
                        <Picker.Item label="Célérité" value="Célérité" />
                        <Picker.Item label="Concentration Absolue" value="ConcentrationAbsolue" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleB}
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
                        style={styles.inputstyleV}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Poigne de l'Immortel" value="PoigneDeLimmortel" />
                        <Picker.Item label="Après-Coup" value="AprèsCoup" />
                        <Picker.Item label="Gardien" value="Gardien" />                        
                    </Picker> 

                    <Picker
                        style={styles.inputstyleV}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Démolition" value="Démolition" />   
                        <Picker.Item label="Fontaine de Vie" value="FontaineDeVie" />
                        <Picker.Item label="Coup de Bouclier" value="CoupDeBouclier" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleV}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Conditionnement" value="Conditionnement" />
                        <Picker.Item label="Second Souffle" value="SecondSouffle" />
                        <Picker.Item label="Plaque D'Os" value="PlaqueDos" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleV}
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
                        style={styles.inputstyleC}
                        onValueChange={(itemValue) => this.setState({rp1:itemValue})}
                        >
                        <Picker.Item label={this.state.rp1} value="" />
                        <Picker.Item label="Optimisation Glaciale" value="OptimisationGlaciale" />
                        <Picker.Item label="Grimoire Déchaîné" value="GrimoireDéchaîné" />
                        <Picker.Item label="Prototype Omnipierre" value="PrototypeOmnipierre" />                        
                    </Picker> 

                    <Picker
                        style={styles.inputstyleC}
                        onValueChange={(itemValue) => this.setState({rp2:itemValue})}
                        >
                        <Picker.Item label={this.state.rp2} value="" />
                        <Picker.Item label="Canaliportation Hextech" value="CanaliportaionHextech" />   
                        <Picker.Item label="Chaussures Magiques" value="ChaussuresMagiques" />
                        <Picker.Item label="Timing Parfait" value="TimingParfait" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleC}
                        onValueChange={(itemValue) => this.setState({rp3:itemValue})}
                        >
                        <Picker.Item label={this.state.rp3} value="" />
                        <Picker.Item label="Marché du Futur" value="MarchéDuFutur" />
                        <Picker.Item label="Désintégrateur de Sbires" value="DésintégrateurDeSbires" />
                        <Picker.Item label="Livraison de Biscuits" value="LivraisonDeBiscuits" />
                    </Picker>

                    <Picker
                        style={styles.inputstyleC}
                        onValueChange={(itemValue) => this.setState({rp4:itemValue})}
                        >
                        <Picker.Item label={this.state.rp4} value="" />
                        <Picker.Item label="Savoir Cosmique" value="SavoirCosmique" />
                        <Picker.Item label="Vitesse d'Approche" value="VitesseDapproche" />
                        <Picker.Item label="Philtre de Chronodistorsion" value="PhiltreDeChronodistorsion" />
                    </Picker>
                </View>
                : null }

                {/* Arbre SECONDAIRE */}
                <Picker
                    style={styles.inputstyle}
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
                        style={styles.inputstyleJ}
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
                        style={styles.inputstyleJ}
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
                :null}

                {this.state.isVisibleRougeSec && !this.state.isVisibleRouge ? 
                <View>
                    <Picker
                        style={styles.inputstyleR}
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
                       style={styles.inputstyleR}
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
                        style={styles.inputstyleB}
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
                        style={styles.inputstyleB}
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
                        style={styles.inputstyleV}
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
                        style={styles.inputstyleV}
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
                        style={styles.inputstyleC}
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
                        style={styles.inputstyleC}
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

                {/* Arbre TERCIAIRE */}
                <Picker
                    style={styles.inputstyle}
                    onValueChange={(itemValue) =>  this.setState({rt1:itemValue })}
                    >
                    <Picker.Item label={this.state.rt1} value="" />
                    <Picker.Item label="Degat" value="degat" />
                    <Picker.Item label="Rapidité d'attaque" value="AS" />
                    <Picker.Item label="Reduction des delais" value="CDR" />
                </Picker>
                <Picker
                    style={styles.inputstyle}
                    onValueChange={(itemValue) =>  this.setState({rt2:itemValue })}
                    >
                    <Picker.Item label={this.state.rt2} value="" />
                    <Picker.Item label="Degat" value="degat" />
                    <Picker.Item label="Armure" value="Armor" />
                    <Picker.Item label="Resistance magique" value="MR" />
                </Picker>
                <Picker
                    style={styles.inputstyle}
                    onValueChange={(itemValue) =>  this.setState({rt3:itemValue })}
                    >
                    <Picker.Item label={this.state.rt3} value="" />
                    <Picker.Item label="HP" value="HP" />
                    <Picker.Item label="Armure" value="Armor" />
                    <Picker.Item label="Resistance magique" value="MR" />
                </Picker>

                {/* SUMMONER 1 */}
                <Picker
                    style={styles.inputstyle}
                    onValueChange={(itemValue) =>  this.setState({sum1:itemValue })}
                    >
                    <Picker.Item label={this.state.sum1} value="" />
                    <Picker.Item label="Soin" value="Soin" />
                    <Picker.Item label="Fantome" value="Fantome" />
                    <Picker.Item label="Barrière" value="Barrière" />
                    <Picker.Item label="Fatigue" value="Fatigue" />
                    <Picker.Item label="Clartée" value="Clartée" />
                    <Picker.Item label="Flash" value="Flash" />
                    <Picker.Item label="Téléportation" value="Téléportation" />
                    <Picker.Item label="Chatiment" value="Chatiment" />
                    <Picker.Item label="Purge" value="Purge" />
                    <Picker.Item label="Embrasement" value="Embrasement" />
                </Picker>
                
                {/* SUMMONER 2 */}
                <Picker
                    style={styles.inputstyle}
                    onValueChange={(itemValue) =>  this.setState({sum2:itemValue })}
                    >
                    <Picker.Item label={this.state.sum2} value="" />
                    <Picker.Item label="Soin" value="Soin" />
                    <Picker.Item label="Fantome" value="Fantome" />
                    <Picker.Item label="Barrière" value="Barrière" />
                    <Picker.Item label="Fatigue" value="Fatigue" />
                    <Picker.Item label="Clartée" value="Clartée" />
                    <Picker.Item label="Flash" value="Flash" />
                    <Picker.Item label="Téléportation" value="Téléportation" />
                    <Picker.Item label="Chatiment" value="Chatiment" />
                    <Picker.Item label="Purge" value="Purge" />
                    <Picker.Item label="Embrasement" value="Embrasement" />
                </Picker>
                
                <TouchableOpacity
                style={styles.inputstyle}
                onPress={() => this._submit()}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    iconText: {
        alignItems: 'center',
        paddingTop:'15%'
    }, 
    inputstyle: {
        borderRadius: 5,
        padding: 0.5,
        margin: 25,
        borderWidth:1,
        borderColor: '#bf8d3a',
        height: 40,
        width: 320
    },
    inputstyleJ: {
        borderRadius: 5,
        padding: 2,
        margin: 20,
        borderWidth:1,
        borderColor: '#ffea05',
        
    },
    inputstyleR: {
        borderRadius: 5,
        padding: 2,
        margin: 20,
        borderWidth:1,
        borderColor: '#ff0505',
        
    },
    inputstyleB: {
        borderRadius: 5,
        padding: 2,
        margin: 20,
        borderWidth:1,
        borderColor: '#0e2fe9',
        
    },
    inputstyleV: {
        borderRadius: 5,
        padding: 2,
        margin: 20,
        borderWidth:1,
        borderColor: '#0ee924',
        
    },
    inputstyleC: {
        borderRadius: 5,
        padding: 2,
        margin: 20,
        borderWidth:1,
        borderColor: '#2ff1ff',
        
    },
})



// spellbinder : 3907
// ombre jumelle : 3905
// targon ameliorer : 3860