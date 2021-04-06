/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
// import {Data} from './dataSrceen';


const scanSrceen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Data/> */}
            <View style={styles.container}>

              <View style={styles.Incontainer}>
                <Image
                   style={styles.icon}
                   source={require('../asset/contract.png')}
                />
              </View>

              <View style={styles.Incontainer}>
                  <Text  style={{fontSize:30}}>รายละเอียด</Text>
              </View>

              <View style={[styles.Incontainer,{ alignSelf: 'flex-start'}]}>
                <Pressable
                    style={[ styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>ปิด</Text>
                </Pressable>
              </View>
            </View>
            <View>
              <Text>555555</Text>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.scan, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
          <View>
            <Text style={[styles.modalInText,{ marginTop:100 }]}>กรุณาแตะ</Text>
            <Text style={[styles.modalInText]}>เพื่อเช็ดยอดเงินคงเหลือ</Text>
          </View>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Incontainer:{
    margin:10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    shadowColor: '#000',
    height: 500,
    width: 800,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scan: {
    padding: 10,
    width: 800,
    height: 500,
  },
  buttonOpen: {
    backgroundColor: '#A9A9A9',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius:6,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalInText: {
    margin: 30,
    textAlign: 'center',
    fontSize: 36,
  },
  icon:{
    width: 50,
    height: 50,
  },
});
export default scanSrceen;
