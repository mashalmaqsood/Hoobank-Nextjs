import "./Testimonials.css";
import { testimonials } from "../../lov/data";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const translate = useTranslations();
  return (
    <section id="about-us" className="testimonials-section">
      <div className="testimonials-section__content grid">
        <h1 className="testimonials-section__heading">
        {translate("testimonialHeading")}
        </h1>
        <p className="testimonials-section__text">
          {translate("testimonialText")}
        </p>
      </div>
      <section className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article className="testimonials__card" key={index}>
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730722374/quotes_ekzixn.png"
              width={50}
            />
            <p className="testimonials__card__text">{translate(`testimonials.${index}.text`)}</p>
            <div className="testimonials__content">
              <img src={testimonial.userImage} width={50} height={50} />
              <div className="testimonials__info">
                <p className="testimonials__info__name">
                {translate(`testimonials.${index}.userName`)}
                </p>
                <p className="testimonials__info__designation">
                {translate(`testimonials.${index}.userDesignation`)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
