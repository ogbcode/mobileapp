import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ButtonGroup, Icon, Text, Button } from '@rneui/base';
import { ITransactionEntry } from '../../types/definitions';
import { showAlert, showDeleteConfirmation } from '../../../../global/tools/show-alert';

type Props = {
    item: ITransactionEntry;
    deleteEntry: Function;
}

const EntryFlatListItem: React.FC<Props> = ({ item, deleteEntry }) => {

    return (
        <View style={styles.inputContainerStyle}>
            <Text style={{ fontSize: 18 }}>Date: {new Date(item.txnYear!, item.txnMonth!, item.txnDay!).toLocaleDateString('en-GB')}</Text>
            <Text style={{ fontSize: 18 }}>Income?: {item.expense ? "No" : "Yes"}</Text>
            <Text style={{ fontSize: 18 }}>Description: {item.description}</Text>
            <Text style={{ fontSize: 18 }}>Amount: {item.amount}</Text>
            <ButtonGroup
                containerStyle={{ backgroundColor: 'skyblue', width: '40%', borderColor: 'skyblue' }}
                buttons={
                    [<Button
                        icon={<Icon
                            name="edit"
                            color="green"
                        />}
                        type="clear"
                        title="Edit"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => showAlert("Info", "Yet to be implemented")}
                    />,
                    <Button
                        icon={<Icon
                            name="delete"
                            color="red"
                        />}
                        type="clear"
                        title="Delete"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => {
                            //deleteEntry(item.id!)
                            showDeleteConfirmation(
                                "About to Delete",
                                "Are you sure that you want to delete this entry?",
                                item.id!,
                                deleteEntry
                            )
                        }}
                    />
                    ]
                }
            />
        </View>
    )
}

export default EntryFlatListItem;

const styles = StyleSheet.create({
    inputContainerStyle: {
        width: '100%',
        padding: 9
    }
});