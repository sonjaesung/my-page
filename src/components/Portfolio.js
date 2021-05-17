import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Link} from 'react-router-dom';

import '../css/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div className="portfoioDiv">
          <div className="simpleData">
            <div className="portfolioTitle">
              <span>Page of Eun Yul</span>
            </div>
            <div className="imgDiv">
              <div className="photo">
                <img className="photoImg" src={require('../img/mypage1.PNG')} />
              </div>
              <div className="photo">
                <img className="photoImg" src={require('../img/mypage2.PNG')} />
              </div>
              <div className="photo">
                <img className="photoImg" src={require('../img/mypage3.PNG')} />
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="portfolioTitle">
              <span>포트폴리오 설명</span>
            </div>
            <div className="portfolioBody">
            {`
              react-native-web 을 이용하여 자기소개 페이지를 제작중입니다.
              서버는 작업은 하지않고 프론트만 이용하여 작업했습니다.
              추가적인 페이지 작성중이고 페이지를 다 제작하고난 이후에 모바일 스위칭을 할 예정입니다.
              앱으로 빌드하여 모바일에서 스위칭되도록 작업 예정입니다.
              포트폴리오 탭 이후 경력기술서 탭과 기타 필요 탭등 추가진행 중입니다.


              `}
              <span className="portfolioLink">
                링크 :
                <a href="https://sonjaesung.github.io/my-page/#/" target="_sub">
                  https://sonjaesung.github.io/my-page/#/
                </a>
              </span>
              
            </div>
          </div>
        </div>
        <div className="portfoioDiv">
          <div className="simpleData">
            <div className="portfolioTitle">
              <span>학생 출석 체크 페이지</span>
            </div>
            <div className="imgDiv">
              <div className="photo">
                <img
                  className="photoImg"
                  src={require('../img/checkStudent1.PNG')}
                />
              </div>
              <div className="photo">
                <img
                  className="photoImg"
                  src={require('../img/checkStudent2.PNG')}
                />
              </div>
              <div className="photo">
                <img
                  className="photoImg"
                  src={require('../img/checkStudent3.PNG')}
                />
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="portfolioTitle">
              <span>포트폴리오 설명</span>
            </div>
            <div className="portfolioBody">
              {`
              react 를 이용하여 학생 출석체크 페이지를 만들었습니다.
              학교에서 선생님들이 개인적으로 활용 할 수 있도록 해야해서 서버는 작업하지않고 프론트에서만 가능하도록 작업했습니다.
              코로나 사태로 인해 학생들의 출석체크를 인터넷 페이지에서 댓글을 하나씩 확인해야한다고 해서 작업하게되었습니다.
              우선 출석번호와 이름으로 작성한 엑셀파일을 첨부한 뒤 출석체크할 반을 정합니다.
              학생들이 출석댓글을 다는 페이지 전체를 복사하여 아래 텍스트필드에 붙여넣고 출석체크 버튼을 클릭하면 일치하는 학생들이름을 모두 조회합니다.

              
              `}
              <span className="portfolioLink">
                링크 :
                <a
                  href="https://sonjaesung.github.io/web-crawling/#/"
                  target="_sub">
                  https://sonjaesung.github.io/web-crawling/#/
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="portfoioDiv">
          <div className="simpleData">
            <div className="portfolioTitle">
              <span>학생 출석 체크 페이지</span>
            </div>
            <div className="imgDiv">
              <div className="photo">
                <img className="photoImg" src={require('../img/react1.PNG')} />
              </div>
              <div className="photo">
                <img className="photoImg" src={require('../img/react2.PNG')} />
              </div>
              <div className="photo">
                <img className="photoImg" src={require('../img/react3.PNG')} />
              </div>
              <div className="photo">
                <img className="photoImg" src={require('../img/react4.PNG')} />
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="portfolioTitle">
              <span>포트폴리오 설명</span>
            </div>
            <div className="portfolioBody">
              {`
              react 를 이용하여 프론트 페이지를 만들었습니다.
              모바일 화면에서도 볼 수 있도록 css를 작업하였습니다.
              메인화면, 회원가입, 이메일찾기, 비밀번호찾기, 로그인 후 메인화면, 오늘의 날씨, 오늘의 영어, 로또번호 페이지를 만들었습니다.

              처음에는 클라이언트 부분만으로 돌아가도록 쿠키에 데이터를 저장하여 불러오는 방식으로 작성하였습니다.              
              이후 aws 에서 제공하는 1년 무료기간을 이용하여 express 모듈로 서버를 만들어서 aws 에 배포하였습니다.
              Back-end 에서의 작업은 jwt를 이용한 로그인 인증, sequelize를 이용한 db 모델링과 쿼리연동을 진행하였습니다.
              Front-end 에서의 작업은 react hook 을 이용하여 제작하기위해 노력하였습니다.

              메인 페이지에는 시계 기능을 주었습니다.
              오늘의 날씨 페이지는 open api 를 이용하여 위도와 경도로 날씨, 현재기온, 최저기온, 최대기온, 습도, 체감온도등을 표시하였습니다.
              axios 를 이용하여 서버 통신을 하였고 open api 연결을 해보기위해 날씨 데이터를 불러왔습니다.
              오늘의 영어 페이지는 영어문장 작성을 하여 등록하면 데이터베이스에 저장하여 해당 페이지로 불러와 누적 문장들을 언제든 확인 할 수 있도록 하고 체크와 삭제 기능을 넣었습니다.            
              데이터베이스는 my-sql 을 이용하였고 aws rds에 배포하였습니다.

              로또번호 페이지는 open api 를 이용하여 입력한 회차의 당첨번호를 조회 할 수 있도록 하였습니다. 
              번호를 입력하지않고 조회할 경우 가장 최신의 로또번호를 조회합니다. 
              지금은 open api 가 변경이 되었는지 조회되지 않습니다.

              서버는 node.js 의 express 모듈을 이용하였습니다.
              로그인은 json web token 을 이용하였고 데이터베이스관련 문법은
              sequelize 모듈을 이용하였습니다.

              aws 는 지금은 돈이 나가서 회원탈퇴를 하였습니다.
              아쉽게도 아래 링크로는 확인할 수 없습니다.


              `}
              <span className="portfolioLink">
                링크 :
                <a
                  href="http://weather-client.s3-website.ap-northeast-2.amazonaws.com/#/"
                  target="_sub">
                  http://weather-client.s3-website.ap-northeast-2.amazonaws.com/#/
                </a>
              </span>
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

export default Portfolio;
