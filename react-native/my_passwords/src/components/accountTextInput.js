
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useContext, useState } from 'react'
import { AccountsListContext } from '../contexts/accountsListContext';


export default function AccountTextInput(props) {

    const [value, setValue] = useState("");
    const {accounts,editAccount} = useContext(AccountsListContext);


    function setParam(key,value){
        let newAccount = props.account;
        newAccount[key] = value;
        editAccount(props.account.key, newAccount)
        props.setText(value)
    }
    
 

    return(
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChange = {(val)=>{
            setValue(val.target.value)
            setParam(props.hint, val.target.value)

            

            
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
    
    }
})