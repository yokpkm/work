import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonMore } from "../../../../components/button";
import { StyledTagDesign } from "../../../../components/tag";
import { TextContent, TextTitle } from "../../../../components/text";
import { LandingPageModal } from "./components/LandingPageModal";
import { DarkTheme, LightTheme } from "@/theme";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const LandingPage: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <LandingPageModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
        // variant="flat"
        // css={{
        //   background: themeContext.backgroundColors.card,
        //   shadow: themeContext.cardShadow.default,
        //   borderRadius: 16,
        // }}
        >
          <Image src="/image/card/imgCard06.jpg" />
          <CardBody>
            <Row>
              <TextTitle>Landing Page Design</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextContent>Page's design offers glassmorphism UI.</TextContent>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col flex="auto">
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col>
                <ButtonMore onClick={() => setVisible(true)}>
                  Read More
                </ButtonMore>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
