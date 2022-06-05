import 'reflect-metadata';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//import ExamplesHome from './src/modules/examples/ExamplesHome';
import TransactionEntryHome from './src/modules/transaction-entries/TransactionEntryHome';
import { Text } from '@rneui/base';
import useCachedResources from './src/global/hooks/useCachedResources';

const App: React.FC = () => {

  //Using useCachedResources for dataSource loading, while splash screen is on.
  const { isLoadingComplete, dataSource } = useCachedResources();

  //Prepare our conditional display. What we display will depend on whether dataSource is available or not
  const display = () => {
    if (dataSource) {
      return (
        <>
          <TransactionEntryHome dataSource={dataSource} />
          {/*<ExamplesHome dataSource={dataSource} />*/}
        </>
      )
    } else {
      return (
        <Text>
          Cannot get data source
        </Text>
      )
    }
  }

  //Check if loading is complete before returning a view
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {display()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16, color: 'black' },
});

export default App;