import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {HashRouter, Route} from 'react-router-dom';

import Head from './components/Head';
import Foot from './components/Foot';

import Main from './components/Main';
import AboutMe from './components/AboutMe';
import History from './components/History';
import Portfolio from './components/Portfolio';
import Career from './components/Career';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <View style={styles.container}>
          <Head />
          <Route path="/" component={Main} exact={true} />
          <Route path="/history" component={History} exact={true} />
          <Route path="/about-me" component={AboutMe} exact={true} />
          <Route path="/portfolio" component={Portfolio} exact={true} />
          <Route path="/career" component={Career} exact={true} />
        </View>
      </HashRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282c34',
  },
});

export default App;
