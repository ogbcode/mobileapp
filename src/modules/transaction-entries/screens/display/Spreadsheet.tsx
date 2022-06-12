import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/base';
import { ITransactionEntry } from '../../types/definitions';


type Props = {
    entries: ITransactionEntry[] //array of entries
}

const Spreadsheet: React.FC<Props> = ({ entries }) => {

    return (
        <View style={styles.container}>
            <Text h4 style={{color: 'red', margin: 12, textAlign: 'center'}}> Apologies - spreadsheet display type is yet to be implemented!</Text>
            <Text h4 style={{color: 'green', margin: 12, textAlign: 'center'}}> Select another format from Settings menu above</Text>
        </View>
    )
}

Spreadsheet.defaultProps = {
    entries: []
}

export default Spreadsheet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 16, color: 'black' },
});