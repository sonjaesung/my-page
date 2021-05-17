import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

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

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">
                    2020.02.03 ~ 2020.04.30
                    <br />
                    (3개월)
                  </td>
                  <td>㈜엠서클</td>
                  <td>개발팀 / 개발자</td>
                  <td>서울 / 웹개발</td>

                </tr>
                <tr>
                  <td colSpan="4" className='carrerContent'>
                    {`
                    프로젝트 : 건기식 모바일 사이트
                    목적 : 지정된 이용자의 상품 구매
                    참여기간 : 2020.02 ~ 2020.04
                    사용기술 : node.js, my-sql, sequelize, jquery, css, javascript, axios, ejs

                    
                    -세부내용-

                    코드 형상관리는 git 을 이용하였습니다.
                    쇼핑몰 페이지 프로트엔드와 백엔드 작업을 진행하였습니다.
                    데이터베이스는 My-Sql을 이용하였습니다. 큰 틀의 데이터베이스는 선임이 작업하고 필요에 의한 필드추가 및 쿼리문 조절을 진행하였습니다.
                    프론트페이지 작업은 메인페이지, 제품목록 페이지, 제품상세 페이지, my페이지, 계좌 페이지, 포인트 및 쿠폰페이지, 장바구니 페이지, 찜리스트 페이지등을 진행하였습니다. 
                    jquery를 이용한 이벤트작업을 진행하였습니다.
                    백엔드 작업은 sequelize를 이용한 데이터베이스 연동작업을 진행하였습니다. 
                    서버는 node.js 의 express 모듈을 이용하였습니다.

                    
                    `}
                    <span className="reson">퇴사 사유 : </span> 회사와의 합의하에 퇴사하게되었습니다.
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2">
                    2019.10.10 ~ 2019.12.31
                    <br />
                    (3개월)
                  </td>
                  <td>㈜자버</td>
                  <td>개발팀 / 개발자</td>
                  <td>서울 / 웹개발</td>

                </tr>
                <tr>
                  <td colSpan="4" className='carrerContent'>
                    {`
                    프로젝트 : Jober 인사솔루션
                    목적 : 유저 게시판 및 관리자 페이지 개선
                    참여기간 : 2019.10 ~ 2019.12
                    사용기술 : react.js, node.js, my-sql, sequelize, jquery, css, javascript, antDesign

                    
                    -세부내용-

                    코드 형상관리는 git 을 이용하였습니다.
                    React Hook을 이용하여 프론트 페이지 작업을 하였습니다.
                    인사솔루션 페이지의 이용자 게시판 페이지와 자유게시판, 노무사게시판 등을 개선하였고 관리자 페이지 개선을 진행하였습니다.
                    프론트 작업의 폼은 Ant Design을 이용하였습니다.
                    백엔드 작업은 sequelize를 이용하여 데이터베이스 작업을 하였습니다.

                    
                    `}
                    <span className="reson">퇴사 사유 : </span> 회사가 성수에서
                    공덕으로 이전하였습니다.
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

                </tr>
                <tr>
                  <td colSpan="4" className='carrerContent'>
                    {`
                    프로젝트 : 자살예방 프로젝트
                    목적 : 우울증 치료 및 정신치료
                    참여기간 : 2017.10 ~ 2019.06
                    사용기술 : unity, winform, ejs, node.js, my-sql, jquery, css, javascript

                    
                    -세부내용-

                    Unity를 이용하여 자살예방에 관련되어있는 컨텐츠 제작을 하였습니다. 
                    해당 컨텐츠는 강남세브란스병원의 시나리오를 바탕으로 제작하였습니다. 
                    모바일에서 볼수 있는 VR 컨텐츠와 웹에서 볼수 있는 VR 컨텐츠를 제작하였습니다.

                    웹 작업은 node.js를 이용하였습니다. 
                    express 모듈을 이용하여 웹서버를 개설하였고 My-Sql을 이용하여 데이터베이스 작업을 하였습니다. 
                    외주분과 함께 작업을 진행하였으며 프론트엔드 확장자는 ejs를 활용하였습니다.

                    jquery를 이용하여 필요 이벤트작업을 진행하였고 강남세브란스병원에 최종적으로 임상 테스트를 진행하였습니다.
                    제작한 웹 페이지는 마지막에 winform 으로 감싸서 배포하였습니다.

                    
                    `}
                    <span className="reson">퇴사 사유 : </span> 개인적인
                    사정으로 퇴사하게되었습니다.
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
