import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {BookingInterface} from "../interfaces/bookingInterface";
import {dateToString} from "../../utils/dateToString";
import MyBookingsModal from "./MyBookingsModal";

export default function BookingsTableItem(props: {booking: BookingInterface}) {

    const handlePress = () => {
        setModalVisible(true);
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity onPress={handlePress} style={styles.box}>
            <Text style={{...styles.label, fontWeight: "500"}}>Item name {props.booking.id}</Text>
            <Text style={styles.label}>From: {dateToString(props.booking.bookedFrom)}</Text>
            <Text style={styles.label}>To: {dateToString(props.booking.bookedUntil)}</Text>
            <Text style={styles.label}>Price: {props.booking.totalPrice}$</Text>
            {modalVisible && <MyBookingsModal booking={props.booking} setVisible={setModalVisible}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f5c49d',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        padding: 10,
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