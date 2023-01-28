import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import BookableModal from "./BookableModal";
import {BookableInterface} from "../interfaces/bookableInterface";
import {BookableType} from "../interfaces/bookingInterface";
import FlatTilePanel from "./FlatTilePanel";
import ParkTilePanel from "./ParkTilePanel";
import CarTilePanel from "../bookables/car/CarTilePanel";
import {CarInterface} from "../bookables/car/carInterface";
import {FlatInterface} from "../interfaces/flatInterface";
import {ParkInterface} from "../interfaces/parkInterface";

export default function BookablesTableItem(props: {bookable: BookableInterface}) {

    const handlePress = () => {
        setModalVisible(true);
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity onPress={handlePress} style={styles.box}>
            <View>
                {(props.bookable.bookableType === BookableType.Car)?
                    <CarTilePanel car={props.bookable as CarInterface} />:
                    (props.bookable.bookableType === BookableType.Flat)?
                        <FlatTilePanel flat={props.bookable as FlatInterface}/>:
                        <ParkTilePanel park={props.bookable as ParkInterface}/>
                }
            </View>
            {modalVisible && <BookableModal bookable={props.bookable} setVisible={setModalVisible}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f5c49d',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        padding: 10,
        borderRadius: 4,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});