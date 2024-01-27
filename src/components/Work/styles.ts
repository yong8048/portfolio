import { styled } from 'styled-components';

export const WorkProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px auto;
  gap: 50px;
  word-break: keep-all;
`;
export const ProjectContainer = styled.div<{ animate: boolean }>`
  display: flex;
  justify-content: space-around;
  /* width: ${(props) => (props.animate ? '1000px' : '0px')}; */
  width: 1000px;
  transform: ${(props) => (props.animate ? 'translateZ(0)' : ' translate3d(-100%, 0, 0)')};
  opacity: ${(props) => (props.animate ? '1' : '0')};
  height: 350px;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 1px 1px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 1s;

  img {
    border-radius: 20px;
    width: 33%;
    height: 300px;
    object-fit: fill;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: all 0.3s;
    }
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
    font-size: x-large;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
        transition: all 0.3s;
      }
    }
    button {
      width: 70px;
      height: 40px;

      &:hover {
        background-color: #666;
        transition: all 0.3s;
      }
    }
  }
`;
export const ProjectDesBottom = styled.div`
  width: 67%;
  gap: 10px;
`;

export const ProjectListTitle = styled.p`
  color: #229999;
  width: 140px;
  text-align: justify;
`;

export const ProjectListDes = styled.p`
  color: #aaa;
  width: 400px;
  white-space: pre-line;
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
