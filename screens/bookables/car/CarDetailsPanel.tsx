import {View, Text, FlatList} from "react-native";
import {CarInterface} from "./carInterface";
import React from "react";

const CarDetailsPanel = (props: {car: CarInterface}) => {

    const data = [
        props.car.model?.name,
        props.car.model?.carType,
        props.car.dayPrice,
        props.car.model?.fuelType,
        props.car.model?.isGearBoxAutomatic? 'Yes':'No',
        props.car.model?.numberOfDoors,
        props.car.model?.numberOfSeats,
        props.car.model?.trunkCapacity,
        props.car.model?.horsePower,
        props.car.color,
    ];
    const names = [
        'Model',
        'Car Type',
        'Day Price',
        'Fuel Type',
        'Automatic Gearbox',
        'Number of Doors',
        'Number of Seats',
        'Trunk Capacity',
        'Horse Power',
        'Color',
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

export default CarDetailsPanel;