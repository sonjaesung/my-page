import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import '../css/Main.css';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div>
          <div className="leftBody">
            <div className="bodyTop">
              <span className="btTitle">Eun Yul</span>
              <br />
              <span className="btJob">
                Web Front-End & Web Back-End Developer
              </span>
              <br />
              <span className="btEmail">loki92@naver.com</span>
            </div>
            <div className="bodyMid" />
            <div className="bodyBot">
              <span className="bbAddr">
                17, Macheon-ro 35-gil, Songpa-gu, Seoul, Republic of Korea
              </span>
              <br />
              <span>Phone 010 2689 2631</span>
              <br />
              <span>Mobile 010 2689 2631</span>
            </div>
          </div>
          <div className="rightBody">
            <div className="bodyTop">
              <span className="btTitle">손재성</span>
              <br />
              <br />
              <span className="btJob">웹 개발 & 데이터베이스</span>
              <br />
              <br />
              <span className="btJob">React</span>
              <br />
              <span className="btJob">React Native</span>
              <br />
              <span className="btJob">React Native Web</span>
              <br />
              <br />
              <span className="btJob">Node</span>
              <br />
              <span className="btJob">javascript</span>
              <br />
              <span className="btJob">html</span>
              <br />
              <span className="btJob">ejs</span>
              <br />
              <span className="btJob">jquery</span>
              <br />
              <br />
              <span className="btJob">My-Sql</span>
            </div>
          </div>
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 12,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingLeft: '180px',
    paddingRight: '180px',
  },
});

export default Main;
