import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {CarInterface} from "./carInterface";

const CarTilePanel = (props: {car: CarInterface}) => {
    return (
        <View>
            <Text style={{...styles.label, fontWeight: "500"}}>{props.car.model.name} {props.car.model.brand.name} ({props.car.model.productionYear}) </Text>
            <Text style={styles.label}>${props.car.dayPrice} per day </Text>
            <Text style={styles.label}>{props.car.color}</Text>
        </View>
    );
}

export default CarTilePanel;

const styles = StyleSheet.create({
    label: {
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 20,
    },
});