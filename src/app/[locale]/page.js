
"use client";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Benefits from "@/components/benefits-section/Benefits";
import Services from "@/components/service-section/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import ExploreServices from "@/components/explore-services/ExploreServices";
import Form from "@/components/form/Form";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [scroll, setScroll] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const handleForm = (value) => {
    if (value) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleForm = (formOpen) => {
    setFormOpen(formOpen);
    handleForm(formOpen);
  };

  return (
    <div className={`${scroll ? "no-scroll" : "scroll"}`}>
      <Navbar />
      <Hero handleForm={handleForm} setFormOpen={setFormOpen} />
      <Benefits handleForm={handleForm} setFormOpen={setFormOpen} />
      <Services handleForm={handleForm} setFormOpen={setFormOpen}/>
      <Testimonials />
      <ExploreServices handleForm={handleForm} setFormOpen={setFormOpen} />
      <Footer />
      {formOpen && (
        <>
          <div className="overlay"></div>
          <div className="form">
            <button id="close-button" onClick={() => toggleForm(false)}>
              x
            </button>
            <Form setIsFormOpen={setFormOpen} toggleForm={toggleForm} />
          </div>
        </>
      )}
    </div>
  );
}
