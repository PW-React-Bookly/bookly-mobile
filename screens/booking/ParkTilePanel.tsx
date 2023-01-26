import {StyleSheet, Text} from "react-native";
import React from "react";
import {ParkInterface} from "../interfaces/parkInterface";

const ParkTilePanel = (props: {park: ParkInterface}) => {
    return (
        <Text style={styles.label}>Item name {props.park.description}</Text>
    );
}

export default ParkTilePanel;

const styles = StyleSheet.create({
    label: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 20,
    },
});