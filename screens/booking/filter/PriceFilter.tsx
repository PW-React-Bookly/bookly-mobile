import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export default function PriceFilter(props: {from: number, to: number, setFrom: (number) => void, setTo: (number) => void, label: string}) {

    function onFromChange(value) {
        const d = value.replace(/[^0-9]/g, '');
        if (d != '') {
            props.setFrom(d);
        }
    }

    function onToChange(value) {
        const d = value.replace(/[^0-9]/g, '');
        if (d != '') {
            props.setTo(d);
        }
    }

    return (
        <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, backgroundColor: 'white', textAlign: 'center', textAlignVertical: 'center'}}>
                {props.label}
            </Text>
            <View  style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <TextInput
                    maxLength={8}
                    style={styles.inputStyle}
                    placeholder="Price from"
                    onChangeText={onFromChange}
                    value={props.from.toString()}
                />
                <TextInput
                    maxLength={8}
                    style={styles.inputStyle}
                    placeholder="Price to"
                    onChangeText={onToChange}
                    value={props.to.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#e2e2e2',
    },
    }
);