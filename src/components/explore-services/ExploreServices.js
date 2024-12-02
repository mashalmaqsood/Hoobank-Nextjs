import { categories } from "@/lov/data";
import { useTranslations } from "next-intl";
import "./ExploreServices.css";

const ExploreServices = ({ handleForm, setFormOpen }) => {
  const translate = useTranslations();
  return (
    <section className="explore-section">
      <div className="explore-section__categories">
        {categories.map((category, index) => (
          <img
            className="explore-section__categories__image"
            src={category}
            key={index}
            width={200}
          />
        ))}
      </div>
      <div className="explore-section__content grid">
        <section className="explore-section__content__container">
          <h1 className="explore-section__content__heading">
            {translate("exploreHeading")}
          </h1>
          <p className="explore-section__content__text">
            {translate("exploreText")}
          </p>
        </section>
        <section className="explore-section__content__button-container">
          <button
            className="btn btn--explore"
            onClick={() => {
              handleForm(true);
              setFormOpen(true);
            }}
          >
            {translate("getStarted")}
          </button>
        </section>
      </div>
    </section>
  );
};

export default ExploreServices;
