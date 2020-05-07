import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation} from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import bannerImg from '../../assets/banner.png';

// import { Container } from './styles';

export default function Welcome() {
   const navigation = useNavigation();

   function navigateToTime(){
      navigation.navigate('Time');
   }


  return (
       <LinearGradient
          colors={['#e7f3f3', '#9abee0']}
          style={styles.container}
        >
         <Image style={styles.banner} source={bannerImg}/>
         <Text style={styles.title}>Fique focado em sua tarefa com a Pomodora!</Text>

         <TouchableOpacity style={styles.button} onPress={navigateToTime}>
            <MaterialIcons name="chevron-right" color="#fff" size={40} />
         </TouchableOpacity>
       </LinearGradient>
  );
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   banner:{
      alignSelf: 'flex-end',
   },

   title:{
      color: '#1c354f',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      maxWidth: 300,
      marginVertical: 80,
   },

   button:{
      width: 72,
      height: 72,
      backgroundColor: '#1c354f',
      borderRadius: 36,
      alignItems: 'center',
      justifyContent: 'center',
   }
})
