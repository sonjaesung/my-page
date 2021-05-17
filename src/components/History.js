import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import '../css/History.css';

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <div className="historyBody">
          <div className="history" id="history">
            <div className="yearDiv">
              <span>2020</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                <li>
                    <div className="simpleContent">
                      <strong>09.01</strong>
                      <br />
                      <span>딥노이드 입사</span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>07.20</strong>
                      <br />
                      <span>Eun Yul My-Page 작업</span>
                    </div>
                    <div className="detailContent">
                      <strong>Eun Yul My-Page 작업</strong>
                      <br />
                      <span>
                        React-Native-Web 을 이용하여 웹과 앱 모두에서 확인해 볼
                        수 있는 프로젝트를 제작 중입니다.
                      </span>
                      <br />
                      <span>
                        홈 화면, 자기소개서, 연혁, 포트폴리오, 취미/특기 등을
                        추가 예정입니다.
                      </span>
                      <br />
                      <span>
                        서버는 사용하지않고 Front 페이지만 사용합니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>07.17</strong>
                      <br />
                      <span>학생 출석체크 작업</span>
                    </div>
                    <div className="detailContent">
                      <strong>학생 출석체크 작업</strong>
                      <br />
                      <span>
                        학교 e-수업 페이지의 학생들 출석체크를 위한
                        프로그램입니다.
                      </span>
                      <br />
                      <span>
                        페이지 전체를 복사 붙여넣기를 한 이후 엑셀로 만들어놓은
                        학생들 출석부를 이용하여 출석체크를 진행합니다.
                      </span>
                      <br />
                      <span>
                        필자의 git 에 배포하여 한 고등학교에서 사용중입니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>06.01</strong>
                      <br />
                      <span>React Weather-Clock-Lotto 작업</span>
                    </div>
                    <div className="detailContent">
                      <strong>React Weather-Clock-Lotto 작업</strong>
                      <br />
                      <span>
                        포트폴리오로 작성해본 React 반응형 웹페이지입니다.
                      </span>
                      <br />
                      <span>
                        서버를 이용하여 로그인 할 수 있습니다. 시계기능, 오늘의
                        날씨 확인 기능, 영어 문장 작성/저장 기능, 로또 회차에
                        의한 당첨번호 조회 기능이 있습니다.
                      </span>
                      <br />
                      <span>
                        로또 번호 조회 api 가 현재는 작동하지 않습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>04.30</strong>
                      <br />
                      <span>엠서클 퇴사</span>
                    </div>
                    <div className="detailContent">
                      <strong>엠서클 퇴사</strong>
                      <br />
                      <span>회사와의 합의에 의한 퇴사.</span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>02.03</strong>
                      <br />
                      <span>엠서클 입사</span>
                    </div>
                    <div className="detailContent" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2019</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>12.31</strong>
                      <br />
                      <span>(주)자버 퇴사</span>
                    </div>
                    <div className="detailContent">
                      <strong>(주)자버 퇴사</strong>
                      <br />
                      <span>회사의 이사로 인한 퇴사.</span>
                      <br />
                      <span>성수에서 공덕으로 이사하였습니다.</span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>10.10</strong>
                      <br />
                      <span>(주)자버 입사</span>
                    </div>
                    <div className="detailContent" />
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>06.24</strong>
                      <br />
                      <span>(주)에프앤아이 퇴사</span>
                    </div>
                    <div className="detailContent">
                      <strong>(주)에프앤아이 퇴사</strong>
                      <br />
                      <span>개인적인 사정에 의한 퇴사.</span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>04.24</strong>
                      <br />
                      <span>자살예방 프로젝트</span>
                    </div>
                    <div className="detailContent">
                      <strong>자살예방 프로젝트</strong>
                      <br />
                      <span>
                        자살예방 프로젝트 강남 세브란스병원 임상실험 진행.
                      </span>
                      <br />
                      <span>임상실험 현장 지원.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2017</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>08.24</strong>
                      <br />
                      <span>Web 개발 시작</span>
                    </div>
                    <div className="detailContent">
                      <strong>Web 개발 시작</strong>
                      <br />
                      <span>회사의 권유로 Web 개발을 시작하였습니다.</span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>04.24</strong>
                      <br />
                      <span>(주)에프앤아이 입사</span>
                    </div>
                    <div className="detailContent" />
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>01.24</strong>
                      <br />
                      <span>리오리치 프로젝트 진행</span>
                    </div>
                    <div className="detailContent">
                      <strong>리오리치 프로젝트 진행</strong>
                      <br />
                      <span>
                        학교에서 연결해준 외부 프로젝트 리오리치 진행.
                      </span>
                      <br />
                      <span>
                        Unity 를 이용한 미연시 게임 중 퀘스트 부분 담당.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>02.28</strong>
                      <br />
                      <span>한국IT직업전문학교 졸업</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2016</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>11.10</strong>
                      <br />
                      <span>졸업작품 G-Star 출시</span>
                    </div>
                    <div className="detailContent">
                      <strong>졸업작품 G-Star 출시</strong>
                      <br />
                      <span>Team Anxiety 졸업작품 G-Star 출시.</span>
                      <br />
                      <span>
                        Unity 와 오큘러스를 이용한 3D 공포게임 이였습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="simpleContent">
                      <strong>06.10</strong>
                      <br />
                      <span>Team Anxiety 합류</span>
                    </div>
                    <div className="detailContent" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2015</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>03.02</strong>
                      <br />
                      <span>한국IT직업전문학교 복학</span>
                    </div>
                    <div className="detailContent" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2014</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>12.18</strong>
                      <br />
                      <span>군복무 전역</span>
                    </div>
                    <div className="detailContent">
                      <strong>군복무 전역</strong>
                      <br />
                      <span>육군 병장 만기 전역입니다.</span>
                      <br />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2013</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>03.15</strong>
                      <br />
                      <span>군복무 입대</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2012</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>03.02</strong>
                      <br />
                      <span>한국IT직업전문학교 입학</span>
                    </div>
                    <div className="detailContent">
                      <strong>한국IT직업전문학교 입학</strong>
                      <br />
                      <span>서울 소재, 게임프로그래밍학과.</span>
                      <br />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2011</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>02.20</strong>
                      <br />
                      <span>방산고등학교 졸업</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="yearDiv">
              <span>2008</span>
            </div>
            <div className="listRight">
              <div className="listRightDiv">
                <ul>
                  <li>
                    <div className="simpleContent">
                      <strong>02.20</strong>
                      <br />
                      <span>방산고등학교 입학</span>
                    </div>
                    <div className="detailContent">
                      <strong>한국IT직업전문학교 입학</strong>
                      <br />
                      <span>서울 소재, 이과.</span>
                      <br />
                    </div>
                  </li>
                </ul>
              </div>
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

export default History;
