// js/modules/projects/data.js
import { BASE_PATH } from '../../config.js';

export const projects = [
  {
    title: "E-commerce Platform",
    image: `${BASE_PATH}assets/placeholder/placeholder.svg`,
    alt: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Task Management App",
    image: `${BASE_PATH}assets/placeholder/placeholder.svg`,
    alt: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Weather Forecast App",
    image: `${BASE_PATH}assets/placeholder/placeholder.svg`,
    alt: "Weather App",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
    links: {
      live: "#",
      github: "#"
    }
  }
];
