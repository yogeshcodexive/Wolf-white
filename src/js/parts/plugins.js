import { arrow } from "@popperjs/core";
import "slick-carousel";

export class Plugins {

  init() {
    this.projectSlider();
  }
  projectSlider() {
    $(document).ready(function () {

      $('.project-slider').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots:true,
        infinite:false,
        appendDots:$('.project-dots')
        // autoplay: true,
        // autoplaySpeed: 2000,
      });
      $('.reading-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        infinite:false,
        appendDots:$('.reading-dots')
        // autoplay: true,
        // autoplaySpeed: 2000,
      });
    })
  }

}
