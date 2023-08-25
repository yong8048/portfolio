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

  &:hover {
    box-shadow: 1px 1px 1px 4px rgba(100, 100, 100, 0.5);
  }
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
`;
export const ProjectDesBottom = styled.div`
  width: 500px;
`;
