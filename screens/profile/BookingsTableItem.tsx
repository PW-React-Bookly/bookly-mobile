import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function BookingsTableItem(props: {data: string}) {
    return (
        <TouchableOpacity style={styles.box}>
            <Text style={styles.label}>
                {props.data}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: '#0ABAB5',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        borderRadius: 4,
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
    },
});