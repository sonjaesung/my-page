import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import '../css/History.css';

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div id="history">
          {' '}
          <h2>2019</h2>{' '}
          <div className="list_right">
            {' '}
            <span />{' '}
            <div>
              {' '}
              <ul>
                {' '}
                <li>
                  {' '}
                  <dl>
                    {' '}
                    <dt>11.24</dt> <dd>on sunday 티스토리 블로그 개설</dd>{' '}
                  </dl>{' '}
                  <dl>
                    {' '}
                    <dt>11.24</dt> <dd>첫 포스팅 시작함</dd>{' '}
                  </dl>{' '}
                </li>{' '}
                <li>
                  {' '}
                  <dl>
                    {' '}
                    <dt>11.25</dt> <dd>on sunday 바람개비마을 포스팅</dd>{' '}
                  </dl>{' '}
                  <dl>
                    {' '}
                    <dt>11.26</dt> <dd>서촌 준수방키친 포스팅</dd>{' '}
                  </dl>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </div>{' '}
          <h2>2019</h2>{' '}
          <div className="list_left">
            {' '}
            <div>
              {' '}
              <ul>
                {' '}
                <li>
                  {' '}
                  <dl>
                    {' '}
                    <dd>on sunday 티스토리 블로그 개설</dd> <dt>11.24</dt>{' '}
                  </dl>{' '}
                  <dl>
                    {' '}
                    <dd>첫 포스팅 시작함</dd> <dt>11.24</dt>{' '}
                  </dl>{' '}
                </li>{' '}
                <li>
                  {' '}
                  <dl>
                    {' '}
                    <dd>on sunday 바람개비마을 포스팅</dd> <dt>11.25</dt>{' '}
                  </dl>{' '}
                  <dl>
                    {' '}
                    <dd>서촌 준수방키친 포스팅</dd> <dt>11.26</dt>{' '}
                  </dl>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <span />{' '}
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

export default History;
