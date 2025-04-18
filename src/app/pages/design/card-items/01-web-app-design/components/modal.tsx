import { Image } from "@heroui/react";
import { Grid, Row, Col, Button } from "antd";
import { StyledModal } from "../../../../../components/modal";
import { StyledTag } from "@/app/components/tag";
import { TextHeadline, TextModalContent } from "../../../../../components/text";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalDetail01: React.FC<Props> = ({ open, setOpen }) => {
  const { useBreakpoint } = Grid;
  const { xs, sm } = useBreakpoint();

  return (
    <>
      <StyledModal
        title={null}
        footer={null}
        open={open}
        onCancel={() => setOpen(false)}
        destroyOnClose
        closeIcon={
          <Button
            icon={
              <Image
                width={20}
                height={20}
                src="/icon/ic-close-default.svg"
                alt="false"
              />
            }
            type="link"
          />
        }
      >
        <Row justify="center" style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            <Row align="middle" gutter={[8, 8]} style={{ marginBottom: 40 }}>
              <Col flex="auto">
                <TextHeadline>Progress Tracking Web Application</TextHeadline>
              </Col>
              <Col>
                <Row gutter={[8, 16]}>
                  <Col>
                    <StyledTag>UI Design</StyledTag>
                  </Col>
                  <Col>
                    <StyledTag>Coding</StyledTag>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard01.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    The web application purpose is to track progress of
                    projects.
                  </TextModalContent>
                </Row>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    It's simple to use and responsive to all platforms.
                  </TextModalContent>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img01.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    The teacher must create projects or subjects.
                  </TextModalContent>
                </Row>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    After that, students joined and update the progress.
                  </TextModalContent>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img02.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    Teachers can share information on the news tab.
                  </TextModalContent>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img03.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    Students can respond to questionnaire on the files tab.
                  </TextModalContent>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img04.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    Students can upload document or media files on the groups
                    tab.
                  </TextModalContent>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img05.jpg"
                    alt="false"
                    width="100%"
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModalContent>
                    Last, they can make appointments on the progress tab.
                  </TextModalContent>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
