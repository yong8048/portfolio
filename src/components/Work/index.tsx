import User from '../../data/user';

import * as S from './styles';

const Work = () => {
  return (
    <S.WorkProject>
      {User.project.map((list) => (
        <S.ProjectContainer>
          <img src='/assets/home.jpg' alt='projectImg' width={'200px'} />

          <S.ProjectDes>
            <S.ProjectDesTop>
              <h1>{list.title}</h1>
              <button>이동</button>
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
            {/* <S.ProjectDesBottom>
              <p>기간: {list.period}</p>
              <p>인원: {list.person}</p>
              <p>역할: {list.position}</p>
              <p>기술: {list.skills}</p>
              <p>프로젝트 소개: {list.description}</p>
            </S.ProjectDesBottom> */}
          </S.ProjectDes>
        </S.ProjectContainer>
      ))}
    </S.WorkProject>
  );
};

export default Work;
