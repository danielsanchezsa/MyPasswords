import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect , useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../components/customTextInput';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import firebaseM from "../objects/firebase";

export default function SignUpScreen(props) {


  let auth = getAuth(firebaseM);
  let [isLoggedIn, setIsLogged] = useState(false);
  let [title, setTitle] = useState("Sign Up")


  useEffect(()=>{
   props.nav.setOptions({title:title})
  })


   onAuthStateChanged(auth,(user)=>{

     if(user){
      setIsLogged(true)
      props.nav.push("index");
     }else{
      setIsLogged(false)
     }
   })

   

   if(isLoggedIn){

    return null;
   }else{
  

    return(
      <View style={{marginTop:20}}>




      <CustomTextInput placeholder={"mail"}></CustomTextInput>
      <CustomTextInput placeholder={"PASSWORD"}></CustomTextInput>
     
     
      <View style={{marginHorizontal:10, marginVertical:20}}>
      <TouchableOpacity
      onPress={
         ()=>{
        //  props.nav.push("index");
         }
      }
      style={styles.button}
      >
      <Text>Accept</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>{
        setTitle(title === "Sign Up"? "Log In": "Sign Up")
      }}
      style={styles.changeType}
      ><Text style={styles.textChangeType}>{"Or... " + (title === "Sign Up"? "Log In": "Sign Up")}</Text></TouchableOpacity>
      </View>
   


      </View>
  )
   }


}



const styles = StyleSheet.create({

  changeType:{
    marginTop:15,
    alignSelf:"center",
    
  },
  textChangeType:{
    textDecorationLine:"underline",
    color:"blue"
  },

    button:{
        backgroundColor:"orange",
    
        borderRadius:20,
       paddingVertical:10,
 
       width:"100%",
        justifyContent: "center",
         alignItems: "center",
        alignSelf:"center",
    
        
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
       

    }
})