import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonMore } from "../../../../components/button";
import { StyledTagCoding, StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/text";
import { ProductPageModal } from "./components/ProductPageModal";
import { DarkTheme, LightTheme } from "@/theme";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductPage: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <ProductPageModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
        // variant="flat"
        // css={{
        //   background: themeContext.backgroundColors.card,
        //   shadow: themeContext.cardShadow.default,
        //   borderRadius: 16,
        // }}
        >
          <Image src="/image/card/imgCard08.jpg" />
          <CardBody>
            <Row>
              <TextTitle>Product Page</TextTitle>
            </Row>
            <Row style={{ marginTop: 2 }}>
              <TextContent>Features of inventory management.</TextContent>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col flex="auto">
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
              <Col>
                <ButtonMore onClick={() => setVisible(true)}>
                  Read more
                </ButtonMore>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
