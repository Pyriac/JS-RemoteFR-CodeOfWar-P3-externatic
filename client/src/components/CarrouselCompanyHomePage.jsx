import { useLoaderData } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardCompany from "./CardCompany";

export default function CarrouselCompanyHomePage() {
  const companys = useLoaderData();

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 64,
    },
    breakpoints: {
      '(max-width: 992px)': {
        loop: true,
        slides: {
          perView: 2,
          spacing: 16,
        }
      },
  }});

  return (
    <div ref={sliderRef} className="keen-slider">
      {companys.map((company) => (
        <div className="keen-slider__slide" key={company.id}>
          <CardCompany company={company} />
        </div>
      ))}
    </div>
  );
}
