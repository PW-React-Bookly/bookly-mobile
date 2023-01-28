import {StyleSheet, TextInput, View, Text} from "react-native";
import React, {useState} from "react";
import moment from "moment";

export default function DateInput(props : {date: Date, setDate: (Date) => void, label: string}) {

    const [day,setDay] = useState(moment(props.date).date());
    const [month,setMonth] = useState(moment(props.date).month() + 1);
    const [year,setYear] = useState(moment(props.date).year());

    function setConvertedDate(day: number, month: number, year: number) {
        let m =  month <9 ? '0' + (month).toString() : (month).toString();
        let d = day <9 ? '0' + (day).toString() : (day).toString();
        const newDate = moment(year.toString() + "-" + m + "-" + d);
        props.setDate(newDate.toDate())
    }
    function onDayChange(value) {
        const d = value.replace(/[^0-9]/g, '');
        if (d != '') {
            setDay(d);
            setConvertedDate(d, month, year);
        }
    }

    function onMonthChange(value) {
        const d = value.replace(/[^0-9]/g, '');
        if (d != '') {
            setMonth(d);
            setConvertedDate(day, d, year);
        }
    }

    function onYearChange(value) {
        const d = value.replace(/[^0-9]/g, '');
        if (d != '') {
            setYear(d);
            setConvertedDate(day, month, d);
        }
    }

    return (
        <View style={{marginLeft: 20}}>
            <Text  style={{...styles.inputStyle, textAlign: 'center', textAlignVertical: 'center', height: 'auto'}}>
                {props.label}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TextInput
                    maxLength={2}
                    style={styles.inputStyle}
                    placeholder="Day"
                    onChangeText={onDayChange}
                    value={day.toString()}
                />
                <TextInput
                    maxLength={2}
                    style={styles.inputStyle}
                    placeholder="Month"
                    onChangeText={onMonthChange}
                    value={month.toString()}
                />
                <TextInput
                    maxLength={4}
                    style={styles.inputStyle}
                    placeholder="Year"
                    onChangeText={onYearChange}
                    value={year.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 20,
            width: 100,
            height: 40,
            paddingHorizontal: 10,
            borderRadius: 50,
            backgroundColor: '#DCDCDC',
        },
    }
);