import {Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {BookableType, BookingInterface} from "../interfaces/bookingInterface";
import CarDetailsPanel from "../bookables/car/CarDetailsPanel";
import FlatDetailsPanel from "../details/FlatDetailsPanel";
import ParkDetailsPanel from "../details/ParkDetailsPanel";
import usePostCancelBooking from "../booking/usePostCancelBooking";
import useGetBookingDetails from "./useGetBookingDetails";

const MyBookingsModal = (props: {booking: BookingInterface, setVisible: (x: boolean)=>void}) => {

    const cancelBooking = usePostCancelBooking();

    const handleCancel = () => {
        cancelBooking(props.booking.id);
        props.setVisible(false);
    }

    const {
        data
    } = useGetBookingDetails({id: props.booking.id, bookableType: props.booking.bookableType})

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
                    <View style={{flexDirection: "row"}}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setVisible(false)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCancel}>
                            <Text style={styles.textStyle}>Cancel reservation</Text>
                        </Pressable>
                    </View>
                    <ScrollView>
                        {(props.booking.bookableType === BookableType.CAR)?
                            <CarDetailsPanel car={data}/>:
                            (props.booking.bookableType === BookableType.FLAT)?
                                <FlatDetailsPanel flat={data}/>:
                                <ParkDetailsPanel park={data}/>
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
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 150,
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
});

export default MyBookingsModal;