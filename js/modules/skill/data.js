// js/modules/skill/data.js

export const skillsData = {
  title: "Skills & Technologies",
  categories: [
    {
      name: "Frontend",
      items: [
        { icon: "devicon-html5-plain colored", name: "HTML5", level: "Mahir", percentage: 95, description: "Membangun struktur web yang semantik, aksesibel, dan SEO-friendly." },
        { icon: "devicon-css3-plain colored", name: "CSS3", level: "Mahir", percentage: 90, description: "Mendesain layout responsif (Flexbox/Grid) dan animasi modern." },
        { icon: "devicon-javascript-plain colored", name: "JavaScript", level: "Mahir", percentage: 85, description: "Mengimplementasikan logika interaktif, manipulasi DOM, dan ES6+." },
        { icon: "devicon-react-original colored", name: "React", level: "Menengah", percentage: 70, description: "Membangun Single Page Application (SPA) dengan komponen fungsional." },
        { icon: "devicon-vuejs-plain colored", name: "Vue.js", level: "Dasar", percentage: 40, description: "Memahami dasar-dasar Vue untuk membuat UI yang reaktif dan modular." }
      ]
    },
    {
      name: "Backend",
      items: [
        { icon: "devicon-nodejs-plain colored", name: "Node.js", level: "Menengah", percentage: 75, description: "Membangun aplikasi sisi server dan RESTful APIs menggunakan Express." },
        { icon: "devicon-python-plain colored", name: "Python", level: "Menengah", percentage: 65, description: "Digunakan untuk scripting, otomatisasi, dan pengembangan web dasar." },
        { icon: "devicon-mysql-plain colored", name: "MySQL", level: "Mahir", percentage: 90, description: "Merancang dan mengelola skema database relasional yang efisien." },
        { icon: "devicon-postgresql-plain colored", name: "PostgreSQL", level: "Menengah", percentage: 70, description: "Alternatif kuat untuk MySQL dengan dukungan fitur-fitur canggih." },
        { icon: "devicon-php-plain colored", name: "PHP", level: "Menengah", percentage: 60, description: "Pengalaman dengan CMS populer dan dasar-dasar framework Laravel." },
        { icon: "devicon-laravel-plain colored", name: "Laravel", level: "Menengah", percentage: 65, description: "Mempercepat pengembangan backend dengan ekosistem dan fitur yang kaya." },
        { icon: "devicon-express-original colored", name: "Express.js", level: "Menengah", percentage: 70, description: "Framework minimalis untuk membangun API dan aplikasi web dengan Node.js." }
      ]
    },
    {
      name: "Tools",
      items: [
        { icon: "devicon-git-plain colored", name: "Git", level: "Mahir", percentage: 95, description: "Sistem kontrol versi untuk kolaborasi tim dan manajemen kode yang efisien." },
        { icon: "devicon-docker-plain colored", name: "Docker", level: "Menengah", percentage: 70, description: "Membuat container untuk konsistensi lingkungan pengembangan dan deployment." },
        { icon: "devicon-figma-plain colored", name: "Figma", level: "Mahir", percentage: 85, description: "Mendesain antarmuka pengguna (UI) dan prototipe interaktif." },
        { icon: "devicon-vscode-plain colored", name: "VS Code", level: "Mahir", percentage: 95, description: "Editor kode utama dengan kustomisasi dan ekstensi untuk produktivitas." },
        { icon: "fas fa-terminal", name: "Terminal", level: "Mahir", percentage: 90, description: "Menggunakan CLI untuk navigasi, otomatisasi skrip, dan manajemen sistem." }
      ]
    }
  ]
};