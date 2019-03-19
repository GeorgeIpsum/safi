import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>We have {this.props.tests.current.length} strings!</Text>
        <Button
          title="Add some strings"
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
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
});

const mapStateToProps = (state)  => {
  const { tests } = state;
  return { tests };
};

export default connect(mapStateToProps)(Home);