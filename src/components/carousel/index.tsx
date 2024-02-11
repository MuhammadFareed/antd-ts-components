import React, { ReactElement, ReactNode } from "react";
import ReactMultiCarousel, { ResponsiveType } from "react-multi-carousel";

type Props = {
  children?: ReactNode;
  responsive: ResponsiveType;
  deviceType?: string;
  slidesToSlide?: number;
  draggable?: boolean;
  swipeable?: boolean;
  arrows?: boolean;
  renderArrowsWhenDisabled?: boolean;
  removeArrowOnDeviceType?: string;
  customLeftArrow?: ReactElement | null;
  customRightArrow?: ReactElement | null;
  customDot?: ReactElement | null;
  customButtonGroup?: ReactElement | null;
  infinite?: boolean;
  minimumTouchDrag?: number;
  sliderClass?: string;
  itemClass?: string;
  containerClass?: string;
  dotListClass?: string;
  keyBoardControl?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showDots?: boolean;
  renderDotsOutside?: boolean;
  partialVisible?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  focusOnSelect?: boolean;
  centerMode?: boolean;
  additionalTransfrom?: number;
  shouldResetAutoplay?: boolean;
  rewind?: boolean;
  rewindWithAnimation?: boolean;
  rtl?: boolean;
};

const Carousel: React.FC<Props> = props => {
  const {
    children,
    responsive,
    deviceType,
    slidesToSlide,
    draggable,
    swipeable,
    arrows,
    renderArrowsWhenDisabled,
    removeArrowOnDeviceType,
    customLeftArrow,
    customRightArrow,
    customDot,
    customButtonGroup,
    infinite,
    minimumTouchDrag = 80,
    sliderClass,
    itemClass,
    containerClass,
    dotListClass,
    keyBoardControl,
    autoPlay,
    autoPlaySpeed = 3000,
    showDots,
    renderDotsOutside,
    partialVisible,
    customTransition,
    transitionDuration,
    focusOnSelect = false,
    centerMode,
    additionalTransfrom,
    shouldResetAutoplay,
    rewind,
    rewindWithAnimation,
    rtl,
  } = props;

  return (
    <ReactMultiCarousel
      responsive={responsive}
      deviceType={deviceType}
      slidesToSlide={slidesToSlide}
      draggable={draggable}
      swipeable={swipeable}
      arrows={arrows}
      renderArrowsWhenDisabled={renderArrowsWhenDisabled}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      customDot={customDot}
      customButtonGroup={customButtonGroup}
      infinite={infinite}
      minimumTouchDrag={minimumTouchDrag}
      sliderClass={sliderClass}
      itemClass={itemClass}
      containerClass={containerClass}
      dotListClass={dotListClass}
      keyBoardControl={keyBoardControl}
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      showDots={showDots}
      renderDotsOutside={renderDotsOutside}
      partialVisible={partialVisible}
      customTransition={customTransition}
      transitionDuration={transitionDuration}
      focusOnSelect={focusOnSelect}
      centerMode={centerMode}
      additionalTransfrom={additionalTransfrom}
      shouldResetAutoplay={shouldResetAutoplay}
      rewind={rewind}
      rewindWithAnimation={rewindWithAnimation}
      rtl={rtl}>
      {children}
    </ReactMultiCarousel>
  );
};

export default Carousel;
