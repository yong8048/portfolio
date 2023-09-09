import User from '../../data/user';
import { useEffect, useState } from 'react';
import * as S from './styles';

const Work = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <S.WorkProject>
      {User.project.map((list) => (
        <S.ProjectContainer animate={animate}>
          <img src='/assets/home.jpg' alt='projectImg' width={'200px'} />

          <S.ProjectDes>
            <S.ProjectDesTop>
              <h1>{list.title}</h1>
              <div>
                <img src='/assets/github.png' alt='githubLink' onClick={() => window.open(list.git)} />
                <button onClick={() => window.open(list.link)}>View</button>
              </div>
            </S.ProjectDesTop>
            <S.ProjectDesBottom>
              <S.ProjectListUl>
                <S.ProjectListLi>
                  <S.ProjectListTitle>작업기간</S.ProjectListTitle>
                  <S.ProjectListDes>{list.period}</S.ProjectListDes>
                </S.ProjectListLi>
                <S.ProjectListLi>
                  <S.ProjectListTitle>작업인원</S.ProjectListTitle>
                  <S.ProjectListDes>{list.person}</S.ProjectListDes>
                </S.ProjectListLi>
                <S.ProjectListLi>
                  <S.ProjectListTitle>사용기술</S.ProjectListTitle>
                  <S.ProjectListDes>{list.skills}</S.ProjectListDes>
                </S.ProjectListLi>
                <S.ProjectListLi>
                  <S.ProjectListTitle>상세역할</S.ProjectListTitle>
                  <S.ProjectListDes>{list.position}</S.ProjectListDes>
                </S.ProjectListLi>
                <S.ProjectListLi>
                  <S.ProjectListTitle>프로젝트 소개</S.ProjectListTitle>
                  <S.ProjectListDes>{list.description}</S.ProjectListDes>
                </S.ProjectListLi>
              </S.ProjectListUl>
            </S.ProjectDesBottom>
          </S.ProjectDes>
        </S.ProjectContainer>
      ))}
    </S.WorkProject>
  );
};

export default Work;
