import {StyleSheet, Text, View} from "react-native";
import React from "react";
import FlatInterface from "../bookables/flat/flatInterface";

const FlatTilePanel = (props: {flat: FlatInterface}) => {
    return (
        <View>
            <Text style={{...styles.label, fontWeight: "500"}}>{props.flat.address} {props.flat.town} </Text>
            <Text style={styles.label}>${props.flat.price} per day </Text>
            <Text style={styles.label}>Capacity: {props.flat.capacity} people</Text>
            <Text style={styles.label}>Rooms: {props.flat.rooms}</Text>
        </View>
    );
}

export default FlatTilePanel;

const styles = StyleSheet.create({
    label: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 20,
    },
});