import React, {Dispatch, SetStateAction, useState} from "react"
import {
    View,
    TextInput,
    StyleSheet, Text
} from "react-native";
import {GetBookablesArgsInterface} from "../../interfaces/getBookablesArgsInterface";

const CarFilterPanel = (props: {args: GetBookablesArgsInterface, setFilterArgs: Dispatch<SetStateAction<Map<string, string>>>}) => {
    const [carType, setCarType] = useState('');
    const [brand, setBrand] = useState('');

    function setIfNotEmpty(input: string, property: string) {
        props.setFilterArgs(map => {
            if(input !== '')
                map.set( property,`${input}`);
            else
                map.delete( property);
            return map;
        })
    }
    const handleCarTypeChange = (input: string) => {
        setCarType(input)
        setIfNotEmpty(input, 'carType');
    }

    const handleBrandChange = (input: string) => {
        setBrand(input)
        setIfNotEmpty(input, 'brand');
    }

    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <View>
                <Text  style={styles.label}>
                    Car type
                </Text>
                <TextInput
                    maxLength={30}
                    style={styles.inputStyle}
                    placeholder="Car Type"
                    onChangeText={handleCarTypeChange}
                    value={carType}
                />
            </View>
            <View>
                <Text  style={styles.label}>
                    Brand
                </Text>
                <TextInput
                    maxLength={30}
                    style={styles.inputStyle}
                    placeholder="Brand"
                    onChangeText={handleBrandChange}
                    value={brand}
                />
            </View>
        </View>
    );
}

export default CarFilterPanel;

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        marginLeft: 30,
        width: 200,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#e2e2e2',
    },
        label: {
        fontWeight: 'bold', fontSize: 16, backgroundColor: 'white', textAlign: 'center', textAlignVertical: 'center'}
    }
);