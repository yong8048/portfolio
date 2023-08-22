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
  box-shadow: 1px 1px 1px 2px rgba(100, 100, 100, 0.5);
  transition-duration: 100ms;
  &:hover {
    box-shadow: 1px 1px 1px 4px rgba(100, 100, 100, 0.5);
  }
`;
