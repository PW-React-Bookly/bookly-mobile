import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {BookableType} from "../interfaces/bookingInterface";
import CarDetailsPanel from "../details/CarDetailsPanel";
import FlatDetailsPanel from "../details/FlatDetailsPanel";
import ParkDetailsPanel from "../details/ParkDetailsPanel";
import {BookableInterface} from "../interfaces/bookableInterface";
import {FlatInterface} from "../interfaces/flatInterface";

const BookableModal = (props: {bookable: BookableInterface, setVisible: (x: boolean)=>void}) => {

    const fromDateInput: Date = new Date(Date.now());
    const untilDateInput: Date = new Date(Date.now() + 1000000000);

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
                        <TextInput
                            style={styles.input}
                            onChangeText={()=>{}}
                            value={fromDateInput.toString()}
                            placeholder="Book From"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={()=>{}}
                            value={untilDateInput.toString()}
                            placeholder="Book To"
                            keyboardType="default"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {}}>
                            <Text style={styles.textStyle}>Book</Text>
                        </Pressable>
                    </View>
                    <View>
                        {(props.bookable.bookableType === BookableType.Car)?
                            <CarDetailsPanel itemExternalId={props.bookable.itemExternalId} bookableType={BookableType.Car}/>:
                            (props.bookable.bookableType === BookableType.Flat)?
                                <FlatDetailsPanel itemExternalId={props.bookable.itemExternalId} bookableType={BookableType.Flat}/>:
                                <ParkDetailsPanel itemExternalId={props.bookable.itemExternalId} bookableType={BookableType.Park}/>
                        }
                    </View>
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