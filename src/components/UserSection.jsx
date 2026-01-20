import "./UserSection.css";

import { useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import { BsBriefcase, BsBuildings } from "react-icons/bs";

export default function UsersSection() {

  /* ----------------------------------
     SCROLL REVEAL ANIMATION
  ---------------------------------- */
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="users-section">

      {/* HEADING */}
      <div className="users-heading reveal">
        <h1 className="reveal delay-1">
          Who Uses <span>VG Pay?</span>
        </h1>
        <p className="reveal delay-2">
          Designed for every stakeholder in the hospitality and retail ecosystem
        </p>
      </div>

      {/* CARDS */}
      <div className="users-cards">

        {/* Guests */}
        <div className="user-card reveal slide-left delay-1">
          <div className="user-icon icon blue">
            <FiUsers size={22} color="#fff" />
          </div>

          <h2>Guests</h2>
          <p className="user-desc">
            Seamless check in and checkout <br />
            experience
          </p>

          <ul className="stagger-list">
            <li>Digital check-in</li>
            <li>Quick Payments</li>
            <li>Instant receipts</li>
            <li>Feedback system</li>
          </ul>
        </div>

        {/* Merchants */}
        <div className="user-card reveal slide-up delay-2">
          <div className="user-icon icon green">
            <BsBriefcase size={22} color="#fff" />
          </div>

          <h2>Merchants</h2>
          <p className="user-desc">
            Simplified billing and management
          </p>

          <ul className="stagger-list">
            <li>Easy onboarding</li>
            <li>Real-time analytics</li>
            <li>Inventory tracking</li>
            <li>Staff management</li>
          </ul>
        </div>

        {/* Enterprises */}
        <div className="user-card reveal slide-right delay-3">
          <div className="user-icon icon purple">
            <BsBuildings size={22} color="#fff" />
          </div>

          <h2>Enterprises</h2>
          <p className="user-desc">
            Scalable multi-location operations
          </p>

          <ul className="stagger-list">
            <li>Centralized control</li>
            <li>Multi-outlet support</li>
            <li>Custom integrations</li>
            <li>Enterprise SLAs</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
