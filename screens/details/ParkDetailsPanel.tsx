import {View, Text, FlatList} from "react-native";
import {ParkInterface} from "../interfaces/parkInterface";
import React from "react";

const ParkDetailsPanel = (props: {park: ParkInterface}) => {

    const data = [
        props.park.description,
        props.park.name,
        props.park.pricePerDay,
        `${props.park.latitude}, ${props.park.longitude}`,
        props.park.capacity,
        props.park.security,
        props.park.parkingLotType
    ];
    const names = [
        'Description',
        'Name',
        'Price per Day',
        'Coordinates',
        'Capacity',
        'Security',
        'Parking Lot Type'
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

export default ParkDetailsPanel;