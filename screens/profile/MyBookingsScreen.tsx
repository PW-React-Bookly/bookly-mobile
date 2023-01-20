import {StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import BookingTypeButton from "./BookingTypeButton";
import BookingsTable from "./BookingsTable";
import {UserInterface} from "../interfaces/userInterface";
import {BookableType, BookingInterface} from "../interfaces/bookingInterface";
import {GetBookingsArgsInterface} from "../interfaces/getBookingsArgsInterface";
import useGetBookings from "./useGetBookings";
import {prepareDataForValidation} from "formik";

function MyBookingsScreen({navigation}) {

    const [bookings, setBookings] = useState<BookingInterface[]>([]);
    const [args, setArgs] = useState<GetBookingsArgsInterface>({bookableType: BookableType.Flat,
        pageContext: {currentPage: 0, pageSize: 10}});
    const {
        data,
    } = useGetBookings(args);

    useEffect(() => {
        if (args.pageContext.currentPage == 0) {
            setBookings(data);
        } else {
            setBookings(prev => prev.concat(data));
        }
    }, [data]);

    function setBookableType(bookable: BookableType) {
        setArgs(prev => ({bookableType: bookable, pageContext: {pageSize: 10, currentPage: 0}}));
    }
    function fetchData(reset: boolean) {
        if (reset) {
            setArgs(prev => ({pageContext: {pageSize: 10, currentPage: 0}, bookableType: prev.bookableType}));
        } else {
            setArgs(prev => ({pageContext: {pageSize: 10, currentPage: prev.pageContext.currentPage + 1},
                bookableType: prev.bookableType}));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <BookingTypeButton label={"Flats"} value={BookableType.Flat} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Cars"} value={BookableType.Car} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Parking"} value={BookableType.Park} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
            </View>
            <View style={styles.tableContainer}>
                <BookingsTable bookings={bookings} fetchData={fetchData}/>
            </View>
        </View>
    );
}

const mockUsers1: UserInterface[] = [
    {firstName: 'Igor', lastName: 'Faliszewski', email: 'igorfaliszewski.pw.edu.pl', id: 1, isActive: true},
    {firstName: 'Jakub', lastName: 'Borek', email: 'jakubborek.pw.edu.pl', id: 2, isActive: true}
]

const mockBookings: BookingInterface[] = [
    {
        id: 0,
        user: mockUsers1[0],
        bookableType: BookableType.Car,
        bookedFrom: new Date("2001-02-24"),
        bookedUntil: new Date("2002-02-24"),
        totalPrice: 9,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 1,
        user: mockUsers1[1],
        bookableType: BookableType.Flat,
        bookedFrom: new Date("2003-02-24"),
        bookedUntil: new Date("2004-02-24"),
        totalPrice: 13.01,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 2,
        user: mockUsers1[0],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2005-02-24"),
        bookedUntil: new Date("2006-02-24"),
        totalPrice: 0.00,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 3,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 4,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 5,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 6,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 7,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 8,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 9,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 10,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 11,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 12,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
    {
        id: 13,
        user: mockUsers1[1],
        bookableType: BookableType.Park,
        bookedFrom: new Date("2007-02-24"),
        bookedUntil: new Date("2008-02-24"),
        totalPrice: 99.22,
        itemExternalId: "123",
        isCancelled: false
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    tableContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        marginHorizontal: '15%',
        marginVertical: '0.5%'
    },
    row: {
        marginTop: '1%',
        marginBottom: '0.5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default MyBookingsScreen;