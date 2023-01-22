import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import BookableModal from "./BookableModal";
import {BookableInterface} from "../interfaces/bookableInterface";

export default function BookablesTableItem(props: {bookable: BookableInterface}) {

    const handlePress = () => {
        setModalVisible(true);
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity onPress={handlePress} style={styles.box}>
            <Text style={styles.label}>Item name {props.bookable.description}</Text>
            {modalVisible && <BookableModal bookable={props.bookable} setVisible={setModalVisible}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#0ABAB5',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        padding: 5,
        borderRadius: 4,
    },
    label: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});