import { Settings } from 'react-slick';

export const SLIDER_DEFAULT_SCROLL_DELAY = 8000;

export const SLIDER_DEFAULT_SETTINGS: Settings = {
  arrows: false,
  slidesToShow: 4,
  autoplaySpeed: SLIDER_DEFAULT_SCROLL_DELAY,
  responsive: [
    {
        breakpoint: 1690,
        settings: {
            slidesToShow: 3
        }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 868,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
  ],
};