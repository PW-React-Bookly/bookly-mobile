import {Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {BookableType} from "../interfaces/bookingInterface";
import CarDetailsPanel from "../bookables/car/CarDetailsPanel";
import FlatDetailsPanel from "../details/FlatDetailsPanel";
import ParkDetailsPanel from "../details/ParkDetailsPanel";
import {BookableInterface} from "../interfaces/bookableInterface";
import usePostCarBooking from "./carly/usePostCarBooking";
import usePostFlatBooking from "./flatly/usePostFlatBooking";
import DateInput from "./filter/DateInput";
import moment from "moment";
import usePostParkBooking from "./parkly/usePostParkBooking";
import {CarInterface} from "../bookables/car/carInterface";
import FlatInterface from "../bookables/flat/flatInterface";
import {ParkInterface} from "../interfaces/parkInterface";

const BookableModal = (props: {bookable: BookableInterface, setVisible: (x: boolean)=>void}) => {

    const postCarBooking = usePostCarBooking();
    const postFlatBooking = usePostFlatBooking();
    const postParkBooking = usePostParkBooking();
    const [dateFrom, setDateFrom] = useState(moment().toDate());
    const [dateTo, setDateTo] = useState(moment().add(1, "days").toDate())

    const handleBooking = () => {
        if(props.bookable.bookableType === BookableType.CAR)
            postCarBooking(props.bookable.id, dateFrom, dateTo);
        if(props.bookable.bookableType === BookableType.FLAT)
            postFlatBooking(props.bookable.id, dateFrom, dateTo);
        if(props.bookable.bookableType === BookableType.PARK)
            postParkBooking(props.bookable.id, dateFrom, dateTo);
        props.setVisible(false);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setVisible(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setVisible(false)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                        <DateInput date={dateFrom} setDate={setDateFrom} label={'From'}/>
                        <DateInput date={dateTo} setDate={setDateTo} label={'To'}/>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleBooking}>
                            <Text style={styles.textStyle}>Book</Text>
                        </Pressable>
                    </View>
                    <ScrollView>
                        {(props.bookable.bookableType === BookableType.CAR)?
                            <CarDetailsPanel car={props.bookable as CarInterface}/>:
                            (props.bookable.bookableType === BookableType.FLAT)?
                                <FlatDetailsPanel flat={props.bookable as FlatInterface}/>:
                                <ParkDetailsPanel park={props.bookable as ParkInterface}/>
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
        height: '90%',
        width: '90%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'flex-start'
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default BookableModal;