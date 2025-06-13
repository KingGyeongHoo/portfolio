import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { Title } from "../../../Styles/GlobalStyle";
import { ContentDivider } from "../../../Styles/GlobalStyle";
import { CareerProps, careerData } from "../../../Data/careerData";

export const Career = () => {
  return (
    <Container>
      <Title>CAREER</Title>
      {careerData.map((el: CareerProps, idx: number) => {
        return (
          <ContentDivider>
            <div className="title">
              <GoDotFill size="24"></GoDotFill>
              <h2>{el.name}</h2>
              <div />
            </div>
            <div className="content">
              <h3 className="name">{el.role.split("&")[0]}</h3>
              <div />
              <h3 className="date">{el.date}</h3>
            </div>
          </ContentDivider>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3%;
`;
