import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTest } from './TestActions';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add strings here!</Text>
        {
          this.props.tests.possible.map((test, index) => (
            <Button
              key={ test }
              title={`Add ${ test }`}
              onPress={() => this.props.addTest(index)}
            />
          ))
        }
        <Button
          title="Back home"
          onPress={() => this.props.navigation.navigate('Home')}
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

const mapStateToProps = (state) => { 
  const { tests } = state;
  return { tests };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTest,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Test);