/*
 * Single source of truth for the courses shown on courses.html and datacours.html.
 * Add or edit a course here and both pages stay in sync.
 */
window.ISCHOOL_COURSES = [
  {
    id: "frontend",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Web Development",
    title: "Comprehensive Frontend Web Development",
    summary: "Learn HTML, CSS, JavaScript, and React to build modern, interactive websites from scratch.",
    description:
      "Embark on an exciting journey to learn the latest web interface technologies. This course takes you from scratch to a level where you can build interactive and modern websites and web applications with confidence and professionalism.",
    instructor: "Eng. Ahmed Khaled",
    duration: "8 Weeks (24 training hours)",
    language: "English",
    level: "Beginner to Intermediate",
    certificate: "Certificate of Completion",
    learn: [
      "HTML5 fundamentals for building page structure.",
      "Professional page styling with CSS3, Flexbox, and Grid.",
      "Making websites interactive with JavaScript.",
      "Working with the popular Tailwind CSS framework.",
      "Principles of responsive design for every screen.",
      "Building a complete graduation project to apply all learnings."
    ],
    requirements:
      "No prior programming experience required. All you need is a computer, an internet connection, and a great passion for learning and creativity."
  },
  {
    id: "python",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Programming",
    title: "Python Language Fundamentals",
    summary: "An intensive course for beginners to learn the fundamentals of programming using Python.",
    description:
      "Start your programming journey with Python, one of the most popular and beginner-friendly languages. You will write real programs from day one and build the problem-solving mindset every developer needs.",
    instructor: "Eng. Mona Adel",
    duration: "6 Weeks (18 training hours)",
    language: "English",
    level: "Beginner",
    certificate: "Certificate of Completion",
    learn: [
      "Variables, data types, and operators.",
      "Conditionals, loops, and clean code habits.",
      "Functions, modules, and reusable code.",
      "Lists, dictionaries, and file handling.",
      "Debugging and reading error messages.",
      "A final mini-project built entirely in Python."
    ],
    requirements:
      "A computer with Python installed (we help you set it up) and basic computer skills. No coding background needed."
  },
  {
    id: "pandas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Data Science",
    title: "Data Analysis with Pandas",
    summary: "Discover how to clean, analyze, and visualize data using the Pandas library in Python.",
    description:
      "Turn raw data into clear insights. This hands-on course covers the complete data workflow: loading files, cleaning messy data, grouping and summarizing, and presenting results with charts.",
    instructor: "Eng. Youssef Hany",
    duration: "6 Weeks (18 training hours)",
    language: "English",
    level: "Intermediate",
    certificate: "Certificate of Completion",
    learn: [
      "Reading CSV, Excel, and JSON files.",
      "Selecting, filtering, and sorting data.",
      "Cleaning missing and duplicate values.",
      "Grouping, aggregation, and pivot tables.",
      "Visualizing results with charts.",
      "A complete data story as a final project."
    ],
    requirements:
      "Basic Python knowledge (variables, loops, functions) is recommended. A computer that can run Jupyter Notebook."
  },
  {
    id: "ux",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Design",
    title: "User Experience (UI/UX) Design",
    summary: "Learn the principles of designing user-friendly and engaging interfaces to improve user experience.",
    description:
      "Design products people love to use. You will learn research, wireframing, prototyping, and visual design while building a portfolio-ready case study from an idea to a clickable prototype.",
    instructor: "Eng. Nour Ibrahim",
    duration: "7 Weeks (21 training hours)",
    language: "English",
    level: "Beginner to Intermediate",
    certificate: "Certificate of Completion",
    learn: [
      "User research and building simple personas.",
      "Information architecture and user flows.",
      "Wireframes and low-fidelity prototypes.",
      "Color, typography, and layout systems.",
      "High-fidelity prototypes in Figma.",
      "Presenting a complete UX case study."
    ],
    requirements:
      "No design experience needed. A free Figma account and a computer are enough to get started."
  },
  {
    id: "javascript",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Web Development",
    title: "JavaScript for Professionals",
    summary: "Dive deep into advanced JavaScript concepts like closures, promises, and async/await.",
    description:
      "Move beyond the basics of JavaScript. This course explains how the language really works and gives you the patterns used in professional front-end and back-end code every day.",
    instructor: "Eng. Karim Fathy",
    duration: "8 Weeks (24 training hours)",
    language: "English",
    level: "Intermediate to Advanced",
    certificate: "Certificate of Completion",
    learn: [
      "Scope, closures, and the this keyword.",
      "The event loop and asynchronous JavaScript.",
      "Promises and async/await in real projects.",
      "Modules and modern ES features.",
      "Working with APIs and JSON data.",
      "Testing and debugging professional code."
    ],
    requirements:
      "Comfortable with HTML, CSS, and basic JavaScript (variables, functions, arrays, objects)."
  },
  {
    id: "cybersecurity",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Cybersecurity",
    title: "Introduction to Cybersecurity",
    summary: "Learn the basics of protecting systems and networks from cyber attacks and security vulnerabilities.",
    description:
      "Understand how attackers think and how defenders respond. You will explore common vulnerabilities, safe browsing habits, passwords, encryption, and the ethical rules of security work.",
    instructor: "Eng. Omar Samir",
    duration: "5 Weeks (15 training hours)",
    language: "English",
    level: "Beginner",
    certificate: "Certificate of Completion",
    learn: [
      "The CIA triad and core security concepts.",
      "Password hygiene and multi-factor authentication.",
      "Phishing, malware, and social engineering.",
      "Network basics and safe configuration.",
      "Encryption and HTTPS in plain language.",
      "Responsible disclosure and cybersecurity ethics."
    ],
    requirements:
      "Basic computer and internet skills. No previous security knowledge is required."
  },
  {
    id: "nodejs",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
    category: "Backend Development",
    title: "Building APIs with Node.js",
    summary: "Learn how to build fast, efficient web servers and APIs using Node.js and Express.",
    description:
      "Build the server side of real applications. You will create REST APIs, connect them to a database, add authentication, and deploy a working backend that your frontend can talk to.",
    instructor: "Eng. Hassan Mostafa",
    duration: "7 Weeks (21 training hours)",
    language: "English",
    level: "Intermediate",
    certificate: "Certificate of Completion",
    learn: [
      "Node.js runtime and the npm ecosystem.",
      "Routing and middleware with Express.",
      "REST API design and HTTP status codes.",
      "Connecting an API to a database.",
      "Authentication with tokens.",
      "Deploying and documenting a live API."
    ],
    requirements:
      "Good JavaScript fundamentals, including functions, objects, and promises. Basic command-line usage helps."
  }
];

window.ISCHOOL_WHATSAPP = "https://wa.me/201068867161";

window.getCourseById = function (id) {
  var courses = window.ISCHOOL_COURSES || [];
  if (!id) return courses[0];
  for (var i = 0; i < courses.length; i++) {
    if (courses[i].id === id) return courses[i];
  }
  return courses[0];
};
