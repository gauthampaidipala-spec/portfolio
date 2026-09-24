export const initialPortfolioData = {
  personalInfo: {
    name: "Gautham",
    lastName: "Paidipala",
    tagline: "Final-Year B.Tech Computer Science Engineering Student",
    availability: "Open to Software Development & Engineering Roles",
    location: "Goa, India",
    email: "gauthampaidipala@gmail.com",
    phone: "+91-8208665218",
    bio: "Final-year B.Tech Computer Science Engineering student with hands-on experience in Python, C/C++, Java, SQL, web technologies, API testing, and software development. Experienced in building practical projects involving AI/ML, automated API testing, databases, and hardware-software integration.",
    story: "Currently gaining professional experience through a technical internship at Fluxatic Global. I have a strong interest in software development, AI/ML, backend development, and test automation, with a relentless focus on building practical solutions, writing maintainable code, and continuously learning new technologies.",
    socials: {
      github: "https://github.com/gauthampaidipala-spec",
      linkedin: "https://www.linkedin.com/in/gautham-paidipala-5b9960340",
      email: "mailto:gauthampaidipala@gmail.com"
    }
  },

  experience: [
    {
      role: "Technical Intern",
      company: "Fluxatic Global",
      location: "India",
      period: "August 2026 – Present",
      type: "Internship",
      description: "Working on technical and software-development tasks in a professional team environment.",
      achievements: [
        "Working on technical and software-development tasks in a professional team environment.",
        "Gaining hands-on exposure to real-world software development workflows and project collaboration.",
        "Applying programming, debugging, problem-solving, and development skills to practical technical tasks.",
        "Collaborating with team members and learning industry-oriented development practices."
      ],
      skills: ["Software Development", "Debugging", "Team Collaboration", "Problem Solving"]
    }
  ],

  projects: [
    {
      id: "api-test-suite",
      title: "AI-Based API Test Suite",
      category: "AI & Testing",
      techStack: ["Python", "Swagger/OpenAPI", "REST APIs", "JSON", "Automated Testing"],
      description: "An automated API testing system to discover and test backend endpoints from Swagger/OpenAPI specifications.",
      keyHighlights: [
        "Built an API parser to identify endpoints, HTTP methods, request parameters, required fields, and API descriptions.",
        "Developed automated test-case generation for valid requests, missing fields, empty inputs, invalid formats, weak passwords, SQL injection, and XSS scenarios.",
        "Designed a modular architecture for API parsing, test generation, and test-data generation.",
        "Focused on improving frontend-backend connectivity testing and reducing repetitive manual API testing."
      ]
    },
    {
      id: "industrial-robotic-arm",
      title: "Industrial Robotic Arm",
      category: "Robotics & Hardware",
      techStack: ["Robotics", "Automation", "Hardware Integration", "System Design"],
      description: "An industrial robotic arm concept designed for handling hazardous materials safely in chemical-industry environments.",
      keyHighlights: [
        "Focused on reducing direct human interaction with hazardous materials through automated handling.",
        "Worked on system design and hardware integration for controlled and precise movement.",
        "Applied practical engineering principles to industrial safety challenges."
      ]
    },
    {
      id: "e-bike",
      title: "High-Efficiency E-Bike",
      category: "Electric Mobility",
      techStack: ["Electric Mobility", "Battery Management", "Hardware", "Power Delivery"],
      description: "Engineered an electric bike designed around a targeted 80 km/h top speed and 120 km range.",
      keyHighlights: [
        "Focused on battery performance, power delivery, efficiency, and system integration.",
        "Applied engineering principles to balance performance and sustainable transportation requirements.",
        "Analyzed electrical power distribution and mechanical integration."
      ]
    },
    {
      id: "e-scooter",
      title: "Urban E-Scooter",
      category: "Electric Mobility",
      techStack: ["Electric Mobility", "Electronics", "Power Distribution", "Urban Transit"],
      description: "Developed an electric scooter designed around a targeted 40 km/h top speed and 80 km range for efficient urban commuting.",
      keyHighlights: [
        "Focused on compact electronic integration and reliable power distribution.",
        "Applied practical engineering principles to develop an efficient urban transportation solution."
      ]
    }
  ],

  skills: {
    technical: [
      {
        name: "Programming Languages",
        items: ["Python", "C", "C++", "Java", "SQL"]
      },
      {
        name: "Web Technologies",
        items: ["HTML", "CSS", "JavaScript"]
      },
      {
        name: "Databases & Tools",
        items: ["MySQL", "PostgreSQL", "Git", "GitHub", "VS Code", "XAMPP"]
      },
      {
        name: "Software & APIs",
        items: ["REST APIs", "JSON", "Swagger / OpenAPI", "API Testing", "Test Automation", "Debugging"]
      },
      {
        name: "AI & Machine Learning",
        items: ["Machine Learning Fundamentals", "Classification", "Clustering", "Data Analysis", "AI-Based Application Development"]
      },
      {
        name: "Core Computer Science",
        items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Computer Networks", "Operating Systems", "Cloud Computing"]
      }
    ]
  },

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Shree Rayeshwar Institute of Engineering & Information Technology",
      location: "Goa, India",
      period: "Final Year | Currently Pursuing",
      highlights: "Core focus on Data Structures & Algorithms, OOP, Database Systems, Computer Networks, and AI/ML."
    },
    {
      degree: "Higher Secondary (HSSC) & Secondary (SSC) Certificates",
      institution: "Kendriya Vidyalaya No. 1, Vasco Da Gama",
      location: "Goa, India",
      period: "2021 & 2023",
      highlights: "Strong foundational academic track in science, mathematics, and computer science."
    }
  ],

  achievements: [
    {
      title: "Converge 3.0",
      award: "3rd Place",
      issuer: "Innovation & Tech Competition"
    },
    {
      title: "PurpleFest Innovation Competition",
      award: "2nd Place",
      issuer: "Innovation Challenge"
    },
    {
      title: "Converge 2.0",
      award: "Certificate of Merit",
      issuer: "Technical Competition"
    }
  ],

  areasOfInterest: [
    "Software Development",
    "AI / Machine Learning",
    "Backend Development",
    "API Testing & Automation",
    "Database Systems",
    "Problem Solving"
  ]
};
