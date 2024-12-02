import "./Form.css";
import { useTranslations } from "next-intl";

const Form = ({ setIsFormOpen, toggleForm }) => {
  const translate = useTranslations();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully.");
    setIsFormOpen(false);
    toggleForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className="form__header">
        <img
          className="nav__brand__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png"
          alt="logo"
        />
        <h1>{translate("getStarted")}</h1>
        <p>{translate("formTag")}</p>
      </header>
      <section className="form__container">
        <input type="email" placeholder={translate("email")} className="input" required autoComplete="email"/>
        <input
          type="password"
          placeholder={translate("password")}
          autoComplete="current-password"
          className="input"
          required
        />
      </section>
      <button className="btn form-btn" type="submit">
      {translate("SignUp")}
      </button>
    </form>
  );
};

export default Form;
