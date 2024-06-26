import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { StyledModal } from "../../../../../components/modal";
import { CloseCircleFilled } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { TextHeadline, TextModal } from "../../../../../components/text";
import {
  StyledTagCoding,
  StyledTagDesign,
} from "../../../../../components/tag";
import { OrderProcedures } from "./OrderProcedures";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const OrderPageModal: React.FC<Props> = ({ visible, setVisible }) => {
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <StyledModal
        visible={visible}
        onCancel={() => setVisible(false)}
        width={"100%"}
        footer={null}
        closeIcon={<CloseCircleFilled />}
        destroyOnClose={true}
      >
        <Row justify="center" style={{ marginBottom: 24 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            <Row align="middle" gutter={[8, 8]} style={{ marginBottom: 40 }}>
              <Col flex="auto">
                <TextHeadline>Order Page</TextHeadline>
              </Col>
              <Col>
                <Row gutter={[8, 16]}>
                  <Col>
                    <StyledTagDesign>UI Design</StyledTagDesign>
                  </Col>
                  <Col>
                    <StyledTagCoding>Coding</StyledTagCoding>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard07.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    This features for supporting order management.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <OrderProcedures />
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/07-order/img01.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The lists that all orders are shown.</TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/07-order/img02.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal> The page that displays order details.</TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/07-order/img03.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The order updating form.</TextModal>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
