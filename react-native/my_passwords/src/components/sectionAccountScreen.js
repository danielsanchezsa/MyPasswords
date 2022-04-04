
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import AccountTextInput from './accountTextInput';

export default function Section(props) {

    const [editing, setEditing] = useState(false);

    const [textS, setText] = useState(props.text)

    return(
        <View style={styles.containerStyle}>

        <View style={{flexDirection:"row",justifyContent:"space-between" }}>
            <View>
                <Text >{props.hint}</Text>
              {!editing ?  <Text >{textS}</Text>:
            <AccountTextInput setText={setText} placeholder={props.text} account={props.account} hint={props.hint}></AccountTextInput>
            }
            </View>  
             <View style={styles.buttonsSection}>
                <TouchableOpacity 
                    onPress={()=>{
                        setEditing(!editing)
                    }}
                    style={styles.floatingButton}>
                        <Icon
                        size={"100%"}
                        name='edit'
                        />
                        <Text>Edit</Text>
                </TouchableOpacity>
                

                <TouchableOpacity 
                    onPress={()=>{
                    }}
                    style={[styles.floatingButton , {backgroundColor:"grey"}]}>

                    <Icon
                        size={"100%"}
                        name='copy'
                    />
                    <Text>Copy</Text>
                </TouchableOpacity>
            </View>  
        </View>                   
        </View>
    )
    
}

const styles = StyleSheet.create({

    buttonsSection:{
        
        flexDirection:"row",
    },


    floatingButton:{
        backgroundColor:"orange",
        marginBottom:20,
        marginRight:20,
        borderRadius:100,
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"flex-end",
 
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