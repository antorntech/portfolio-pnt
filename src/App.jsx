import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
        {/* header section start */}
        <header
          className={`fixed top-0 left-0 w-full z-50 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center py-5">
              <div>
                <h1 className="text-3xl font-bold text-black">
                  ANT<span className="text-primary">O</span>R
                </h1>
              </div>
              <div>
                <ul className="flex items-center gap-5">
                  <li>
                    <button
                      onClick={() => scrollToSection("home")}
                      className="text-lg uppercase font-semibold"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-lg uppercase font-semibold"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="text-lg uppercase font-semibold"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-lg uppercase font-semibold"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="text-lg uppercase font-semibold"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("blogs")}
                      className="text-lg uppercase font-semibold"
                    >
                      Blogs
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-lg uppercase font-semibold"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* hero section start */}
        <div
          id="home"
          className="mt-12 flex justify-between items-center py-12"
        >
          <div>
            <p className="uppercase text-xl font-bold text-primary">
              hello! this is antor
            </p>
            <h1 className="text-7xl font-bold leading-tight">
              Creative <span className="text-primary">UI/UX</span> <br />{" "}
              Designer & Developer
            </h1>
            <div className="flex items-center gap-5 mt-8">
              <button className="font-bold bg-primary border-2 border-primary hover:bg-white text-white hover:text-black px-4 py-2 rounded-md transition-all duration-500">
                Hire Me
              </button>
              <button className="font-bold border-2 border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white transition-all duration-500">
                Download CV
              </button>
            </div>
          </div>
          <div>
            <img src="/images/bg_1.png" alt="banner image" />
          </div>
        </div>

        {/* work history start */}
        <div className="flex justify-between gap-5 py-12">
          <div className="flex items-center gap-3 mx-auto">
            <div>
              <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
                <img src="/images/suitcase.png" alt="" className="" />
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-shadoblack">750</p>
              <p className="text-xl font-bold uppercase text-primary">
                project complete
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mx-auto">
            <div>
              <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
                <img src="/images/clients.png" alt="" />
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-shadoblack">750</p>
              <p className="text-xl font-bold uppercase text-primary">
                happy clients
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mx-auto">
            <div>
              <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
                <img src="/images/calendar.png" alt="" />
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold text-shadoblack">750</p>
              <p className="text-xl font-bold uppercase text-primary">
                years experienced
              </p>
            </div>
          </div>
        </div>

        {/* about section start */}
        <section id="about">
          <div className="grid grid-cols-3 gap-10 py-12">
            <div className="col-span-1">
              <img
                src="/images/about-1.png"
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <p className="text-xl text-primary uppercase font-semibold">
                my intro
              </p>
              <h1 className="text-shadoblack text-5xl font-bold py-3">
                About Me
              </h1>
              <p className="text-xl text-gray leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore repudiandae ipsa voluptatem sapiente nostrum, aut
                rerum nesciunt voluptate ratione quidem temporibus veniam, rem
                blanditiis deserunt sint odit eum iste aliquam, eveniet non illo
                dolorum. Voluptatum velit at, nemo tenetur eveniet, neque modi
                enim repellendus obcaecati iste vel voluptates praesentium
                nostrum?
              </p>
              <ul className="py-3 flex flex-col gap-3">
                <li className="flex items-center gap-5 text-xl font-semibold">
                  <p>Name</p>
                  <p className="text-primary">: AM ANTOR</p>
                </li>
                <li className="flex items-center gap-5 text-xl font-semibold">
                  <p>Email</p>
                  <p className="text-primary">: antor@peoplentech.net</p>
                </li>
                <li className="flex items-center gap-5 text-xl font-semibold">
                  <p>Phone</p>
                  <p className="text-primary">: 01608081907</p>
                </li>
                <li className="flex items-center gap-5 text-xl font-semibold">
                  <p>Address</p>
                  <p className="text-primary">: Lalmatia, Mohammadpur, Dhaka</p>
                </li>
              </ul>
              <div className="flex items-center gap-12 mt-3">
                <div className="flex items-center gap-2">
                  <div className="bg-primary w-1 h-12"></div>
                  <div className="bg-primary p-2 rounded-full">
                    <img src="/images/music.png" alt="" />
                  </div>
                  <p className="text-xl font-semibold">Music</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary w-1 h-12"></div>
                  <div className="bg-primary p-2 rounded-full">
                    <img src="/images/travel.png" alt="" />
                  </div>
                  <p className="text-xl font-semibold">Travel</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary w-1 h-12"></div>
                  <div className="bg-primary p-2 rounded-full">
                    <img src="/images/movie.png" alt="" />
                  </div>
                  <p className="text-xl font-semibold">Movie</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary w-1 h-12"></div>
                  <div className="bg-primary p-2 rounded-full">
                    <img src="/images/sports.png" alt="" />
                  </div>
                  <p className="text-xl font-semibold">Sports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills section start */}
        <section id="skills">
          <div className="py-12">
            <header className="flex flex-col justify-center items-center gap-3">
              <p className="text-lg uppercase text-primary font-bold tracking-tight">
                skills
              </p>
              <h1 className="text-5xl font-bold">My Skills</h1>
              <p className="text-gray text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, incidunt.
              </p>
            </header>
            <div className="grid grid-cols-3 gap-12 mt-12">
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">HTML</h1>
                <CircularProgressbar
                  value={90}
                  text={`90%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">CSS</h1>
                <CircularProgressbar
                  value={80}
                  text={`80%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">React</h1>
                <CircularProgressbar
                  value={70}
                  text={`70%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">Node JS</h1>
                <CircularProgressbar
                  value={70}
                  text={`70%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">Express</h1>
                <CircularProgressbar
                  value={70}
                  text={`70%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
                <h1 className="font-bold text-xl">MongoDB</h1>
                <CircularProgressbar
                  value={70}
                  text={`70%`}
                  className="size-36"
                  styles={{
                    path: {
                      stroke: "#B1B493",
                    },
                    text: {
                      fill: "#000",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* services section start */}
        <section id="services">
          <div className="py-12">
            <header className="flex flex-col justify-center items-center gap-3">
              <p className="text-lg uppercase text-primary font-bold tracking-tight">
                services
              </p>
              <h1 className="text-5xl font-bold">My Services</h1>
              <p className="text-gray text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, incidunt.
              </p>
            </header>
            <div className="grid grid-cols-3 gap-x-12 gap-y-24 mt-24">
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">Web Design</h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/3d.png" alt="" />
                </div>
              </div>
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">
                  Web Application
                </h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/appdevelopment.png" alt="" />
                </div>
              </div>
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">
                  Web Development
                </h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/web.png" alt="" />
                </div>
              </div>
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">
                  Responsive Design
                </h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/responsive.png" alt="" />
                </div>
              </div>
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">ERP System</h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/erp.png" alt="" />
                </div>
              </div>
              <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
                <h1 className="text-3xl font-bold py-3 mt-5">CRM System</h1>
                <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit debitis facere quis, alias aut illo accusamus quia
                  dolor iure numquam.
                </p>
                <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
                  <img src="/images/crm.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* projects section start */}
        <section id="projects">
          <div className="py-12">
            <header className="flex flex-col justify-center items-center gap-3">
              <p className="text-lg uppercase text-primary font-bold tracking-tight">
                projects
              </p>
              <h1 className="text-5xl font-bold">My Projects</h1>
              <p className="text-gray text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, incidunt.
              </p>
            </header>
            <div className="grid grid-cols-3 gap-12 mt-12">
              <div className="group bg-[url('/images/work-1.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
              <div className="group bg-[url('/images/work-2.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
              <div className="group bg-[url('/images/work-3.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
              <div className="group bg-[url('/images/work-4.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
              <div className="group bg-[url('/images/work-5.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
              <div className="group bg-[url('/images/work-6.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
                <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
                  <h1 className="text-2xl text-white font-bold">
                    Frontend Development with React
                  </h1>
                  <p className="text-primary text-lg uppercase font-bold mt-2">
                    web design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* blogs section start */}
        <section id="blogs">
          <div className="py-12">
            <header className="flex flex-col justify-center items-center gap-3">
              <p className="text-lg uppercase text-primary font-bold tracking-tight">
                blogs
              </p>
              <h1 className="text-5xl font-bold">My Blogs</h1>
              <p className="text-gray text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, incidunt.
              </p>
            </header>
            <div className="grid grid-cols-3 gap-12 mt-12">
              <div className="group cursor-pointer rounded-md">
                <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
                  <img
                    src="/images/blog-1.jpg"
                    alt=""
                    className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-gray text-md pb-2">Jan 01, 2023</p>
                  <h1 className="text-2xl font-bold">Blog Title 01</h1>
                  <p className="text-lg text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, quia.
                  </p>
                  <p className="text-primary font-bold text-lg">Read More</p>
                </div>
              </div>
              <div className="group cursor-pointer rounded-md">
                <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
                  <img
                    src="/images/blog-2.jpg"
                    alt=""
                    className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-gray text-md pb-2">Jan 01, 2023</p>
                  <h1 className="text-2xl font-bold">Blog Title 02</h1>
                  <p className="text-lg text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, quia.
                  </p>
                  <p className="text-primary font-bold text-lg">Read More</p>
                </div>
              </div>
              <div className="group cursor-pointer rounded-md">
                <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
                  <img
                    src="/images/blog-3.jpg"
                    alt=""
                    className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-gray text-md pb-2">Jan 01, 2023</p>
                  <h1 className="text-2xl font-bold">Blog Title 03</h1>
                  <p className="text-lg text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, quia.
                  </p>
                  <p className="text-primary font-bold text-lg">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact section start */}
        <section id="contact">
          <div className="py-12">
            <header className="flex flex-col justify-center items-center gap-3">
              <p className="text-lg uppercase text-primary font-bold tracking-tight">
                contact
              </p>
              <h1 className="text-5xl font-bold">Have a Project?</h1>
              <p className="text-gray text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam, incidunt.
              </p>
            </header>
            <div className="grid grid-cols-3 gap-12 mt-12">
              <div className="col-span-2">
                <form action="#">
                  <div className="w-full flex items-center gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                    />
                  </div>
                  <div className="mt-5">
                    <textarea
                      name="message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                      className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="px-12 py-3 bg-primary text-white rounded-md font-bold hover:bg-shadoblack transition-all duration-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <FaMapMarkerAlt className="text-3xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Location</h1>
                      <p className="text-gray text-lg">
                        151/7, 151/7, Good Luck Center (7th & 8th) Floor, Green
                        Road, Dhaka - 1205, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <FaPhone className="text-3xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Phone</h1>
                      <p className="text-gray text-lg">+880179-944-6655</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <FaEnvelope className="text-3xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Email</h1>
                      <p className="text-gray text-lg">portfolio@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <FaGlobe className="text-3xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Website</h1>
                      <p className="text-gray text-lg">www.portfolio.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full h-36 bg-primary flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white py-3">
            ANT<span className="text-black">O</span>R
          </h1>
          <p className="text-white text-lg">
            © Copyright 2024. All Rights Reserved
          </p>
        </footer>
      </main>
    </>
  );
};

export default App;
