import React, { Fragment } from "react";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import { theme } from "src/constant/theme";
import Text from "src/components/text";
import { uniqueId } from "lodash";

type Props = {
  items: string[];
  active: number;
};

const Steps: React.FC<Props> = props => {
  const { items, active } = props;
  return (
    <Row className="mb-80">
      <Col className="justify-center" span={24}>
        {items &&
          items?.length &&
          items?.map((item: string, index: number) => (
            <Fragment key={uniqueId()}>
              <div className="p-relative">
                <div
                  style={{ border: `1px solid ${index <= active ? theme.PINK : theme.LIGHT_GREY}` }}
                  className={styles.step}>
                  {index <= active && <div className={styles.filled_circle} />}
                </div>
                <Text color={index <= active ? "BLACK" : "GREY"} className={styles.step_name} font="SEMIBOLD">
                  {item}
                </Text>
              </div>
              {index + 1 !== items?.length && (
                <div className={styles.line_between_circles}>
                  <div
                    className={styles.line}
                    style={{ backgroundColor: index + 1 <= active ? theme.PINK : theme.LIGHT_GREY }}
                  />
                </div>
              )}
            </Fragment>
          ))}
      </Col>
    </Row>
  );
};

export default Steps;
