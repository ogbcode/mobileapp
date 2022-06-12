import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Badge, Text } from '@rneui/base';

import EntryFlatListItem from './EntryFlatListItem';
import { ITransactionEntry } from '../../types/definitions';

type Props = {
    entries: ITransactionEntry[] | [] //array of entries
}

const EntryFlatList: React.FC<Props> = ({ entries }) => {

    return (
        <FlatList
            style={{ width: '100%', padding: 3, backgroundColor: 'skyblue' }}
            data={entries}
            renderItem={({ item }) => (
                <EntryFlatListItem item={item} />
            )}
            ListHeaderComponent={
                () => (
                    <View>
                        <Text h3 style={[styles.inputContainerStyle, { backgroundColor: "lightblue" }]}>Entries so far... <Badge status="primary" value={entries.length} /></Text>
                    </View>
                )}

            /*
            ListFooterComponent = {
                ()=> (<View style={{backgroundColor:'#ccc', paddingBottom: 30, paddingTop: 3,alignContent:"flex-start"}}><Text style={{fontSize: 15, fontStyle: "italic"}}>Copyright: Pius Onobhayedo</Text></View>)
            }
            */

            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={
                //this component will be rendered in between items
                () => {
                    return (<View style={{ backgroundColor: '#ccc', height: 3, width: '100%' }} />)
                }
            }
        />
    )
}

EntryFlatList.defaultProps = {
    entries: []
}

export default EntryFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 16, color: 'black' },
    inputContainerStyle: {
        width: '100%',
        padding: 3
    }
});