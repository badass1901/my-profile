import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="700"
      >
        The things i can do for you
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="900"
      >
        My Services
      </h2>

      <div className="container services__container">
        <article
          className="service"
          data-aos="fade-right"
          data-aos-anchor=".services__container"
          data-aos-duration="900"
        >
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting user research and user testing to understand user
                needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing user personas and user journeys to represent target
                audience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating wireframes, prototypes, and mockups to visualize and
                test ideas.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing the layout, navigation, and visual elements of the
                user interface.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Continuously testing and iterating on the design to improve
                usability and effectiveness.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Continuously testing and iterating on the design to improve
                usability.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article
          className="service"
          data-aos="fade-up"
          data-aos-anchor=".services__container"
          data-aos-duration="1200"
        >
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing and building websites and web applications using best
                practices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing responsive, mobile-friendly websites that work on
                various devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing features and functionality using server-side
                languages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrating websites and applications with databases and APIs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Setting up and configuring servers and hosting environments</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Testing and debugging websites and applications to ensure
                functionality
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Providing technical support and assistance to website users and
                clients.
              </p>
            </li>
          </ul>
        </article>

        {/* End of web development  */}

        <article
          className="service"
          data-aos="fade-left"
          data-aos-anchor=".services__container"
          data-aos-duration="900"
        >
          <div className="service__head">
            <h3>Software Development & Microservices</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing and deploying websites and webapps at the backend
                with best practices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RestFul API development with NodeJS, ExpressJS, MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Application development with React Native.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Best practices in software development with C, C++, Java,
                Python.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Payment gateway integration with Stripe, Paytm, Razorpay,
                CashFree and PayU.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>GST invoicing using HSN list</p>
            </li>
          </ul>
        </article>

        {/* End of digital marketting  */}
      </div>
    </section>
  );
};

export default Services;
