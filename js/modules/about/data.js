// js/modules/about/data.js

import { BASE_PATH } from '../../config.js';

export const aboutData = {
  image: {
    src: `${BASE_PATH}assets/placeholder/placeholder.svg?height=400&width=400`,
    alt: "About me"
  },
  paragraphs: [
    "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source project, or enjoying a good cup of coffee while reading about the latest industry trends."
  ],
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" }
  ]
};