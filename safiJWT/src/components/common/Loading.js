import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = ({size}) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator />
    </View>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12,
  }
}

export { Loading };