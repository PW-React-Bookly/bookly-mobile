import {TouchableOpacity, Text, StyleSheet} from "react-native";
import React from "react";

export default function BookingTypeButton(props: {value: string, selectedValue: string,
    setSelectedValue: (value: string) => void}) {
    return (
        <TouchableOpacity
            key={props.value}
            onPress={() => props.setSelectedValue(props.value)}
            style={[styles.button, props.selectedValue === props.value && styles.selected]}>
            <Text
                style={[
                    styles.buttonLabel,
                    props.selectedValue === props.value && styles.selectedLabel,
                ]}>
                {props.value}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
});