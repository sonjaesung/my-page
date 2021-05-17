import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import '../css/AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div className="aboutMeDiv">
          <div className="profile">
            <div className="aboutMeTitle">
              <span>자기 소개서</span>
            </div>
            <div className="personalInfo">
              <div className="photo">
                <img
                  className="photoImg"
                  src={require('../img/20190207_183148.jpg')}
                />
              </div>
              <div className="myData">
                <div>
                  <span className="name">손재성</span>
                  <span className="birthday">1992.04.07 (29세)</span>
                  <span className="gender">남</span>
                </div>
                <div className="myAddress">
                  <span>loki92@naver.com</span>
                  <span>010-2689-2631</span>
                  <span>010-2689-2631</span>
                  <div className="address">
                    <span>(05813) 서울 송파구 송파대로8길</span>
                  </div>
                </div>
                <div className="strongPoint">
                  <strong>핵심역량</strong>
                  <div className="strongPointList">
                    {`React.js, React Native, React Native Web
Node.js, javascript, html, ejs, jquery
My-Sql`}
                  </div>
                </div>
              </div>
              <div className="dashboard">
                <ul>
                  <li>
                    <strong>학력사항</strong>
                    <p className="dashbordDetail">한국IT직업전문학교</p>
                  </li>
                  <li>
                    <strong>경력사항</strong>
                    <p className="dashbordDetail">경력 2년 7개월</p>
                  </li>
                  <li>
                    <strong>희망연봉</strong>
                    <p className="dashbordDetail">4,000 ~ 5,000만원 </p>
                    <p></p>
                  </li>
                  <li>
                    <strong>희망근무지/근무형태</strong>
                    <p className="dashbordDetail">
                      서울 강남, 잠실, 송파, 성동
                    </p>
                    <p>정규직</p>
                  </li>
                  <li>
                    <strong>희망직종</strong>
                    <p className="dashbordDetail">Web 개발자, DBA</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="school">
            <div className="schoolTitle">
              <span>학력</span>
            </div>
            <div className="schoolBody">
              <table>
                <thead>
                  <tr>
                    <th>재학기간</th>
                    <th>구분</th>
                    <th>학교명(소재지)</th>
                    <th>전공</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2008.03 ~ 2011.02</td>
                    <td>졸업</td>
                    <td>방산고등학교</td>
                    <td>이과계열</td>
                  </tr>
                  <tr>
                    <td>2012.03 ~ 2017.02</td>
                    <td>졸업</td>
                    <td>한국IT직업전문학교 (서울)</td>
                    <td>게임프로그래밍</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="myself">
            <div className="myselfTitle">
              <span>자기 소개</span>
            </div>
            <div className="myselfBody">
              {`-성장 과정-
삶을 사는 동안 가장 기억에 남는 일은 두 가지가 있습니다.
첫째는 초등학교 때부터 매우 심하게 앓던 아토피를 완치한 것입니다.
너무 고통스럽고 힘들어서 죽을까 까지 생각할 정도였습니다. 아무리 약을 바르고 민간요법을 다 동원해도 나아질 조짐이 보이지 않아서 최후의 방법으로 산에 들어가서 지냈습니다. 중학교 여름방학 동안 강원도 민둥산에서 기림산방이라는 프로젝트를 진행하였습니다.
3주 동안 산에서 지내면서 따뜻한 물만 마시고 등산도 하고 여러 가지를 하는 프로젝트였는데 이 일은 정말 죽을 정도로 힘이 들었습니다. 다행히도 3주가 지났을 때 아토피는 거짓말처럼 완치가 되었고 지금은 매우 건강한 상태입니다.
덕분에 힘든 일이 있을 때면 "아 이때는 더 많이 힘들었지" 하고 버틸 수 있는 기준점이 된듯합니다.
두 번째로 유럽여행입니다.
태어나서 처음 나가 본 해외여행은 모든 것이 신기하고 즐거웠습니다. 디테일한 계획이 부족해서 많이 걷고 대중교통도 그때그때 이용하고 잘 되지 않는 영어로 의사소통도 하며 이게 정말 즐거운 삶이구나 라는 걸 느낀 여행 이였습니다. 아무래도 말이 통하지 않다보니 임기응변도 많이 늘었던 것 같고 또 가고 싶다는 생각이 끊임없이 들면서 더 열심히 일을 해야겠다는 투지를 불태우는 원인이 되었습니다. 너무 즐거운 기억만 가득해서 일년에 한번씩 나가기 위해 노력중입니다.


-재학중 보유기술 활용 사례-
학기중 활용 내역은 너무 오래 지난 일이어서 적지않으려하였지만 C/C++ 언어도 사용해 보았다고 전달하기위해 짧게 적겠습니다.
2017년 2월 한국 IT 직업전문학교 졸업하였습니다.
졸업 작품으로 만든 프로젝트는 Unity 프로그램과 오큘러스3D, C++/C# 을 이용하였습니다.
프로젝트 팀을 3번이나 진행해서 팀원들과의 의사소통이 원활합니다.
다른과의 팀원들과 호흡도 좋고 불화가 없는 것이 장점입니다.
최종적으로 G-Star 에 출시하여 좋은 반응을 많이 보였습니다.


-재직중 보유기술 활용 사례-
졸업이후 (주)에프앤아이 에서 약 2년 반 동안 재직을 하였습니다. 처음 취직은 Unity Client 로 하였으나 6개월정도 Unity 작업을 진행하고 회사측의 권유로 웹 프로그래밍을 병행하게 되었습니다.
사내에 웹을 다루는 사람이 없다보니 혼자 검색해가며 주먹구구식으로 익힌감이 많은데 어떻게든 구현은 하지만 기초가 부족하다는걸 많이 느겼습니다. 그래서 기초공부를 하면서 영상강의같은걸 찾아보았습니다. 가장 애용한 강의는 Nomad Coders 입니다. 클론코딩이라는건 생각보다 재미있어서 조금더 흥미롭게 진행한것 같습니다.
재직중에는 node.js 의 express 모듈과 javascript, jquery를 이용하여 폐쇄망의 웹서버에서 운용하는 웹 페이지를 제작하였습니다. 해당 컨텐츠를 진행한 회원들의 관리, 컨텐츠 진행현황, 기록, 결과 등 이용자들의 데이터를 관리하는 기능에 주를 다루었습니다.
관리자의 페이지에서는 모든 이용자에대한 조회가 가능하도록 제작하였고 db는 mySql 을 이용하였습니다. 이용자들의 데이터를 기록할 수 있도록 제작한 부분도 있었습니다.
해당 프로젝트는 강남세브란스병원에서 임상실험까지 완료하였습니다.
웹 프로그래밍쪽에 더 흥미를 느끼고 웹 프로그래머로 이직을 하게되었습니다.

이직한 회사는 (주)자버 라는 곳이고 회사가 성수에서 공덕으로 이사를하여 3개월만 재직하게되었습니다.
재직하는동안에는 React Hooks 를 이용하여 웹 프로그래밍을 진행하였습니다.
인사솔루션을 제작하는 곳이였고 이용자 게시판과 관리자쪽 페이지를 담당하였습니다.

이후 엠서클에 다시 취직하여 쇼핑몰 페이지 제작에 참여하였습니다.
node.js 와 jquery 를 이용하여 만들기 시작하였으나 팀의 해체되어 3개월 재직후 다시 이직하게 되었습니다.

마지막으로 딥노이드 DEEP:STORE 의 프론트엔드 담당자로 재직했었습니다.
프론트엔드를 담당하여 작업을 했습니다. 백엔드 개발자 한명과 본인 두명이서 개발을 진행했습니다.
프론트는 react, jhipster, react hook 등을 사용했습니니다.


-추신-
학점은행제 151학점 이수로 올해 4월 학사학위를 취득하였습니다.
의도치않게 1년사이에 회사를 많이 이직하게되었습니다. 처음 회사에서 재직한 기간을 보시면 아시겠지만 이렇게 자주 옮겨다니는것은 저로서도 원하지않습니다. 이번에 입사하게되면 꼭 길게 다니고싶습니다.
              `}
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
    overflow: 'scroll',
  },
});

export default AboutMe;
