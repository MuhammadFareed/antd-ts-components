import React, { FC } from "react";
import Text from "src/components/text";
import styles from "./styles.module.css";
import { Tooltip } from "antd";

type Props = {
  segmentOptions: string[];
  value: string;
  onSelect: (value: string) => void;
};

const Segments: FC<Props> = props => {
  const { segmentOptions, value, onSelect } = props;

  return (
    <div className={styles.segments}>
      {segmentOptions &&
        segmentOptions?.length &&
        segmentOptions?.map((element: string) => (
          <Tooltip placement="bottom" title={element}>
            <div
              className={[styles.segment_item, element === value ? styles.active_segment : ""].join(" ")}
              onClick={() => onSelect(element)}>
              <Text size={"S"} className={styles.segment_text}>
                {element}
              </Text>
            </div>
          </Tooltip>
        ))}
    </div>
  );
};

export default Segments;
