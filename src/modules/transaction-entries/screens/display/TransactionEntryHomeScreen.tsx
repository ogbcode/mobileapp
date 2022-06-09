import React, { useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { DisplayOptions } from '../../types/definitions';
import { transformEntriesToDateSections } from '../../services/transaction-entry.service';
import EntryFlatList from './EntryFlatList';
import Spreadsheet from '../settings/Spreadsheet';
import { TransactionEntryContext } from '../../contexts/Contexts';
import EntrySectionList from './EntrySectionList';

const TransactionEntryHomeScreen: React.FC = () => {

    const transactionEntryContext = useContext(TransactionEntryContext);

    const {
        transactionEntries,
        settings,
        deleteEntry,
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
            case DisplayOptions.FLAT_LIST: return <EntryFlatList entries={transactionEntries} deleteEntry={deleteEntry} />
            case DisplayOptions.SPREADSHEET: return <Spreadsheet entries={transactionEntries} deleteEntry={deleteEntry} />
            default: return <EntrySectionList entriesInDateSections={getEntriesInDateSections} deleteEntry={deleteEntry} />
        }
    }

    return (
        <View style={styles.container}>
            {/* Display entries as already predetermined in the function defined before return above, named displayEntries. Check it out again */}
            {displayEntries()}
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
