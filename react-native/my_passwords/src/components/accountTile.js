
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from "react";
import * as rootNavigation from "../objects/rootNavigation"

export default function  AccountTile(props){


    return(
       <TouchableOpacity onPress={
           ()=>{

            rootNavigation.navigate('account', { me: "me",account: props.account})
               
           }
       }>
            <View style={styles.containerStyle}>
            <View style={styles.rowStyle}>
            <Image style={styles.imgStyle} source={props.account.imgURL}/>
                <Text style={styles.siteStyle}>{props.account.site}</Text>
                <Text style={styles.emailStyle}>{props.account.email}</Text>
                <Text style={styles.userNameStyle}>{props.account.userName}</Text>
            </View>
   </View>
       
       </TouchableOpacity>
)}

const styles = StyleSheet.create({

    imgStyle:{
        paddingVertical:20,
        paddingHorizontal:20,
        width:"2%",
    },

    siteStyle:{
       
        fontSize:16,
        fontWeight:"bold"
    },

    emailStyle:{
  
        fontSize:16,
        marginTop:10

    },
    userNameStyle:{
  
        marginTop:20

    },
    rowStyle:{
        flex:10,
        flexDirection:"row",
        justifyContent: "space-around",

    },


  containerStyle:{
    
    padding:20,
    marginHorizontal:15,
    marginVertical:15,
    backgroundColor: 'white',
    borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  
})