import React, { useEffect, useState } from "react";
import "./Founder.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import googleplay from "./googleplay.png";
import img5 from "./img5.jpeg";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
const Founder = () => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const sectionDivs = document.querySelectorAll(".screenshot,.googleplay");

    const handleScroll = () => {
      sectionDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          div.classList.add("animate");
          const classesToAdd = [
            "animate-right1",
            "animate-right2",
            "animate-right3",
            "animate-right4",
            "animate-right5",
            "animate-right6",
          ];
          div.classList.add(classesToAdd[index]);
        } else {
          div.classList.remove(
            "animate",
            "animate-right1",
            "animate-right2",
            "animate-right3",
            "animate-right4",
            "animate-right5",
            "animate-right6"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".foundercontainer");
      const viewportHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < viewportHeight * 1) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`foundercontainer ${isInView ? "scroll" : ""}`}>
      <div className="foundercontainer1">
        <div className="erpximagecontainer">
          <div
            className="screenshot"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="screenshot">
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            >
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div
            className="screenshot"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="screenshot">
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            >
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          {/* <div
            className="screenshot"
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
          <div
            className="screenshot"
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="foundertitle">
          <p>Founder of ERPX</p>
          <a href="https://play.google.com/store/apps/details?id=com.starboy011.erp">
            <div
              className="googleplay"
              style={{
                backgroundImage: `url(${googleplay})`,
              }}
            ></div>
          </a>
        </div>
        <div className="aboutheadercontainer">
          <p>
            About this App :
            <div className="aboutdescription">
              Introducing the ultimate business management solution, designed to
              revolutionize the way you operate your enterprise.
            </div>
          </p>
        </div>
        <div className="abouttheappcontainer">
          <div className="subheadingcontainer">
            <p>Sales Module:</p>
          </div>
          <div className="subcontentcontainer">
            <li>
              {" "}
              Maximize your revenue potential with our powerful sales module.
            </li>
            <li>
              From lead management to order processing and invoicing, our
              intuitive tools empower you to effectively manage your sales
              pipeline and drive growth.
            </li>
          </div>
          <div className="subheadingcontainer">
            <p>Inventory Module:</p>
          </div>
          <div className="subcontentcontainer">
            <li> Take control of your inventory like never before.</li>
            <li>
              Our advanced inventory management system allows you to monitor
              stock levels, track assets, and optimize replenishment strategies
              to ensure seamless operations and minimize stockouts.
            </li>
          </div>
          <div className="subheadingcontainer">
            <p>Production Module:</p>
          </div>
          <div className="subcontentcontainer">
            <li> Efficiency is key to success in manufacturing.</li>
            <li>
              With our production module, you can orchestrate your production
              processes with precision, from planning and scheduling to resource
              allocation and quality control, ensuring timely delivery of
              high-quality products.
            </li>
          </div>
          <div className="subheadingcontainer">
            <p>Payroll Module:</p>
          </div>
          <div className="subcontentcontainer">
            <li>
              {" "}
              Simplify your payroll operations and ensure compliance with ease.
            </li>
            <li>
              Our payroll module automates payroll processing, including salary
              calculations, deductions, and tax filings, saving you time and
              reducing the risk of errors.
            </li>
          </div>
          <div className="subheadingcontainer">
            <p>Finance Module:</p>
          </div>
          <div className="subcontentcontainer">
            <li>
              {" "}
              Gain deeper insights into your financial health and make informed
              decisions.
            </li>
            <li>
              Our finance module provides comprehensive financial reporting,
              budgeting, and forecasting tools, enabling you to monitor cash
              flow, track expenses, and drive profitability.
            </li>
          </div>
          <div className="subheadingcontainer">
            <p>GST and Billing:</p>
          </div>
          <div className="subcontentcontainer">
            <li>
              {" "}
              Stay compliant and streamline your invoicing process with our
              integrated GST and billing features.
            </li>
            <li>
              Generate GST-compliant invoices, manage tax rates, and track
              payments effortlessly, ensuring smooth transactions and regulatory
              compliance.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
