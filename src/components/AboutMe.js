import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

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
                    <span>React.js, React Native, React Native Web</span>
                    <br />
                    <span>Node.js, javascript, html, ejs, jquery</span>
                    <br />
                    <span>My-Sql</span>
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
                    <p className="dashbordDetail">3,200 ~ 4,000만원 </p>
                    <p>(직전 연봉 : 3,200 만원)</p>
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
              -성장 과정- <br />
              삶을 사는 동안 가장 기억에 남는 일이은 두 가지가 있습니다.
              <br />
              첫째는 초등학교 때부터 매우 심하게 앓던 아토피를 완치한 것입니다.
              <br />
              너무 고통스럽고 힘들어서 죽을까 까지 생각할 정도였습니다. 아무리
              약을 바르고 민간요법을 다 동원해도 나아질 조짐이 보이지 않아서
              최후의 방법으로 산에 들어가서 지냈습니다. 중학교 여름방학 동안
              강원도 민둥산에서 기림산방이라는 프로젝트를 진행하였습니다.
              <br />
              3주 동안 산에서 지내면서 따뜻한 물만 마시고 등산도 하고 여러
              가지를 하는 프로젝트였는데 이 일은 정말 죽을 정도로 힘이
              들었습니다. 다행히도 3주가 지났을 때 아토피는 거짓말처럼 완치가
              되었고 지금은 매우 건강한 상태입니다.
              <br />
              덕분에 힘든 일이 있을 때면 "아 이때는 더 많이 힘들었지" 하고 버틸
              수 있는 기준점이 된듯합니다.
              <br />두 번째로 유럽여행입니다.
              <br />
              태어나서 처음 나가 본 해외여행은 모든 것이 신기하고 즐거웠습니다.
              디테일한 계획이 부족해서 많이 걷고 대중교통도 그때그때 이용하고 잘
              되지 않는 영어로 의사소통도 하며 이게 정말 즐거운 삶이구나 라는 걸
              느낀 여행 이였습니다. 아무래도 말이 통하지 않다보니 임기응변도
              많이 늘었던 것 같고 또 가고 싶다는 생각이 끊임없이 들면서 더
              열심히 일을 해야겠다는 투지를 불태우는 원인이 되었습니다. 너무
              즐거운 기억만 가득해서 일년에 한번씩 나가기 위해 노력중입니다.
              <br />
              <br />
              <br />
              -재학중 보유기술 활용 사례-
              <br />
              학기중 활용 내역은 너무 오래 지난 일이어서 적지않으려하였지만
              C/C++ 언어도 사용해 보았다고 전달하기위해 짧게 적겠습니다.
              <br />
              2017년 2월 한국 IT 직업전문학교 졸업하였습니다.
              <br />
              졸업 작품으로 만든 프로젝트는 Unity 프로그램과 오큘러스3D, C++/C#
              을 이용하였습니다.
              <br />
              프로젝트 팀을 3번이나 진행해서 팀원들과의 의사소통이 원활합니다.
              <br />
              다른과의 팀원들과 호흡도 좋고 불화가 없는 것이 장점입니다.
              <br />
              최종적으로 G-Star 에 출시하여 좋은 반응을 많이 보였습니다.
              <br />
              <br />
              <br />
              -재직중 보유기술 활용 사례-
              <br />
              졸업이후 (주)에프앤아이 에서 약 2년 반 동안 재직을 하였습니다.
              처음 취직은 Unity Client 로 하였으나 6개월정도 Unity 작업을
              진행하고 회사측의 권유로 웹 프로그래밍을 병행하게 되었습니다.
              <br />
              사내에 웹을 다루는 사람이 없다보니 혼자 검색해가며 주먹구구식으로
              익힌감이 많은데 어떻게든 구현은 하지만 기초가 부족하다는걸 많이
              느겼습니다. 그래서 최근에는 Nomad Coders 라는 웹 강좌를 이용하여
              공부를 진행중입니다.
              <br />
              재직중에는 node.js 의 express 모듈과 javascript, jquery를 이용하여
              폐쇄망의 웹서버에서 운용하는 웹 페이지를 제작하였습니다. 해당
              컨텐츠를 진행한 회원들의 관리, 컨텐츠 진행현황, 기록, 결과 등
              이용자들의 데이터를 관리하는 기능에 주를 다루었습니다.
              <br />
              관리자의 페이지에서는 모든 이용자에대한 조회가 가능하도록
              제작하였고 db는 mySql 을 이용하였습니다. 이용자들의 데이터를
              기록할 수 있도록 제작한 부분도 있었습니다.
              <br />
              해당 프로젝트는 강남세브란스병원에서 임상실험까지 완료하였습니다.
              <br />웹 프로그래밍쪽에 더 흥미를 느끼고 웹 프로그래머로 이직을
              하게되었습니다.
              <br />
              이직한 회사는 (주)자버 라는 곳이고 회사의 이사로인해서 3개월만
              재직하게되었습니다.
              <br />
              재직하는동안에는 React Hooks 를 이용하여 웹 프로그래밍을
              진행하였습니다. 경험은 해보았으나 React 를 잘 한다고 말하기는
              어려운 상황이라 현재 취미생활로 React 웹을 모바일 해상도에 맞추어
              만들어보고있습니다.
              <br />
              <br />
              <br />
              -포트폴리오-
              <br />
              React 를 이용하여 모바일과 웹 페이지 모두에서 작동 할 수 있도록
              반응형으로 만들어보려 노력하였습니다.
              <br />
              처음에는 클라이언트 부분만으로 돌아가도록 쿠키에 데이터를 저장하여
              불러오는 방식으로 작성하였습니다.
              <br />
              이후 aws 에서 제공하는 1년 무료기간을 이용하여 express 모듈로
              서버를 만들어서 aws 에 배포하였습니다.
              <br />
              Back-end 에서의 작업은 jwt를 이용한 로그인 인증, sequelize를
              이용한 db 모델링과 쿼리연동을 진행하였습니다.
              <br />
              Front-end 에서의 작업은 react hook 을 이용하여 기본적으로
              제작하기위해 노력하였습니다.
              <br />
              axios 를 이용하여 서버 통신을 하였고 open api 연결을 해보기위해
              날씨 데이터를 불러왔습니다.
              <br />
              style 은 css 로 제작하였고 media 쿼리를 이용하여 모바일 화면이
              아닐 경우 크기와 배열 셋팅을 하였습니다.
              <br />
              지금도 지속적으로 업데이트 중이며 그림 파일 업로드기능을 추가할
              예정입니다.
              <br />
              <br />
              <br />
              -추신- <br />
              학점은행제를 통한 학사학위 이상의 학점을 취득하였으나 군휴학 후
              복학과정에서 2학년과목이 1학년 과목으로 이전되어 필수과목 미이수로
              아직 학위를 받지 못하였습니다. <br />
              해당 과목에한해서는 현제 학교측의 배려로 수료중이며 올해 두과목을
              모두 이수하면 내년초 학사학위 예정입니다.
              <br />
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
