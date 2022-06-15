import React, { useContext, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { DisplayOptions } from '../../types/definitions';
import { transformEntriesToDateSections } from '../../services/transaction-entry.service';
import EntryFlatList from './EntryFlatList';
import Spreadsheet from './Spreadsheet';
import { TransactionEntryContext } from '../../contexts/Contexts';
import EntrySectionList from './EntrySectionList';
import { Text, Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const TransactionEntryHomeScreen: React.FC = () => {

    const transactionEntryContext = useContext(TransactionEntryContext);

    const navigation = useNavigation();

    const {
        transactionEntries,
        settings
    } = transactionEntryContext!

    /**
   * Use memoized called to transform entries to date sections. 
   * As it is a complex operation, it is good to memoize it and
   * give condition in square bracket under which the function
   * will rerun
   */

    const getEntriesInDateSections = useMemo(() => {
        return transformEntriesToDateSections(transactionEntries)
    }, [transactionEntries.values()]);//only run anew if entries in state change. Notice the .values()

    /**
       * Check choice of display and prepare entries for display
       */

    const displayEntries = () => {
        switch (settings) {
            case DisplayOptions.FLAT_LIST: return <EntryFlatList entries={transactionEntries} />
            case DisplayOptions.SPREADSHEET: return <Spreadsheet entries={transactionEntries} />
            default: return <EntrySectionList entriesInDateSections={getEntriesInDateSections}  />
        }
    }

    return (
        <View style={styles.container}>
            {/* Display entries as already predetermined in the function defined before return above, named displayEntries. Check it out again */}
            {displayEntries()}
            <TouchableOpacity
                style={{ height: 20, alignSelf: 'flex-end', top: -20 }}
                onPress={() => navigation.navigate("AddEntryScreen" as never)}>
                <Text><Icon
                    name="add"
                    color="green"
                    size={20}
                    raised={true}
                /></Text>
            </TouchableOpacity>
        </View>
    );
}

export default TransactionEntryHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    }
});
