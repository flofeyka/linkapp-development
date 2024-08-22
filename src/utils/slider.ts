import { Settings } from 'react-slick';

export const SLIDER_DEFAULT_SCROLL_DELAY = 8000;

export const SLIDER_DEFAULT_SETTINGS: Settings = {
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1065,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
  ],
};