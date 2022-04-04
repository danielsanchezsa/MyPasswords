
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import AccountsList from '../components/accountsList';
import {Alert, Modal} from 'react-native';
import AddAccountModal from './add_account_modal';


export default function IndexScreen(props){

  const [modalVisible, setModalVisible] = useState(false);

      return (
        <View style={{
            flex:1,
        }}>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         <AddAccountModal dismiss={setModalVisible}></AddAccountModal>
           </View>
        </View>
      </Modal>


        <AccountsList/>

        <TouchableOpacity 
        
        onPress={()=>{
          setModalVisible(true)
        }}
        style={styles.floatingButton}
        
        >
        <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
       
        </View>
        )
} 

const styles = StyleSheet.create({

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

    
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
   
   
  },
  floatingButtonText:{
    fontSize:28,
    fontWeight:"bold"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})