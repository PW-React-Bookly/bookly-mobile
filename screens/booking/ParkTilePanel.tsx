import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {ParkInterface} from "../interfaces/parkInterface";

const ParkTilePanel = (props: {park: ParkInterface}) => {
    return (
        <View>
            <Text style={{...styles.label, fontWeight: "500"}}>{props.park.name} </Text>
            <Text style={styles.label}>${props.park.pricePerDay} per day </Text>
            <Text style={styles.label}>{props.park.description}</Text>
        </View>
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