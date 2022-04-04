import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from "react";
import AccountTile from './accountTile';
import Account from '../objects/account'
import { AccountsListContext } from '../contexts/accountsListContext';


export default function AccountsList (props){
    const {accounts} = useContext(AccountsListContext);

 
    return (
        <FlatList
        style={styles.listStyle}
        data={accounts}
        keyExtractor = {item => Math.random()}
        renderItem={(item)=>{
           return(
            <AccountTile account={item.item}/>
           )
        }}
        
        />

    )
};

const styles = StyleSheet.create({
    listStyle :{
        flex:1,
    }
})