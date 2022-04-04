
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useContext, useState } from 'react'
import Account from '../objects/account';


export default function CustomTextInput(props) {

    const [value, setValue] = useState("");

    return(
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChange = {(val)=>{

            
            setValue(val.target.value)
            

            props.fun(props.placeholder, val.target.value)
        }}
        
        
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:10,
        marginVertical:10,
        padding:10,
        fontSize:18,
    }
})