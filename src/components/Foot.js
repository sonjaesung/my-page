import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Foot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <hr />
        <span className="headTitle">footer</span>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Foot;
