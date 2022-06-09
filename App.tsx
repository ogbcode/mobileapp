import 'reflect-metadata';
import React from 'react';
//import ExamplesHome from './src/modules/examples/ExamplesHome';
import TransactionEntryLanding from './src/modules/transaction-entries/TransactionEntryLanding';
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
          <TransactionEntryLanding dataSource={dataSource} />
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
      <>
        {display()}
        {/* Below is just a footer message */}
        <Text style={{ padding: 6, fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>Copyright: Pius Onobhayedo</Text>
      </>
    );
  }
}

export default App;