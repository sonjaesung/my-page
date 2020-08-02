import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Link} from 'react-router-dom';

import '../css/Career.css';

class Career extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div className="careerDiv">
          <div className="careerTitle">
            <span>경력기술서</span>
          </div>
          <div className="careerBody">
            <table className="careerTable">
              <thead>
                <tr>
                  <th>근무기간</th>
                  <th>회사명</th>
                  <th>부서/직급/직책</th>
                  <th>지역/직종</th>
                  <th>연봉</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">
                    2019.10.10 ~ 2019.12.31
                    <br />
                    (3개월)
                  </td>
                  <td>㈜자버</td>
                  <td>개발팀 / 개발자</td>
                  <td>서울 / 웹개발</td>
                  <td>3,200만원</td>
                </tr>
                <tr>
                  <td colSpan="4">
                    React.js 를 이용해여 웹페이지 코딩을 하였습니다.
                    <br />
                    React 는 hook 을 이용하여 작성하였습니다.
                    <br />
                    Ant Design을 이용하여 프론트 작업을 하였습니다.
                    <br />
                    게시판쪽 작업을 담당하였고 이용자들과 관리자가 소통하고 질의
                    문답을 할 수 있도록 게시판 작업 및 개선에 참여하였습니다.
                    <br />
                    사내 관리자 페이지에 해당하는 부분도 담당하였습니다.
                    <br />
                    코드 형상관리는 git 을 이용하였습니다.
                    <br />
                    이직하려는 사유는 회사가 멀리 이사를 갔기 때문입니다.
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">
                    2017.04.24 ~ 2019.06.26
                    <br />
                    (2년 3개월)
                  </td>
                  <td>㈜에프앤아이</td>
                  <td>기술연구소 / 연구원</td>
                  <td>판교 / 시스템개발</td>
                  <td>2,600만원</td>
                </tr>
                <tr>
                  <td colSpan="4">
                    Unity 클라이언트 프로그래머로 취직을 했지만 Unity VR작업
                    뿐만 아니라 다양한 업무를 하였습니다.
                    <br />
                    cshtml을 이용한 웹페이지 제작과 웹서버 연동작업을
                    하였습니다.
                    <br />
                    차후 프로젝트 부터는 node.js를 이용한 웹페이지 웹서버 연동
                    작업을 하였습니다.
                    <br />
                    express 모듈을 활용하였습니다.
                    <br />
                    MS-Sql 을 주로 이용하여 웹서버 db연동 작업을 병행하였습니다.
                    <br />
                    추가로 1년동안 웹서버 프로그래머로 완전 전향하면서 MySql,
                    MariaDB 를 이용한 데이터베이스 작성을 하였습니다.
                    <br />
                    node.js, ejs, jade, jquery 를 이용하여 데이터베이스와
                    웹서버, 웹페이지의 기능및 데이터 연동을 하였습니다.
                    <br />
                    코드 형상관리는 SVN을 이용하였습니다.
                    <br />
                    참여한 프로젝트는 임상시험까지 완료한 상태입니다.
                    <br />
                    임상을 실시한 프로젝트말고도 3개의 프로젝트를 더 하였습니다.
                  </td>
                </tr>
              </tbody>
            </table>
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
    overflow: 'scroll',
  },
});

export default Career;
