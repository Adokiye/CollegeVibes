/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import styles from "./styles/registrationonestyles";
import GeneralStyle from "../../generalstyles/generalstyles";
import BoxTextInput from "../../../components/TextInput/BoxTextInput/BoxTextInput";
import HeaderText from "../../../components/Text/HeaderText/headertext";
import Header from "../../../components/Header/Header";
import MainButton from "../../../components/Buttons/MainButton";

const screen = Dimensions.get("screen");

class RegistrationOne extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.schools = [
      "Abubakar Tafawa Balewa University, Bauchi",
      "Ahmadu Bello University, Zaria",
      "Bayero University, Kano",
      "Federal University Gashua, Yobe",
      "Federal University of Petroleum Resources, Effurun",
      "Federal University of Technology, Akure",
      "Federal University of Technology, Minna",
      "Federal University of Technology, Owerri",
      "Federal University, Dutse, Jigawa State",
      "Federal University, Dutsin-Ma, Katsina",
      "Federal University, Kashere, Gombe State",
      "Federal University, Lafia, Nasarawa State",
      "Federal University, Lokoja, Kogi State",
      "Alex Ekweme University, Ndufu-Alike, Ebonyi State",
      "Federal University, Otuoke, Bayelsa",
      "Federal University, Oye-Ekiti, Ekiti State",
      "Federal University, Wukari, Taraba State",
      "Federal University, Birnin Kebbi",
      "Federal University, Gusau Zamfara",
      "Michael Okpara University of Agriculture, Umudike",
      "Modibbo Adama University of Technology, Yola",
      "National Open University of Nigeria, Lagos",
      "Nigeria Police Academy Wudil",
      "Nigerian Defence Academy Kaduna",
      "Nnamdi Azikiwe University, Awka",
      "Obafemi Awolowo University,Ile-Ife",
      "University of Abuja, Gwagwalada",
      "Federal University of Agriculture, Abeokuta",
      "University of Agriculture, Makurdi",
      "University of Benin",
      "University of Calabar",
      "University of Ibadan",
      "University of Ilorin",
      "University of Jos",
      "University of Lagos",
      "University of Maiduguri",
      "University of Nigeria, Nsukka",
      "University of Port-Harcourt",
      "University of Uyo",
      "Usumanu Danfodiyo University",
      "Nigerian Maritime University Okerenkoko, Delta State",
      "Abia State University, Uturu",
      "Adamawa State University Mubi",
      "Adekunle Ajasin University, Akungba",
      "Akwa Ibom State University, Ikot Akpaden",
      "Ambrose Alli University, Ekpoma",
      "Chukwuemeka Odumegwu Ojukwu University, Uli",
      "Bauchi State University, Gadau",
      "Benue State University, Makurdi",
      "Yobe State University, Damaturu",
      "Cross River State University of  Technology, Calabar",
      "Delta State University Abraka",
      "Ebonyi State University, Abakaliki",
      "Ekiti State University",
      "Enugu State University of Science and Technology, Enugu",
      "Gombe State Univeristy, Gombe",
      "Ibrahim Badamasi Babangida University, Lapai",
      "Ignatius Ajuru University of Education,Rumuolumeni",
      "Imo State University, Owerri",
      "Sule Lamido University, Kafin Hausa, Jigawa",
      "Kaduna State University, Kaduna",
      "Kano University of Science & Technology, Wudil",
      "Kebbi State University of Science and Technology, Aliero",
      "Kogi State University Anyigba",
      "Kwara State University, Ilorin",
      "Ladoke Akintola University of Technology, Ogbomoso",
      "Ondo State University of Science and Technology Okitipupa",
      "River State University of Science and Technology",
      "Olabisi Onabanjo University, Ago Iwoye",
      "Lagos State University, Ojo",
      "Niger Delta University Yenagoa",
      "Nasarawa State University Keffi",
      "Plateau State University Bokkos",
      "Tai Solarin University of Education Ijebu Ode",
      "Umar Musa Yar' Adua University Katsina",
      "Osun State University Osogbo",
      "Taraba State University, Jalingo",
      "Sokoto State University",
      "Yusuf Maitama Sule University Kano",
      "Oyo State Technical University Ibadan",
      "Ondo State University of Medical Sciences",
      "Edo University Iyamo",
      "Eastern Palm University Ogboko, Imo State",
      "University of Africa Toru Orua, Bayelsa State",
      "Bornu State University, Maiduguri",
      "Moshood Abiola University of Science and Technology Abeokuta",
      "Gombe State University of Science and Technology",
      "Zamfara State University",
      "Achievers University, Owo",
      "Adeleke University, Ede",
      "Afe Babalola University, Ado-Ekiti - Ekiti State",
      "African University of Science & Technology, Abuja",
      "Ajayi Crowther University, Ibadan",
      "Al-Hikmah University, Ilorin",
      "Al-Qalam University, Katsina",
      "American University of Nigeria, Yola",
      "Augustine University",
      "Babcock University,Ilishan-Remo",
      "Baze University",
      "Bells University of Technology, Otta",
      "Benson Idahosa University, Benin City",
      "Bingham University, New Karu",
      "Bowen University, Iwo",
      "Caleb University, Lagos",
      "Caritas University, Enugu",
      "Chrisland University",
      "Covenant University Ota",
      "Crawford University Igbesa",
      "Crescent University",
      "Edwin Clark University, Kaigbodo",
      "Elizade University, Ilara-Mokin",
      "Evangel University, Akaeze",
      "Fountain Unveristy, Oshogbo",
      "Godfrey Okoye University, Ugwuomu-Nike - Enugu State",
      "Gregory University, Uturu",
      "Hallmark University, Ijebi Itele, Ogun",
      "Hezekiah University, Umudi",
      "Igbinedion University Okada",
      "Joseph Ayo Babalola University, Ikeji-Arakeji",
      "Kings University, Ode Omu",
      "Kwararafa University, Wukari",
      "Landmark University, Omu-Aran.",
      "Lead City University, Ibadan",
      "Madonna University, Okija",
      "Mcpherson University, Seriki Sotayo, Ajebo",
      "Micheal & Cecilia Ibru University",
      "Mountain Top University",
      "Nile University of Nigeria, Abuja",
      "Novena University, Ogume",
      "Obong University, Obong Ntak",
      "Oduduwa University, Ipetumodu - Osun State",
      "Pan-Atlantic University, Lagos",
      "Paul University, Awka - Anambra State",
      "Redeemer's University, Mowe",
      "Renaissance University, Enugu",
      "Rhema University, Obeama-Asa - Rivers State",
      "Ritman University, Ikot Ekpene, Akwa Ibom",
      "Salem University, Lokoja",
      "Samuel Adegboyega University, Ogwa.",
      "Southwestern University, Oku Owa",
      "Summit University",
      "Tansian University, Umunya",
      "University of Mkar, Mkar",
      "Veritas University, Abuja",
      "Wellspring University, Evbuobanosa - Edo State",
      "Wesley University. of Science & Technology, Ondo",
      "Western Delta University, Oghara Delta State",
      "Christopher University Mowe",
      "Kola Daisi University Ibadan, Oyo State",
      "Anchor University Ayobo Lagos State",
      "Dominican University Ibadan Oyo State",
      "Legacy University, Okija Anambra State",
      "Arthur Javis University Akpoyubo Cross river State",
      "Crown Hill University Eiyenkorin, Kwara State",
      "Coal City University Enugu State",
      "Clifford University Owerrinta Abia State",
      "Admiralty University, Ibusa Delta State",
      "Spiritan University, Nneochi Abia State",
      "Precious Cornerstone University, Oyo",
      "PAMO University of Medical Sciences, Portharcourt",
      "Atiba University Oyo",
      "Eko University of Medical and Health Sciences Ijanikin, Lagos",
      "Skyline University, Kano"
    ];
    this.schools = this.schools.sort();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      schools: this.schools,
      selected: ""
    };
  }

  componentDidUpdate() {
    const { params } = this.props.navigation.state;
    if (params && params.selected) {
      this.setState({ selected: params.selected });
      params.selected = "";
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
      <Header
      navigation={this.props.navigation} />
        <HeaderText text={"Create Account"} />
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
          <BoxTextInput
            type={"default"}
            label={"First Name"}
            placeholder={"Enter First Name"}
            autoFocus={true}
            value={this.state.first_name}
            onTextInput={text => this.setState({ first_name: text })}
          />
          <BoxTextInput
            type={"default"}
            label={"Last Name"}
            placeholder={"Enter Last Name"}
            value={this.state.last_name}
            onTextInput={text => this.setState({ last_name: text })}
          />
          <BoxTextInput
            type={"default"}
            label={"Email"}
            placeholder={"Enter Email"}
            value={this.state.email}
            onTextInput={text => this.setState({ email: text })}
          />
          <BoxTextInput
            type={"numeric"}
            label={"Phone Number"}
            placeholder={"Enter Phone Number"}
            value={this.state.email}
            onTextInput={text => this.setState({ email: text })}
          />
          <View style={styles.parent}>
            <Text style={styles.labelText}>Institution</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                this.props.navigation.navigate("Search", {
                  state: "RegistrationOne",
                  data: this.state.schools
                })
              }
            >
              <View style={styles.school_container}>
                <Text style={styles.schoolName}>
                  {this.state.selected || this.state.schools[0]}
                </Text>
                <Image
                  resizeMode={"contain"}
                  style={styles.frontImage}
                  source={require("../../../assets/images/backIcon.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
          <MainButton
            onPress={() => this.props.navigation.navigate("RegistrationTwo")}
            text="CONTINUE"
          /></View>
          <View style={GeneralStyle().row}>
            <Image
              source={require("../../../assets/images/facebook.png")}
              style={styles.facebookimage}
              resizeMode={"contain"}
            />
            <Image
              source={require("../../../assets/images/googleplus.png")}
              style={styles.googleImage}
              resizeMode={"contain"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RegistrationOne;
