import React,{ useState, useRef} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { MaterialIcons } from '@expo/vector-icons'

// import { Container } from './styles';

function FormatSecond(seconds){
   if (seconds < 60) {
      return `${seconds} seg`;
    }
    return `${Math.floor(seconds / 60)} min`;
}

let timer;

export default function Time() {
   const timerRef = useRef();
   const [ timerEnabled, setTimerEnabled] = useState(false)
   const [Second, setSecond] = useState(0);


   function togleTime(){
      if( timerEnabled ) {
         clearInterval(timerRef.current);

         setTimerEnabled(false);
      } else {
         timerRef.current = setInterval(() => {
            setSecond(state => state + 1);
         }, 1000);
         setTimerEnabled(true);
      }
   }

  return (
       <LinearGradient
          colors={['#e7f3f3', '#9abee0']}
          style={styles.container}
        >

         <Text style={styles.title}>Pomodora</Text>

         <AnimatedCircularProgress
            size={300}
            width={12}
            rotation={0}
            fill={ (Second * 100) / 600}
            tintColor="#1c354f"
            backgroundColor="#fff">
            { () => (
               <Text style={styles.progress}>{FormatSecond(Second)}</Text>
            ) }
         </AnimatedCircularProgress>

         <TouchableOpacity style={styles.button} onPress={togleTime}>
            <MaterialIcons name={ timerEnabled ? 'pause' : 'play-arrow'} color="#fff" size={40} />
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

   title:{
      color: '#1c354f',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      maxWidth: 300,
      marginBottom: 80,
   },

   progress:{
      color: '#1c354f',
      fontSize: 50,
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
      marginTop: 80,
   }
})
