import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native'
import React, { useContext } from "react";
import Section from '../components/sectionAccountScreen';
import { AccountsListContext } from '../contexts/accountsListContext';
import * as rootNavigation from "../objects/rootNavigation"


export default function AccountScreen(props){

    console.log(props.children.route.params.account)
  
  
    const account = props.children.route.params.account;
    const accountKeys = Object.keys(account);
    const accountValues = Object.values(account)
    const {deleteAccount} = useContext(AccountsListContext);
    
   
    return(
        <View style={{flex:1}}>
        
        <View style={styles.row}>
           <Image style={styles.image} source={account.imgURL}/>
            <Text style={styles.site}>{account.site}</Text>
        </View>

        <FlatList
        keyExtractor={item=>Math.random()}
        renderItem={
            (item)=>{
                if(item.item !== "imgURL" && item.item !== "key" ){
                    return (<Section hint={accountKeys[item.index]} text={accountValues[item.index]} account={account}/>)
                }
              
            }
        }
           data={accountKeys}
        />
      
        <TouchableOpacity 
        
        onPress={()=>{

            deleteAccount(account);
            props.navigation.pop(1);
          
        }}
        style={styles.floatingButton}
        
        >
        <Text style={styles.floatingButtonText}>DELETE</Text>
        </TouchableOpacity>
        
        </View>
    )
};

const styles = StyleSheet.create({
    floatingButton:{
        backgroundColor:"red",
        marginBottom:20,
        marginRight:20,
        borderRadius:100,
        //width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"flex-end",
    
        
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
       
       
      },
      floatingButtonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        paddingHorizontal:5
      },
   
    row:{
        height:"25%",
       // backgroundColor:"yellow",
        flexDirection:"row",
    },
    image:{
        marginLeft:"5%",
        marginTop:"5%",
        resizeMode: 'contain',

        flex:1,
       // backgroundColor:"purple"
    },
    site:{
        alignSelf:"center",
        marginLeft:"5%",
        marginTop:"5%",
        marginRight:100,
        flex:5,
        fontSize:34,
        fontWeight:"bold"
       // backgroundColor:"blue"
    },
 

})