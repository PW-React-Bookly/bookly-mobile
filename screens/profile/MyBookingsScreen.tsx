import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import BookingTypeButton from "./BookingTypeButton";
import BookingsTable from "./BookingsTable";
import {BookableType, BookingInterface} from "../interfaces/bookingInterface";
import {GetBookingsArgsInterface} from "../interfaces/getBookingsArgsInterface";
import useGetBookings from "./useGetBookings";

function MyBookingsScreen({navigation}) {

    const flatListRef = useRef<FlatList>()
    const [bookings, setBookings] = useState<BookingInterface[]>([]);
    const [args, setArgs] = useState<GetBookingsArgsInterface>({bookableType: BookableType.FLAT,
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
        setArgs({bookableType: bookable, pageContext: {pageSize: 10, currentPage: 0}});
        if(flatListRef.current.props.data.length > 0)
            flatListRef.current.scrollToIndex({animated: true, index:0})
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
                <BookingTypeButton label={"Flats"} value={BookableType.FLAT} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Cars"} value={BookableType.CAR} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
                <BookingTypeButton label={"Parking"} value={BookableType.PARK} selectedValue={args.bookableType}
                                   setSelectedValue={setBookableType}/>
            </View>
            <View style={styles.tableContainer}>
                <BookingsTable bookings={bookings} fetchData={fetchData} flatListRef={flatListRef}/>
            </View>
        </View>
    );
}

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