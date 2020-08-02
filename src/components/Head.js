import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Link} from 'react-router-dom';

import '../css/Head.css';

class Head extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div>
          <span className="headTitle">
            <Link to="/" className="titleLink">
              Eun Yul
            </Link>
          </span>
          <div className="innerHead">
            <ul className="navUl">
              <li className="navLi">
                <Link to="/about-me" className="liLink">
                  자기소개서
                </Link>
              </li>
              <li className="navLi">
                <Link to="/history" className="liLink">
                  연혁
                </Link>
              </li>
              <li className="navLi">
                <Link to="/portfolio" className="liLink">
                  포트폴리오
                </Link>
              </li>
              <li className="navLi">
                <Link to="/career" className="liLink">
                  경력기술서
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#800080',
    paddingLeft: '180px',
    paddingRight: '180px',
  },
});

export default Head;
