import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { TextModal } from "../../../../../components/text";

export const SaleOrderProcedures = () => {
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <Row justify={xs && !sm ? "start" : "center"}>
            <Col>
              <Row>
                <TextModal strong>* My Procedures:</TextModal>
              </Row>
              <Row>
                <TextModal>1) Gether requirements and do research.</TextModal>
              </Row>
              <Row>
                <TextModal>2) Create prototypes in Figma.</TextModal>
              </Row>
              <Row>
                <TextModal>
                  3) Present prototypes to user and get the feedback.
                </TextModal>
              </Row>
              <Row>
                <TextModal>
                  4) Create element components with Styled Components.
                </TextModal>
              </Row>
              <Row>
                <TextModal>5) Merge element components by coding.</TextModal>
              </Row>
              <Row>
                <TextModal>6) Design database diagram.</TextModal>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
