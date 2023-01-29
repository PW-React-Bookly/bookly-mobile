import {View, Text, FlatList} from "react-native";
import FlatInterface from "../bookables/flat/flatInterface";
import React from "react";

const FlatDetailsPanel = (props: {flat: FlatInterface}) => {

    const data = [
        props.flat.description,
        props.flat.country,
        props.flat.address,
        props.flat.town,
        props.flat.capacity,
        props.flat.rooms,
        props.flat.footage,
        props.flat.contactInfo,
        props.flat.price,
    ];
    const names = [
        'Description',
        'Country',
        'Address',
        'Town',
        'Capacity',
        'Rooms',
        'Footage',
        'Contact',
        'Price per Day',
    ]

    return (
        <View>
            <FlatList
                style={{height: '10px'}}
                data={data.map((item, index) => ({title: names[index], value: data[index]}))}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => <Text>{`${item.title}: ${item.value}`}</Text>}
            />
        </View>
    );
}

export default FlatDetailsPanel;