"use client";
import "./Services.css";
import { useTranslations } from "next-intl";

const Services = ({ handleForm, setFormOpen }) => {
  const translate = useTranslations();
  return (
    <>
      <section id="services-section" className="services-section--one grid">
        <article className="services-section__image-container">
          <img
            className="services-section__image-container__image"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730471280/services_gzepmp.png"
            alt="services"
          />
        </article>
        <article>
          <h1 className="services-section__heading">
            {translate("servicesHeading")}
          </h1>
          <p className="services-section__text">
            {translate("servicesText")}
          </p>
          <div className="services-section__images-container">
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543537/applestore_al3htn.png"
              alt="app store"
            />
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543542/googleplay_isrhjv.png"
              alt="play store"
            />
          </div>
        </article>
      </section>
      <section className="services-section--two grid">
        <article>
          <h1 className="services-section__heading">
            {translate("servicesHeading2")}
          </h1>
          <p className="services-section__text">
            {translate("servicesText2")}
          </p>
          <button
            className="btn"
            onClick={() => {
              handleForm(true);
              setFormOpen(true);
            }}
          >
            {translate("getStarted")}
          </button>
        </article>
        <article className="services-section__image-container">
          <img
            className="services-section__image-container__image"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730704947/services2_t7xvlu.png"
            alt="services"
          />
        </article>
      </section>
    </>
  );
};

export default Services;
