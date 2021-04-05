/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const dataSrceen = () => {
    return (
        <View style={styles.centeredView}>
            <Text>8888</Text>
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
});
export default dataSrceen;
