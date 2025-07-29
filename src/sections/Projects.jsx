import { useState } from "react";
import weatherImg from "../assets/weather.png.png";
import ecommerce from "../assets/e-commerce-app.png";
import todo from "../assets/todo-app.png";
import loginSignup from "../assets/login-app.png";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [projects] = useState([
    {
      image: weatherImg,
      name: "Weather App",
      brief:
        "A real-time weather app using HTML, CSS, JS and OpenWeatherMap API. Shows current weather of any city.",
      link: "https://muhammadahsan123456.github.io/Weather-APP/",
    },
    {
      image: ecommerce,
      name: "E-Commerce App",
      brief: "A modern e-commerce store frontend built using React & Tailwind CSS.",
      link: "https://sensational-begonia-04abb3.netlify.app",
    },
    {
      image: todo,
      name: "Todo App",
      brief: "A simple and clean todo list app with Node.js, Express, MongoDB, and add/delete/update features.",
      link: "https://velvety-chimera-396509.netlify.app",
    },
    {
      image: loginSignup,
      name: "Login/Signup with Node.js",
      brief: "Authentication app using Node.js, Express, MongoDB, JWT & bcrypt.",
      link: "https://lucent-choux-e3ffd2.netlify.app",
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>

                <div className="cursor-pointer w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={`${project.name} Image`}
                      className="w-full h-48 object-cover rounded-md transition hover:scale-105"
                    />
                    <p className="text-blue-400 font-semibold mt-2 hover:underline">
                      View Live Project →
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
