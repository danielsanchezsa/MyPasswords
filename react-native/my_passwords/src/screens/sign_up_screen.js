import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect , useState} from 'react'

import CustomTextInput from '../components/customTextInput';
import { withNavigation } from 'react-navigation';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import firebaseM from "../objects/firebase";

export default withNavigation( function SignUpScreen(props) {




   let auth = getAuth(firebaseM);
   let [isLoggedIn, setIsLogged] = useState(false);
   let [alreadyUser, setAlreadyUser] = useState(false)

   onAuthStateChanged(auth,(user)=>{
    

     if(user){
      setIsLogged(true)
      props.navigation.replace('IndexScreen')
     }else{
      setIsLogged(false)
     }
   })

   
   props.navigation.setParams({title:"jjjj"})

   if(isLoggedIn){

    return null;
   }else{
  

    return(
      <View>

      <Text> {alreadyUser ? "Login": "Sign Up"}</Text>


      <CustomTextInput placeholder={"mail"}></CustomTextInput>
      <CustomTextInput placeholder={"PASSWORD"}></CustomTextInput>
     
     
      <View style={{marginHorizontal:10, marginVertical:20}}>
      <TouchableOpacity
      onPress={
         ()=>{
          props.navigation.replace('IndexScreen')
         }
      }
      style={styles.button}
      >
      <Text>Accept</Text>
      </TouchableOpacity>


      </View>
   


      </View>
  )
   }


})



const styles = StyleSheet.create({


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