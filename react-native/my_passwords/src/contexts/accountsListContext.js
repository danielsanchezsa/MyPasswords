import React, {createContext, useState, useEffect} from 'react'

import Account from '../objects/account';
import firestore from '@react-native-firebase/firestore';

export const AccountsListContext = createContext();

function AccountsListProvider(props){
    const [accounts, setAccounts] = useState([    
        
        new Account({email:"danielsanchez.2000@hotmail.com", userName:"mm"},)
])

function addAccount(account){
    setAccounts([...accounts, account])
}

function editAccount(id, account){
    let _accounts = accounts.filter((el)=>{

        if(el.key === id){
          return false;
        }else{
    
          return true;
        }
      });
    
      setAccounts([..._accounts, account])
}

function deleteAccount(account){
 let newAcc =  accounts.filter((acc)=>{
    if(acc===account){
      return false;
    }else{
      return true;
    }
  });

  setAccounts(newAcc);
}

    return <AccountsListContext.Provider
    value={{accounts, addAccount, editAccount,deleteAccount}}
    
    >{props.children}</AccountsListContext.Provider>

}

export default AccountsListProvider;