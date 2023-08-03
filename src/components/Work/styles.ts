import { styled } from 'styled-components';

export const WorkProject = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;
export const ProjectContainer = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 3px 5px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 500ms;
  &:hover {
    box-shadow: 5px 3px 5px 3px rgba(100, 100, 100, 0.5);
  }
`;
