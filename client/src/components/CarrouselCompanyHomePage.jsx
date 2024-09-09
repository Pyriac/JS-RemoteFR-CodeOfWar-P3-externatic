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
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {companys.map((company) => (
        <div className="keen-slider__slide number-slide1" key={company.id}>
          <CardCompany company={company} />
        </div>
      ))}
    </div>
  );
}
