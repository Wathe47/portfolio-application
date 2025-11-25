import React, { useState } from "react";

import avatar1 from './assets/images/avatar-1.png';
import avatar2 from './assets/images/avatar-2.png';
import avatar3 from './assets/images/avatar-3.png';
import avatar4 from './assets/images/avatar-4.png';
import blog1 from './assets/images/blog-1.jpg';
import blog2 from './assets/images/blog-2.jpg';
import blog3 from './assets/images/blog-3.jpg';
import blog4 from './assets/images/blog-4.jpg';
import blog5 from './assets/images/blog-5.jpg';
import blog6 from './assets/images/blog-6.jpg';
import iconApp from './assets/images/icon-app.svg';
import iconDesign from './assets/images/icon-design.svg';
import iconDev from './assets/images/icon-dev.svg';
import iconPhoto from './assets/images/icon-photo.svg';
import iconQuote from './assets/images/icon-quote.svg';
import logo1 from './assets/images/logo-1-color.png';
import logo2 from './assets/images/logo-2-color.png';
import logo3 from './assets/images/logo-3-color.png';
import logo4 from './assets/images/logo-4-color.png';
import logo5 from './assets/images/logo-5-color.png';
import logo6 from './assets/images/logo-6-color.png';
import logoIco from './assets/images/logo.ico';
import logoSvg from './assets/images/logo.svg';
import myAvatar from './assets/images/my-avatar.jpg';
import project1 from './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.png';
import project3 from './assets/images/project-3.jpg';
import project4 from './assets/images/project-4.png';
import project5 from './assets/images/project-5.png';
import project6 from './assets/images/project-6.png';
import project7 from './assets/images/project-7.png';
import project8 from './assets/images/project-8.jpg';
import project9 from './assets/images/project-9.png';


const NAV_TABS = [
  { label: "About", key: "about" },
  { label: "Resume", key: "resume" },
  { label: "Portfolio", key: "portfolio" },
  { label: "Blog", key: "blog" },
  { label: "Contact", key: "contact" },
];

const VCardPortfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main>
    {/* SIDEBAR */}
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Wathsalya Gamage" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Wathsalya Gamage">Wathsalya Gamage</h1>
          <p className="title">Web developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">Wathsalyagamage23@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+94 (76) 911-7815</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href="https://github.com/Wathe47" target="_blank" className="contact-link">github.com/Wathe47</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Colombo, Sri Lanka</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/wathsalya-gamage-266325237/" target="_blank" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://web.facebook.com/wathsalya.gamage.1/?viewas=100000686899395" target="_blank" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/wathe_47_/" target="_blank" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    {/* MAIN CONTENT */}
    <div className="main-content">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="navbar-list">
          {NAV_TABS.map((tab) => (
            <li className="navbar-item" key={tab.key}>
              <button
                className={
                  "navbar-link" + (activeTab === tab.key ? " active" : "")
                }
                data-nav-link
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* ABOUT SECTION */}
      <article
        className={"about" + (activeTab === "about" ? " active" : "")}
        data-page="about"
        style={{ display: activeTab === "about" ? "block" : "none" }}
      >
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          
          <p>
            I’m a Software Engineer who loves building digital experiences that are fast, smart, and actually fun to use. From crafting sleek frontends with React to powering up backends with Spring Boot and Node.js, I enjoy bringing ideas to life.
          </p>
          <p>
            Over the past few years, I’ve worked on everything from e-commerce platforms to HR systems and AI-driven projects, gaining hands-on experience across the full development cycle. I’m passionate about solving real problems, experimenting with new tech, and creating software that makes people’s lives easier.
          </p>
          <p>
            If you’ve got an idea, I’d love to help turn it into something awesome!
          </p>

        </section>
        {/* SERVICES */}
        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={iconDesign} alt="design icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Full-Stack Web Development</h4>
                <p className="service-item-text">
                  Build modern, secure, and scalable web applications with responsive designs and strong backend architectures.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={iconDev} alt="Web development icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">API Development & Integration</h4>
                <p className="service-item-text">
                  Design and integrate high performance RESTful APIs and third party services to ensure smooth, reliable communication between systems.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={iconApp} alt="mobile app icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>
                <p className="service-item-text">
                  Develop cross platform mobile apps using Flutter and Android Studio, focusing on clean interfaces, smooth performance, and seamless backend connectivity.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={iconDesign} alt="camera icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Website Modernization & Optimization</h4>
                <p className="service-item-text">
                 Upgrade outdated websites with modern frameworks, improved performance, and user-friendly interfaces for better speed and engagement.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>

      {/* Other sections omitted for brevity */}
      {/* RESUME SECTION */}
      <article
        className={"resume" + (activeTab === "resume" ? " active" : "")}
        data-page="resume"
        style={{ display: activeTab === "resume" ? "block" : "none" }}
      >
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">BSc (Hons) in Information Technology</h4>
              <h6 className="h5 timeline-item-subtitle" >University of Moratuwa</h6>
              <span>2021 — 2025</span>
              <p className="timeline-text">
                GPA - 3.72 / 4.2 (First Class Honours)
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">GCE Advanced Level</h4>
              <h6 className="h5 timeline-item-subtitle" >Royal College Colombo 07</h6>
              <span>2019</span>
              <p className="timeline-text">
                Z-Score - 2.076 (Com.Maths - A, Physics - B, Chemistry - A)
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">GCE Ordinary Level</h4>
              <h6 className="h5 timeline-item-subtitle" >Royal College Colombo 07</h6>
              <span>2016</span>
              <p className="timeline-text">
                8A's and 1B (Mathematics - A, Science - A, English - A)
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer</h4>
              <h6 className="h5 timeline-item-subtitle" >Informatics International Limited</h6>
              <span>2025 Sep — Present</span>
              <p className="timeline-text">
                <strong>Technologies:</strong> Java, Spring Boot, React, MySQL, Docker, AWS
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Associate Software Engineer</h4>
              <h6 className="h5 timeline-item-subtitle" >SentraNova</h6>
              <span>2024 June — 2025 Sep</span>
              <p className="timeline-text">
                <strong>Technologies:</strong> Java, Spring Boot, React, MySQL, Docker
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Engineer Intern</h4>
              <h6 className="h5 timeline-item-subtitle" >WSO2</h6>
              <span>2024 Jan — 2024 June</span>
              <p className="timeline-text">
                <strong>Technologies:</strong> Ballerina, React, WSO2 Identity Server, WSO2 Asgardeo, WSO2 Choreo, ServiceNow
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Software Developer</h4>
              <h6 className="h5 timeline-item-subtitle" >LK Domain Registry</h6>
              <span>2023 Feb — 2023 Oct</span>
              <p className="timeline-text">
                <strong>Technologies:</strong> PHP, Laravel, React, Nodejs, MySQL
              </p>
            </li>
          </ol>
        </section>
        {/* <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "50%" }}></div>
              </div>
            </li>
          </ul>
        </section>  */}
      </article>

      {/* PORTFOLIO SECTION */}
      <article
        className={"portfolio" + (activeTab === "portfolio" ? " active" : "")}
        data-page="portfolio"
        style={{ display: activeTab === "portfolio" ? "block" : "none" }}
      >
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>
          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>Select category</div>
              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>
            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>
              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>
              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>
              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>
          <ul className="project-list">
            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project1} alt="finance" loading="lazy" />
                </figure>
                <h3 className="project-title">Finance</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project2} alt="orizon" loading="lazy" />
                </figure>
                <h3 className="project-title">Orizon</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project3} alt="fundo" loading="lazy" />
                </figure>
                <h3 className="project-title">Fundo</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project4} alt="brawlhalla" loading="lazy" />
                </figure>
                <h3 className="project-title">Brawlhalla</h3>
                <p className="project-category">Applications</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project5} alt="dsm." loading="lazy" />
                </figure>
                <h3 className="project-title">DSM.</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project6} alt="metaspark" loading="lazy" />
                </figure>
                <h3 className="project-title">MetaSpark</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project7} alt="summary" loading="lazy" />
                </figure>
                <h3 className="project-title">Summary</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project8} alt="task manager" loading="lazy" />
                </figure>
                <h3 className="project-title">Task Manager</h3>
                <p className="project-category">Applications</p>
              </a>
            </li>
            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project9} alt="arrival" loading="lazy" />
                </figure>
                <h3 className="project-title">Arrival</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>

      {/* BLOG SECTION */}
      <article
        className={"blog" + (activeTab === "blog" ? " active" : "")}
        data-page="blog"
        style={{ display: activeTab === "blog" ? "block" : "none" }}
      >
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>
        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog1} alt="Design conferences in 2022" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog2} alt="Best fonts every designer" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Best fonts every designer</h3>
                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog3} alt="Design digest #80" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design digest #80</h3>
                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog4} alt="UI interactions of the week" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">UI interactions of the week</h3>
                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog5} alt="The forgotten art of spacing" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>
                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </a>
            </li>
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog6} alt="Design digest #79" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design digest #79</h3>
                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>

      {/* CONTACT SECTION */}
      <article
        className={"contact" + (activeTab === "contact" ? " active" : "")}
        data-page="contact"
        style={{ display: activeTab === "contact" ? "block" : "none" }}
      >
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400" height="300" loading="lazy" title="Google Map" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>
        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>
            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
  </main>

  );
};

export default VCardPortfolio;
