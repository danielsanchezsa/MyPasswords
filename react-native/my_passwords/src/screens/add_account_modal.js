
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useContext,useState } from 'react'
import CustomTextInput from '../components/customTextInput';
import Account from '../objects/account';
import { AccountsListContext } from '../contexts/accountsListContext';

export default function AddAccountModal(props) {

    const {accounts,addAccount} = useContext(AccountsListContext);
    const [account, setAccount] = useState(new Account({email:"daniel"}))

    function setParam(key,value){
        let newAccount = account;
        newAccount[key] = value;
        setAccount(newAccount);
        console.log(account)
    }
    
    return(
    <View>
   
    <CustomTextInput fun = {setParam} placeholder={"email"}></CustomTextInput>
    <CustomTextInput fun = {setParam} placeholder={"userName"}></CustomTextInput>
    <CustomTextInput fun = {setParam} placeholder={"phoneNumber"}></CustomTextInput>
    <CustomTextInput fun = {setParam} placeholder={"imgURL"}></CustomTextInput>
    <CustomTextInput fun = {setParam} placeholder={"site"}></CustomTextInput>
    <CustomTextInput fun = {setParam} placeholder={"password"}></CustomTextInput>

    <View style={{   flex:10,
        flexDirection:"row",}}>


        <TouchableOpacity
        onPress={
           ()=>{
               addAccount(account)
            props.dismiss(false);
           }
        }
        style={styles.button}
        >
        <Text>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={
           ()=>{
            props.dismiss(false);
           }
        }
        style={[styles.button, {backgroundColor:"red"}]}
        >
        <Text>Cancel</Text>
        </TouchableOpacity>
    
    </View>


    </View>
)

}

const styles = StyleSheet.create({

    button:{
        backgroundColor:"orange",
        borderRadius:20,
       paddingVertical:10,
       flex:1,
       marginHorizontal:10,
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