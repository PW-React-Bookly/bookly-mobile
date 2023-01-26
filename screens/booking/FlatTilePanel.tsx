import {StyleSheet, Text} from "react-native";
import React from "react";
import {FlatInterface} from "../interfaces/flatInterface";

const FlatTilePanel = (props: {flat: FlatInterface}) => {
    return (
        <Text style={styles.label}>Item name {props.flat.description}</Text>
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