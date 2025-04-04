import { Card, CardBody } from "@heroui/react";
import { Image } from "@heroui/react";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonCard } from "../../../../components/button";
import { StyledTagDesign } from "../../../../components/tag";
import { TextHeading, TextTitle } from "../../../../components/text";

import { AppDesignModal } from "./components/modal";
import { DarkTheme, LightTheme } from "@/app/theme";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const AppDesign: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <AppDesignModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card>
          <CardBody>
            <Image src="/image/card/imgCard02.jpg" />
            <Row>
              <TextTitle>Perfume Shop App Design</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextHeading>App's concept offers luxury perfume.</TextHeading>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col flex="auto">
                <StyledTagDesign>App Design</StyledTagDesign>
              </Col>
              <Col>
                <ButtonCard onClick={() => setVisible(true)}>
                  Read more
                </ButtonCard>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
