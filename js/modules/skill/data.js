// js/modules/skill/data.js

export const skillsData = {
  title: "Skills & Technologies",
  categories: [
    {
      name: "Frontend",
      items: [
        { icon: "devicon-html5-plain colored", name: "HTML5", level: "Advanced", percentage: 95, description: "Building semantic, accessible, and SEO-friendly web structures." },
        { icon: "devicon-css3-plain colored", name: "CSS3", level: "Advanced", percentage: 90, description: "Designing responsive layouts (Flexbox/Grid) and modern animations." },
        { icon: "devicon-javascript-plain colored", name: "JavaScript", level: "Advanced", percentage: 85, description: "Implementing interactive logic, DOM manipulation, and ES6+ features." },
        { icon: "devicon-react-original colored", name: "React", level: "Intermediate", percentage: 70, description: "Building Single Page Applications (SPAs) with functional components." },
        { icon: "devicon-vuejs-plain colored", name: "Vue.js", level: "Basic", percentage: 40, description: "Understanding the basics of Vue to create reactive and modular UIs." }
      ]
    },
    {
      name: "Backend",
      items: [
        { icon: "devicon-nodejs-plain colored", name: "Node.js", level: "Intermediate", percentage: 75, description: "Building server-side applications and RESTful APIs using Express." },
        { icon: "devicon-python-plain colored", name: "Python", level: "Intermediate", percentage: 65, description: "Used for scripting, automation, and basic web development." },
        { icon: "devicon-mysql-plain colored", name: "MySQL", level: "Advanced", percentage: 90, description: "Designing and managing efficient relational database schemas." },
        { icon: "devicon-postgresql-plain colored", name: "PostgreSQL", level: "Intermediate", percentage: 70, description: "A powerful alternative to MySQL with support for advanced features." },
        { icon: "devicon-php-plain colored", name: "PHP", level: "Intermediate", percentage: 60, description: "Experience with popular CMS and the basics of the Laravel framework." },
        { icon: "devicon-laravel-plain colored", name: "Laravel", level: "Intermediate", percentage: 65, description: "Accelerating backend development with its rich ecosystem and features." },
        { icon: "devicon-express-original colored", name: "Express.js", level: "Intermediate", percentage: 70, description: "A minimalist framework for building APIs and web applications with Node.js." }
      ]
    },
    {
      name: "Tools",
      items: [
        { icon: "devicon-git-plain colored", name: "Git", level: "Advanced", percentage: 95, description: "Version control system for team collaboration and efficient code management." },
        { icon: "devicon-docker-plain colored", name: "Docker", level: "Intermediate", percentage: 70, description: "Creating containers for consistent development and deployment environments." },
        { icon: "devicon-figma-plain colored", name: "Figma", level: "Advanced", percentage: 85, description: "Designing user interfaces (UI) and interactive prototypes." },
        { icon: "devicon-vscode-plain colored", name: "VS Code", level: "Advanced", percentage: 95, description: "Primary code editor with customizations and extensions for productivity." },
        { icon: "fas fa-terminal", name: "Terminal", level: "Advanced", percentage: 90, description: "Using the CLI for navigation, script automation, and system management." }
      ]
    }
  ]
};