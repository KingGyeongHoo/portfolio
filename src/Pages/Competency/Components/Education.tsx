import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { Title } from "../../../Styles/GlobalStyle";
import { ContentDivider } from "../../../Styles/GlobalStyle";
import { EducationProps, EducationData } from "../../../Data/EducationData";

export const Education = () => {
  return (
    <EducationContainer>
      <Title>EDUCATION</Title>
      {EducationData.map((el: EducationProps, idx: number) => {
        return (
          <ContentDivider>
            <div className="title">
              <GoDotFill size="24"></GoDotFill>
              <h2>{el.name}</h2>
              <div />
            </div>
            <div className="content">
              <h3 className="name">
                {el.place.split("&")[0]}
                <br />
                {el.place.split("&")[1]}
              </h3>
              <div />
              <h3 className="date">{el.date}</h3>
            </div>
          </ContentDivider>
        );
      })}
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3%;
`;
