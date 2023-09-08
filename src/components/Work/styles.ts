import { styled } from 'styled-components';

export const WorkProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px auto;
  gap: 50px;
`;
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1000px;
  height: 350px;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 1px 1px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 100ms;

  img {
    border-radius: 20px;
    width: 300px;
    height: 300px;
  }
  button {
    border-radius: 20px;
    color: #eee;
    background-color: #333;
    width: 100px;
    height: 50px;
  }
`;

export const ProjectImg = styled.img``;
export const ProjectDes = styled.div`
  height: 100%;
`;
export const ProjectDesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    color: #fff;
    font-weight: bold;
  }
`;
export const ProjectDesBottom = styled.div`
  width: 600px;
  gap: 10px;
`;

export const ProjectListTitle = styled.p`
  color: #229999;
  width: 140px;
  text-align: justify;
`;

export const ProjectListDes = styled.p`
  color: #fff;
  width: 400px;
`;

export const ProjectListUl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ProjectListLi = styled.p`
  width: 500px;
  display: flex;
`;
