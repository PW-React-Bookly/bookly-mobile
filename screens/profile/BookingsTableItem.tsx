import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {BookingInterface} from "../interfaces/bookingInterface";
import {dateToString} from "../../utils/dateToString";

export default function BookingsTableItem(props: {booking: BookingInterface}) {
    return (
        <TouchableOpacity style={styles.box}>
            <Text style={styles.label}>Item name {props.booking.id}</Text>
            <Text style={styles.label}>From: {dateToString(props.booking.bookedFrom)}</Text>
            <Text style={styles.label}>To: {dateToString(props.booking.bookedUntil)}</Text>
            <Text style={styles.label}>Price: {props.booking.totalPrice}</Text>
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
});