// script.js
const rolesContainer = document.querySelector('.roles-container');
const skillsContainer = document.querySelector('.skills-container');
const roadmapSection = document.getElementById('roadmap-section');
const backButton = document.getElementById('back-button');
const roadmapTitle = document.getElementById('roadmap-title');
const roadmapOverview = document.getElementById('roadmap-overview');
const stepsContainer = document.getElementById('steps-container');


// Projects Section DOM Elements
const projectsSection = document.getElementById('projects-section');
const nestedProjectsSection = document.getElementById('nested-projects-section');
const projectDetailsSection = document.getElementById('project-details-section');
const nestedProjectsTitle = document.getElementById('nested-projects-title');
const projectDetailsTitle = document.getElementById('project-details-title');
const projectDetailsOverview = document.getElementById('project-details-overview');
const startWorkingButton = document.getElementById('start-working-button');
const backToProjectsButton = document.getElementById('back-to-projects-button');
const backToNestedProjectsButton = document.getElementById('back-to-nested-projects-button');


// Sample data for roles and roadmaps
const roadmaps = {
  frontend: {
    title: "Frontend Developer Roadmap",
    overview: "Frontend development involves building the user interface of websites and web applications. It's a highly in-demand skill, with companies looking for developers who can create responsive, accessible, and performant websites. Frontend developers work with HTML, CSS, and JavaScript, along with frameworks like React, Angular, and Vue.js. Mastering frontend development also requires knowledge of tools like Webpack, Git, and testing libraries. This roadmap will guide you from the basics to becoming an expert frontend developer.",
    steps: [
      {
        title: "Learn HTML",
        overview: "HTML is the backbone of any website.",
        links: [
          { text: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
          { text: "YouTube Video", url: "https://www.youtube.com/watch?v=example" }
        ]
      },
      {
        title: "Learn CSS",
        overview: "CSS is used to style websites.",
        links: [
          { text: "CSS Tutorial", url: "https://www.w3schools.com/css/" }

        ]
      },
      {
        title: "Learn JavaScript",
        overview: "JavaScript is the programming language of the web. Learn basics like variables, functions, DOM manipulation, and ES6+ features.",
        links: [
          { text: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" },
          { text: "JavaScript.info", url: "https://javascript.info/" }
        ]
      },
      {
        title: "Learn a Frontend Framework (React, Angular, or Vue)",
        overview: "Frameworks like React, Angular, and Vue.js make it easier to build complex user interfaces. Choose one and master it.",
        links: [
          { text: "React Official Docs", url: "https://reactjs.org/" },
          { text: "Vue.js Guide", url: "https://vuejs.org/guide/introduction.html" }
        ]
      },
      {
        title: "Learn State Management (Redux, Vuex)",
        overview: "State management libraries like Redux (for React) and Vuex (for Vue) help manage application state in large-scale apps.",
        links: [
          { text: "Redux Tutorial", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" },
          { text: "Vuex Guide", url: "https://vuex.vuejs.org/" }
        ]
      },
      {
        title: "Learn Testing (Jest, Cypress)",
        overview: "Testing is crucial for building reliable applications. Learn unit testing with Jest and end-to-end testing with Cypress.",
        links: [
          { text: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
          { text: "Cypress Tutorial", url: "https://docs.cypress.io/guides/getting-started/writing-your-first-test" }
        ]
      },
      {
        title: "Learn Build Tools (Webpack, Vite)",
        overview: "Build tools like Webpack and Vite help optimize and bundle your code for production.",
        links: [
          { text: "Webpack Guide", url: "https://webpack.js.org/guides/getting-started/" },
          { text: "Vite Docs", url: "https://vitejs.dev/guide/" }
        ]
      },
      {
        title: "Learn Version Control (Git)",
        overview: "Git is essential for collaborating on projects and managing code versions.",
        links: [
          { text: "Git Tutorial", url: "https://www.w3schools.com/git/" },
          { text: "GitHub Guides", url: "https://guides.github.com/" }
        ]
      },
      {
        title: "Learn Responsive Design",
        overview: "Responsive design ensures your website works on all devices. Learn media queries and frameworks like Bootstrap.",
        links: [
          { text: "Bootstrap Docs", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
          { text: "Responsive Design Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" }
        ]
      },
    ]
  },
  backend: {
    title: "Backend Developer Roadmap",
    overview: "Backend development involves building the server-side logic, databases, and APIs that power web applications. It's a critical skill for creating scalable and secure systems. Backend developers work with programming languages like Python, Java, and Node.js, along with frameworks like Django, Spring, and Express. This roadmap will guide you from the basics to becoming an expert backend developer.",
    steps: [
      {
        title: "Learn a Programming Language (Python, Java, Node.js)",
        overview: "Choose a backend language like Python, Java, or Node.js and master its fundamentals.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" },
          { text: "Node.js Docs", url: "https://nodejs.org/en/docs/" }
        ]
      },
      {
        title: "Learn a Backend Framework (Django, Spring, Express)",
        overview: "Frameworks like Django (Python), Spring (Java), and Express (Node.js) simplify backend development.",
        links: [
          { text: "Django Docs", url: "https://docs.djangoproject.com/en/4.2/" },
          { text: "Express Guide", url: "https://expressjs.com/" }
        ]
      },
      {
        title: "Learn Databases (SQL and NoSQL)",
        overview: "Databases are essential for storing and managing data. Learn SQL (e.g., MySQL) and NoSQL (e.g., MongoDB).",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { text: "MongoDB Docs", url: "https://www.mongodb.com/docs/" }
        ]
      },
      {
        title: "Learn RESTful APIs",
        overview: "RESTful APIs are used to communicate between the frontend and backend. Learn how to design and build them.",
        links: [
          { text: "REST API Tutorial", url: "https://restfulapi.net/" }
        ]
      },
      {
        title: "Learn Caching (Redis, Memcached)",
        overview: "Caching improves application performance. Learn tools like Redis and Memcached.",
        links: [
          { text: "Redis Docs", url: "https://redis.io/docs/" }
        ]
      },
      {
        title: "Learn Message Queues (RabbitMQ, Kafka)",
        overview: "Message queues help decouple and scale applications. Learn RabbitMQ and Apache Kafka.",
        links: [
          { text: "RabbitMQ Tutorial", url: "https://www.rabbitmq.com/getstarted.html" }
        ]
      },
      {
        title: "Learn CI/CD Pipelines",
        overview: "Continuous Integration and Deployment (CI/CD) pipelines automate testing and deployment.",
        links: [
          { text: "CI/CD Guide", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }
        ]
      },
      {
        title: "Learn Monitoring and Logging",
        overview: "Monitoring and logging tools like Prometheus and ELK Stack help track application performance.",
        links: [
          { text: "Prometheus Docs", url: "https://prometheus.io/docs/" }
        ]
      }
    ]
  },
  fullstack: {
    title: "Full-Stack Developer Roadmap",
    overview: "Full-stack developers work on both the frontend and backend of web applications. They are versatile professionals who can handle everything from designing user interfaces to managing databases and servers. Full-stack development requires knowledge of frontend technologies (HTML, CSS, JavaScript) and backend technologies (Node.js, Python, etc.), along with frameworks like React, Express, and Django. This roadmap will guide you from the basics to becoming an expert full-stack developer.",
    steps: [
      {
        title: "Learn Frontend Basics (HTML, CSS, JavaScript)",
        overview: "Start with the fundamentals of frontend development: HTML for structure, CSS for styling, and JavaScript for interactivity.",
        links: [
          { text: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
          { text: "CSS Tutorial", url: "https://www.w3schools.com/css/" },
          { text: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" }
        ]
      },
      {
        title: "Learn a Frontend Framework (React, Angular, or Vue)",
        overview: "Frameworks like React, Angular, and Vue.js simplify frontend development and help build dynamic user interfaces.",
        links: [
          { text: "React Official Docs", url: "https://reactjs.org/" },
          { text: "Vue.js Guide", url: "https://vuejs.org/guide/introduction.html" }
        ]
      },
      {
        title: "Learn Backend Basics (Node.js, Python, or Java)",
        overview: "Choose a backend language like Node.js, Python, or Java and learn its fundamentals.",
        links: [
          { text: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" }
        ]
      },
      {
        title: "Learn a Backend Framework (Express, Django, or Spring)",
        overview: "Frameworks like Express (Node.js), Django (Python), and Spring (Java) simplify backend development.",
        links: [
          { text: "Express Guide", url: "https://expressjs.com/" },
          { text: "Django Docs", url: "https://docs.djangoproject.com/en/4.2/" }
        ]
      },
      {
        title: "Learn Databases (SQL and NoSQL)",
        overview: "Databases are essential for storing and managing data. Learn SQL (e.g., MySQL) and NoSQL (e.g., MongoDB).",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { text: "MongoDB Docs", url: "https://www.mongodb.com/docs/" }
        ]
      },
      {
        title: "Learn RESTful APIs",
        overview: "RESTful APIs are used to communicate between the frontend and backend. Learn how to design and build them.",
        links: [
          { text: "REST API Tutorial", url: "https://restfulapi.net/" }
        ]
      },
      {
        title: "Learn Authentication and Authorization",
        overview: "Learn how to implement secure authentication (e.g., JWT, OAuth) and authorization in your applications.",
        links: [
          { text: "JWT Guide", url: "https://jwt.io/introduction" }
        ]
      },
      {
        title: "Learn Version Control (Git)",
        overview: "Git is essential for collaborating on projects and managing code versions.",
        links: [
          { text: "Git Tutorial", url: "https://www.w3schools.com/git/" },
          { text: "GitHub Guides", url: "https://guides.github.com/" }
        ]
      },
      {
        title: "Learn Deployment (Heroku, AWS, Netlify)",
        overview: "Learn how to deploy full-stack applications using platforms like Heroku, AWS, and Netlify.",
        links: [
          { text: "Heroku Docs", url: "https://devcenter.heroku.com/" },
          { text: "AWS Amplify", url: "https://aws.amazon.com/amplify/" }
        ]
      },
      {
        title: "Learn Testing (Jest, Cypress, Postman)",
        overview: "Testing ensures your application works as expected. Learn unit testing, end-to-end testing, and API testing.",
        links: [
          { text: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
          { text: "Postman Tutorial", url: "https://learning.postman.com/" }
        ]
      }
    ]
  },
  datascientist: {
    title: "Data Scientist Roadmap",
    overview: "Data science involves extracting insights from data using statistical, mathematical, and programming skills. It's one of the most in-demand fields, with applications in industries like healthcare, finance, and technology. Data scientists work with tools like Python, R, and SQL, along with libraries like Pandas, NumPy, and Scikit-learn. This roadmap will guide you from the basics to becoming an expert data scientist.",
    steps: [
      {
        title: "Learn Python",
        overview: "Python is the most popular programming language for data science. Learn its basics and data science libraries.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" },
          { text: "Python for Data Science", url: "https://www.datacamp.com/courses/intro-to-python-for-data-science" }
        ]
      },
      {
        title: "Learn Statistics and Probability",
        overview: "Statistics and probability are the foundation of data science. Learn concepts like distributions, hypothesis testing, and regression.",
        links: [
          { text: "Statistics Tutorial", url: "https://www.khanacademy.org/math/statistics-probability" }
        ]
      },
      {
        title: "Learn Data Manipulation (Pandas, NumPy)",
        overview: "Pandas and NumPy are essential libraries for data manipulation and analysis in Python.",
        links: [
          { text: "Pandas Tutorial", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html" },
          { text: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" }
        ]
      },
      {
        title: "Learn Data Visualization (Matplotlib, Seaborn)",
        overview: "Data visualization helps communicate insights effectively. Learn libraries like Matplotlib and Seaborn.",
        links: [
          { text: "Matplotlib Tutorial", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { text: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" }
        ]
      },
      {
        title: "Learn Machine Learning (Scikit-learn, TensorFlow)",
        overview: "Machine learning is a core skill for data scientists. Learn algorithms and frameworks like Scikit-learn and TensorFlow.",
        links: [
          { text: "Scikit-learn Tutorial", url: "https://scikit-learn.org/stable/tutorial/index.html" },
          { text: "TensorFlow Guide", url: "https://www.tensorflow.org/tutorials" }
        ]
      },
      {
        title: "Learn SQL for Data Analysis",
        overview: "SQL is used to query and manipulate data in relational databases.",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }
        ]
      },
      {
        title: "Learn Big Data Tools (Hadoop, Spark)",
        overview: "Big data tools like Hadoop and Spark are used to process large datasets.",
        links: [
          { text: "Hadoop Tutorial", url: "https://hadoop.apache.org/docs/stable/" },
          { text: "Spark Docs", url: "https://spark.apache.org/docs/latest/" }
        ]
      },
      {
        title: "Learn Deep Learning (PyTorch, Keras)",
        overview: "Deep learning is used for complex tasks like image recognition and natural language processing.",
        links: [
          { text: "PyTorch Tutorial", url: "https://pytorch.org/tutorials/" },
          { text: "Keras Guide", url: "https://keras.io/getting_started/" }
        ]
      },
      {
        title: "Learn Data Engineering Basics",
        overview: "Data engineering involves building pipelines to collect and process data.",
        links: [
          { text: "Data Engineering Guide", url: "https://www.datacamp.com/courses/intro-to-data-engineering" }
        ]
      },
      {
        title: "Learn Cloud Platforms (AWS, GCP, Azure)",
        overview: "Cloud platforms like AWS, GCP, and Azure are used to deploy and scale data science solutions.",
        links: [
          { text: "AWS Machine Learning", url: "https://aws.amazon.com/machine-learning/" }
        ]
      }
    ]
  },
  mobiledev: {
    title: "Mobile App Developer Roadmap",
    overview: "Mobile app development involves creating applications for iOS and Android platforms. Mobile developers work with programming languages like Swift (for iOS) and Kotlin (for Android), along with frameworks like Flutter and React Native. This field is highly in-demand, with opportunities in industries like gaming, e-commerce, and healthcare. This roadmap will guide you from the basics to becoming an expert mobile app developer.",
    steps: [
      {
        title: "Choose a Platform (iOS or Android)",
        overview: "Decide whether you want to develop for iOS (using Swift) or Android (using Kotlin).",
        links: [
          { text: "iOS vs Android Development", url: "https://www.upwork.com/resources/ios-vs-android-development" }
        ]
      },
      {
        title: "Learn Swift (for iOS) or Kotlin (for Android)",
        overview: "Swift is the primary language for iOS development, while Kotlin is used for Android development.",
        links: [
          { text: "Swift Tutorial", url: "https://docs.swift.org/swift-book/" },
          { text: "Kotlin Tutorial", url: "https://kotlinlang.org/docs/home.html" }
        ]
      },
      {
        title: "Learn Cross-Platform Development (Flutter, React Native)",
        overview: "Cross-platform frameworks like Flutter and React Native allow you to build apps for both iOS and Android using a single codebase.",
        links: [
          { text: "Flutter Docs", url: "https://flutter.dev/docs" },
          { text: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" }
        ]
      },
      {
        title: "Learn UI/UX Design for Mobile",
        overview: "Mobile apps require intuitive and user-friendly designs. Learn about mobile design principles and tools like Figma.",
        links: [
          { text: "Mobile UI/UX Design Guide", url: "https://www.smashingmagazine.com/mobile-ui-design/" }
        ]
      },
      {
        title: "Learn APIs and Backend Integration",
        overview: "Mobile apps often interact with backend services. Learn how to integrate APIs and handle data.",
        links: [
          { text: "REST API Tutorial", url: "https://restfulapi.net/" }
        ]
      },
      {
        title: "Learn State Management (Provider, Redux)",
        overview: "State management is crucial for managing app data. Learn tools like Provider (Flutter) and Redux (React Native).",
        links: [
          { text: "Provider Tutorial", url: "https://pub.dev/packages/provider" },
          { text: "Redux Tutorial", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" }
        ]
      },
      {
        title: "Learn Testing (Unit, Integration, UI)",
        overview: "Testing ensures your app works as expected. Learn unit testing, integration testing, and UI testing.",
        links: [
          { text: "Flutter Testing", url: "https://flutter.dev/docs/testing" },
          { text: "React Native Testing", url: "https://reactnative.dev/docs/testing-overview" }
        ]
      },
      {
        title: "Learn App Deployment (App Store, Play Store)",
        overview: "Learn how to publish your app on the App Store (iOS) and Google Play Store (Android).",
        links: [
          { text: "App Store Guide", url: "https://developer.apple.com/app-store/submissions/" },
          { text: "Play Store Guide", url: "https://developer.android.com/studio/publish" }
        ]
      },
      {
        title: "Learn Performance Optimization",
        overview: "Optimize your app for performance, including reducing load times and improving battery efficiency.",
        links: [
          { text: "Flutter Performance", url: "https://flutter.dev/docs/perf/rendering" },
          { text: "React Native Performance", url: "https://reactnative.dev/docs/performance" }
        ]
      },
      {
        title: "Learn Advanced Topics (Animations, AR/VR)",
        overview: "Explore advanced topics like animations, augmented reality (AR), and virtual reality (VR) for mobile apps.",
        links: [
          { text: "Flutter Animations", url: "https://flutter.dev/docs/development/ui/animations" },
          { text: "ARCore (Android AR)", url: "https://developers.google.com/ar" }
        ]
      }
    ]
  },
  blockchain: {
    title: "Blockchain Developer Roadmap",
    overview: "Blockchain development involves creating decentralized applications (dApps) and smart contracts. Blockchain developers work with platforms like Ethereum, Solana, and tools like Solidity and Rust. This field is revolutionizing industries like finance, supply chain, and healthcare. This roadmap will guide you from the basics to becoming an expert blockchain developer.",
    steps: [
      {
        title: "Learn Blockchain Basics",
        overview: "Understand the fundamentals of blockchain technology, including decentralization, consensus algorithms, and cryptography.",
        links: [
          { text: "Blockchain Basics", url: "https://www.investopedia.com/terms/b/blockchain.asp" }
        ]
      },
      {
        title: "Learn Cryptography",
        overview: "Cryptography is the foundation of blockchain security. Learn about hashing, digital signatures, and encryption.",
        links: [
          { text: "Cryptography Tutorial", url: "https://www.tutorialspoint.com/cryptography/index.htm" }
        ]
      },
      {
        title: "Learn Smart Contract Development (Solidity, Rust)",
        overview: "Smart contracts are self-executing contracts with the terms directly written into code. Learn Solidity (for Ethereum) and Rust (for Solana).",
        links: [
          { text: "Solidity Docs", url: "https://docs.soliditylang.org/en/v0.8.17/" },
          { text: "Rust Tutorial", url: "https://www.rust-lang.org/learn" }
        ]
      },
      {
        title: "Learn Ethereum Development",
        overview: "Ethereum is the most popular blockchain for dApps. Learn how to build and deploy dApps on Ethereum.",
        links: [
          { text: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/" }
        ]
      },
      {
        title: "Learn Solana Development",
        overview: "Solana is a high-performance blockchain. Learn how to build and deploy dApps on Solana.",
        links: [
          { text: "Solana Docs", url: "https://docs.solana.com/" }
        ]
      },
      {
        title: "Learn Web3.js and Ethers.js",
        overview: "Web3.js and Ethers.js are libraries for interacting with Ethereum blockchain.",
        links: [
          { text: "Web3.js Docs", url: "https://web3js.readthedocs.io/" },
          { text: "Ethers.js Docs", url: "https://docs.ethers.io/" }
        ]
      },
      {
        title: "Learn Decentralized Storage (IPFS, Filecoin)",
        overview: "Decentralized storage solutions like IPFS and Filecoin are used to store data on the blockchain.",
        links: [
          { text: "IPFS Docs", url: "https://docs.ipfs.io/" },
          { text: "Filecoin Docs", url: "https://docs.filecoin.io/" }
        ]
      },
      {
        title: "Learn Tokenomics",
        overview: "Tokenomics involves designing the economic model of a blockchain project, including token distribution and incentives.",
        links: [
          { text: "Tokenomics Guide", url: "https://www.investopedia.com/terms/t/tokenomics.asp" }
        ]
      },
      {
        title: "Learn Security Best Practices",
        overview: "Blockchain security is critical. Learn about common vulnerabilities and best practices.",
        links: [
          { text: "Blockchain Security Guide", url: "https://consensys.net/blockchain-use-cases/security/" }
        ]
      },
      {
        title: "Learn Advanced Topics (Layer 2, NFTs, DAOs)",
        overview: "Explore advanced topics like Layer 2 solutions, NFTs (non-fungible tokens), and DAOs (decentralized autonomous organizations).",
        links: [
          { text: "Layer 2 Solutions", url: "https://ethereum.org/en/layer-2/" },
          { text: "NFTs Explained", url: "https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq" }
        ]
      }
    ]
  },
  cybersecurity: {
    title: "Cybersecurity Specialist Roadmap",
    overview: "Cybersecurity involves protecting systems, networks, and data from digital attacks. Cybersecurity specialists work on identifying vulnerabilities, implementing security measures, and responding to incidents. This field is critical in today's digital world, with opportunities in industries like finance, healthcare, and government. This roadmap will guide you from the basics to becoming an expert cybersecurity specialist.",
    steps: [
      {
        title: "Learn Networking Basics",
        overview: "Understand the fundamentals of networking, including TCP/IP, DNS, and firewalls.",
        links: [
          { text: "Networking Basics", url: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-computer-networking.html" }
        ]
      },
      {
        title: "Learn Operating Systems (Linux, Windows)",
        overview: "Learn the basics of operating systems, especially Linux and Windows, as they are commonly used in cybersecurity.",
        links: [
          { text: "Linux Basics", url: "https://www.linux.org/pages/download/" },
          { text: "Windows Basics", url: "https://docs.microsoft.com/en-us/windows/" }
        ]
      },
      {
        title: "Learn Cybersecurity Fundamentals",
        overview: "Understand the core concepts of cybersecurity, including threats, vulnerabilities, and risk management.",
        links: [
          { text: "Cybersecurity Basics", url: "https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html" }
        ]
      },
      {
        title: "Learn Ethical Hacking",
        overview: "Ethical hacking involves identifying and fixing security vulnerabilities. Learn tools like Nmap and Metasploit.",
        links: [
          { text: "Ethical Hacking Tutorial", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" }
        ]
      },
      {
        title: "Learn Cryptography",
        overview: "Cryptography is essential for securing data. Learn about encryption, hashing, and digital signatures.",
        links: [
          { text: "Cryptography Tutorial", url: "https://www.tutorialspoint.com/cryptography/index.htm" }
        ]
      },
      {
        title: "Learn Security Tools (Wireshark, Burp Suite)",
        overview: "Security tools like Wireshark and Burp Suite are used for network analysis and penetration testing.",
        links: [
          { text: "Wireshark Tutorial", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
          { text: "Burp Suite Tutorial", url: "https://portswigger.net/burp/documentation" }
        ]
      },
      {
        title: "Learn Incident Response",
        overview: "Incident response involves identifying and mitigating security breaches. Learn the steps and best practices.",
        links: [
          { text: "Incident Response Guide", url: "https://www.cisa.gov/incident-response" }
        ]
      },
      {
        title: "Learn Compliance and Regulations",
        overview: "Understand cybersecurity regulations like GDPR, HIPAA, and PCI-DSS.",
        links: [
          { text: "GDPR Guide", url: "https://gdpr-info.eu/" },
          { text: "HIPAA Guide", url: "https://www.hhs.gov/hipaa/index.html" }
        ]
      },
      {
        title: "Learn Advanced Topics (Threat Intelligence, Forensics)",
        overview: "Explore advanced topics like threat intelligence and digital forensics.",
        links: [
          { text: "Threat Intelligence Guide", url: "https://www.sans.org/cyber-security-courses/threat-intelligence/" },
          { text: "Digital Forensics Guide", url: "https://www.digitalforensics.com/resources/" }
        ]
      },
      {
        title: "Learn Security Certifications (CISSP, CEH)",
        overview: "Certifications like CISSP and CEH validate your cybersecurity skills and knowledge.",
        links: [
          { text: "CISSP Certification", url: "https://www.isc2.org/Certifications/CISSP" },
          { text: "CEH Certification", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" }
        ]
      }
    ]
  },
  devops: {
    title: "DevOps Engineer Roadmap",
    overview: "DevOps involves combining development and operations to improve collaboration and productivity. DevOps engineers work on automating processes, managing infrastructure, and ensuring continuous integration and delivery. This field is critical for modern software development, with opportunities in industries like tech, finance, and healthcare. This roadmap will guide you from the basics to becoming an expert DevOps engineer.",
    steps: [
      {
        title: "Learn Linux Basics",
        overview: "Linux is the most widely used operating system in DevOps. Learn its basics and command-line tools.",
        links: [
          { text: "Linux Basics", url: "https://www.linux.org/pages/download/" }
        ]
      },
      {
        title: "Learn Scripting (Bash, Python)",
        overview: "Scripting is essential for automation. Learn Bash for shell scripting and Python for general-purpose scripting.",
        links: [
          { text: "Bash Tutorial", url: "https://ryanstutorials.net/bash-scripting-tutorial/" },
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" }
        ]
      },
      {
        title: "Learn Version Control (Git)",
        overview: "Git is essential for collaborating on projects and managing code versions.",
        links: [
          { text: "Git Tutorial", url: "https://www.w3schools.com/git/" },
          { text: "GitHub Guides", url: "https://guides.github.com/" }
        ]
      },
      {
        title: "Learn CI/CD Pipelines",
        overview: "Continuous Integration and Deployment (CI/CD) pipelines automate testing and deployment.",
        links: [
          { text: "CI/CD Guide", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }
        ]
      },
      {
        title: "Learn Containerization (Docker)",
        overview: "Docker helps package applications into containers for easy deployment.",
        links: [
          { text: "Docker Docs", url: "https://docs.docker.com/get-started/" }
        ]
      },
      {
        title: "Learn Orchestration (Kubernetes)",
        overview: "Kubernetes is used for managing containerized applications at scale.",
        links: [
          { text: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" }
        ]
      },
      {
        title: "Learn Infrastructure as Code (Terraform, Ansible)",
        overview: "Infrastructure as Code (IaC) tools like Terraform and Ansible automate infrastructure management.",
        links: [
          { text: "Terraform Docs", url: "https://www.terraform.io/docs/" },
          { text: "Ansible Docs", url: "https://docs.ansible.com/ansible/latest/index.html" }
        ]
      },
      {
        title: "Learn Monitoring and Logging (Prometheus, ELK)",
        overview: "Monitoring and logging tools like Prometheus and ELK Stack help track application performance.",
        links: [
          { text: "Prometheus Docs", url: "https://prometheus.io/docs/" },
          { text: "ELK Stack Guide", url: "https://www.elastic.co/what-is/elk-stack" }
        ]
      },
      {
        title: "Learn Cloud Platforms (AWS, Azure, GCP)",
        overview: "Cloud platforms like AWS, Azure, and GCP are used to deploy and scale applications.",
        links: [
          { text: "AWS Docs", url: "https://aws.amazon.com/documentation/" },
          { text: "Azure Docs", url: "https://docs.microsoft.com/en-us/azure/" }
        ]
      },
      {
        title: "Learn Security Best Practices",
        overview: "Security is critical in DevOps. Learn about securing infrastructure and applications.",
        links: [
          { text: "DevSecOps Guide", url: "https://www.redhat.com/en/topics/devops/what-is-devsecops" }
        ]
      }
    ]
  },
  cloudengineer: {
    title: "Cloud Engineer Roadmap",
    overview: "Cloud engineering involves designing, implementing, and managing cloud infrastructure. Cloud engineers work with platforms like AWS, Azure, and Google Cloud to build scalable and secure systems. This field is highly in-demand, with opportunities in industries like tech, finance, and healthcare. This roadmap will guide you from the basics to becoming an expert cloud engineer.",
    steps: [
      {
        title: "Learn Cloud Basics",
        overview: "Understand the fundamentals of cloud computing, including IaaS, PaaS, and SaaS.",
        links: [
          { text: "Cloud Basics", url: "https://aws.amazon.com/what-is-cloud-computing/" }
        ]
      },
      {
        title: "Learn a Cloud Platform (AWS, Azure, GCP)",
        overview: "Choose a cloud platform like AWS, Azure, or Google Cloud and learn its core services.",
        links: [
          { text: "AWS Docs", url: "https://aws.amazon.com/documentation/" },
          { text: "Azure Docs", url: "https://docs.microsoft.com/en-us/azure/" }
        ]
      },
      {
        title: "Learn Networking in the Cloud",
        overview: "Networking is crucial for cloud infrastructure. Learn about VPCs, subnets, and load balancers.",
        links: [
          { text: "AWS Networking", url: "https://aws.amazon.com/vpc/" },
          { text: "Azure Networking", url: "https://docs.microsoft.com/en-us/azure/networking/" }
        ]
      },
      {
        title: "Learn Storage Solutions",
        overview: "Cloud storage solutions like S3 (AWS) and Blob Storage (Azure) are used to store and manage data.",
        links: [
          { text: "AWS S3 Docs", url: "https://aws.amazon.com/s3/" },
          { text: "Azure Blob Storage Docs", url: "https://docs.microsoft.com/en-us/azure/storage/blobs/" }
        ]
      },
      {
        title: "Learn Compute Services",
        overview: "Compute services like EC2 (AWS) and Virtual Machines (Azure) are used to run applications.",
        links: [
          { text: "AWS EC2 Docs", url: "https://aws.amazon.com/ec2/" },
          { text: "Azure VMs Docs", url: "https://docs.microsoft.com/en-us/azure/virtual-machines/" }
        ]
      },
      {
        title: "Learn Database Services",
        overview: "Cloud databases like RDS (AWS) and Cosmos DB (Azure) are used to store and manage data.",
        links: [
          { text: "AWS RDS Docs", url: "https://aws.amazon.com/rds/" },
          { text: "Azure Cosmos DB Docs", url: "https://docs.microsoft.com/en-us/azure/cosmos-db/" }
        ]
      },
      {
        title: "Learn Security and Compliance",
        overview: "Security is critical in the cloud. Learn about IAM, encryption, and compliance standards.",
        links: [
          { text: "AWS Security", url: "https://aws.amazon.com/security/" },
          { text: "Azure Security", url: "https://docs.microsoft.com/en-us/azure/security/" }
        ]
      },
      {
        title: "Learn DevOps in the Cloud",
        overview: "DevOps practices like CI/CD and infrastructure as code are essential for cloud engineering.",
        links: [
          { text: "AWS DevOps", url: "https://aws.amazon.com/devops/" },
          { text: "Azure DevOps", url: "https://azure.microsoft.com/en-us/services/devops/" }
        ]
      },
      {
        title: "Learn Monitoring and Logging",
        overview: "Monitoring and logging tools like CloudWatch (AWS) and Azure Monitor are used to track performance.",
        links: [
          { text: "AWS CloudWatch", url: "https://aws.amazon.com/cloudwatch/" },
          { text: "Azure Monitor", url: "https://docs.microsoft.com/en-us/azure/azure-monitor/" }
        ]
      },
      {
        title: "Learn Advanced Topics (Serverless, AI/ML)",
        overview: "Explore advanced topics like serverless computing and AI/ML services in the cloud.",
        links: [
          { text: "AWS Serverless", url: "https://aws.amazon.com/serverless/" },
          { text: "Azure AI/ML", url: "https://azure.microsoft.com/en-us/services/machine-learning/" }
        ]
      }
    ]
  },
  dataengineer: {
    title: "Data Engineer Roadmap",
    overview: "Data engineers build and maintain the infrastructure for data generation, storage, and processing. They work with big data tools, databases, and cloud platforms to ensure data is accessible and usable for analysis. This roadmap will guide you from the basics to becoming an expert data engineer.",
    steps: [
      {
        title: "Learn SQL",
        overview: "SQL is essential for querying and managing relational databases.",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" }
        ]
      },
      {
        title: "Learn Python",
        overview: "Python is widely used for data engineering tasks like ETL and data processing.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" }
        ]
      },
      {
        title: "Learn Big Data Tools (Hadoop, Spark)",
        overview: "Big data tools like Hadoop and Spark are used to process large datasets.",
        links: [
          { text: "Hadoop Tutorial", url: "https://hadoop.apache.org/docs/stable/" }
        ]
      },
      {
        title: "Learn Data Warehousing",
        overview: "Learn about data warehousing concepts and tools like Snowflake and Redshift.",
        links: [
          { text: "Snowflake Docs", url: "https://docs.snowflake.com/" }
        ]
      },
      {
        title: "Learn ETL Processes",
        overview: "ETL (Extract, Transform, Load) processes are used to move and transform data.",
        links: [
          { text: "ETL Basics", url: "https://www.ibm.com/cloud/learn/etl" }
        ]
      },
      {
        title: "Learn Cloud Platforms (AWS, Azure, GCP)",
        overview: "Cloud platforms like AWS, Azure, and GCP are used for data storage and processing.",
        links: [
          { text: "AWS Data Services", url: "https://aws.amazon.com/products/databases/" }
        ]
      },
      {
        title: "Learn Data Pipelines",
        overview: "Learn how to build and manage data pipelines using tools like Apache Airflow.",
        links: [
          { text: "Apache Airflow Docs", url: "https://airflow.apache.org/docs/" }
        ]
      },
      {
        title: "Learn Data Governance",
        overview: "Understand how to manage data quality, security, and compliance.",
        links: [
          { text: "Data Governance Guide", url: "https://www.ibm.com/cloud/learn/data-governance" }
        ]
      },
      {
        title: "Learn Advanced Topics (Streaming, Machine Learning)",
        overview: "Explore advanced topics like real-time data streaming and machine learning integration.",
        links: [
          { text: "Kafka Tutorial", url: "https://kafka.apache.org/documentation/" }
        ]
      },
      {
        title: "Learn Certifications (AWS Certified Data Analytics)",
        overview: "Certifications like AWS Certified Data Analytics validate your data engineering skills.",
        links: [
          { text: "AWS Certification", url: "https://aws.amazon.com/certification/certified-data-analytics-specialty/" }
        ]
      }
    ]
  },
  softwaredeveloper: {
    title: "Software Developer Roadmap",
    overview: "Software developers design, build, and maintain software applications. They work with programming languages, frameworks, and tools to create solutions that meet user needs. This roadmap will guide you from the basics to becoming an expert software developer.",
    steps: [
      {
        title: "Learn Programming Basics",
        overview: "Start with the fundamentals of programming, including variables, loops, and conditionals.",
        links: [
          { text: "Programming Basics", url: "https://www.codecademy.com/learn/learn-how-to-code" }
        ]
      },
      {
        title: "Learn a Programming Language (Python, Java, JavaScript)",
        overview: "Choose a programming language like Python, Java, or JavaScript and master its syntax and features.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" },
          { text: "Java Tutorial", url: "https://www.w3schools.com/java/" },
          { text: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" }
        ]
      },
      {
        title: "Learn Data Structures and Algorithms",
        overview: "Understand data structures like arrays, linked lists, and algorithms like sorting and searching.",
        links: [
          { text: "Data Structures and Algorithms", url: "https://www.geeksforgeeks.org/data-structures/" }
        ]
      },
      {
        title: "Learn Version Control (Git)",
        overview: "Git is essential for collaborating on projects and managing code versions.",
        links: [
          { text: "Git Tutorial", url: "https://www.w3schools.com/git/" },
          { text: "GitHub Guides", url: "https://guides.github.com/" }
        ]
      },
      {
        title: "Learn Object-Oriented Programming (OOP)",
        overview: "Understand OOP concepts like classes, objects, inheritance, and polymorphism.",
        links: [
          { text: "OOP Basics", url: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/" }
        ]
      },
      {
        title: "Learn Software Development Lifecycle (SDLC)",
        overview: "Understand the stages of software development, from planning to deployment.",
        links: [
          { text: "SDLC Guide", url: "https://www.tutorialspoint.com/sdlc/sdlc_overview.htm" }
        ]
      },
      {
        title: "Learn Testing and Debugging",
        overview: "Learn how to write tests and debug code to ensure quality.",
        links: [
          { text: "Testing Basics", url: "https://www.guru99.com/software-testing.html" }
        ]
      },
      {
        title: "Learn APIs and Web Services",
        overview: "Understand how to build and consume APIs and web services.",
        links: [
          { text: "REST API Tutorial", url: "https://restfulapi.net/" }
        ]
      },
      {
        title: "Learn Databases (SQL and NoSQL)",
        overview: "Learn how to work with relational and non-relational databases.",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { text: "MongoDB Tutorial", url: "https://www.mongodb.com/docs/" }
        ]
      },
      {
        title: "Learn Advanced Topics (Concurrency, Design Patterns)",
        overview: "Explore advanced topics like concurrency and design patterns.",
        links: [
          { text: "Design Patterns", url: "https://refactoring.guru/design-patterns" }
        ]
      }
    ]
  },

  // Skill-Based Roadmaps
  python: {
    title: "Python Roadmap",
    overview: "Python is a versatile programming language used for web development, data analysis, machine learning, and more. This roadmap will guide you from the basics to becoming an expert Python developer.",
    steps: [
      {
        title: "Learn Python Basics",
        overview: "Understand the fundamentals of Python, including variables, loops, and functions.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" },
          { text: "Python for Beginners", url: "https://www.learnpython.org/" }
        ]
      },
      {
        title: "Explore Data Structures",
        overview: "Learn about lists, tuples, dictionaries, and sets in Python.",
        links: [
          { text: "Python Data Structures", url: "https://realpython.com/python-data-structures/" }
        ]
      },
      {
        title: "Master Object-Oriented Programming (OOP)",
        overview: "Understand classes, objects, inheritance, and polymorphism in Python.",
        links: [
          { text: "Python OOP Tutorial", url: "https://realpython.com/python3-object-oriented-programming/" }
        ]
      },
      {
        title: "Learn Python Libraries",
        overview: "Explore popular libraries like NumPy, Pandas, and Matplotlib for data analysis and visualization.",
        links: [
          { text: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" },
          { text: "Pandas Tutorial", url: "https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a calculator, to-do app, or data visualization dashboard.",
        links: [
          { text: "Python Project Ideas", url: "https://www.freecodecamp.org/news/python-projects-for-beginners/" }
        ]
      }
    ]
  },
  javascript: {
    title: "JavaScript Roadmap",
    overview: "JavaScript is the programming language of the web. It's used for frontend development, backend development (Node.js), and building interactive web applications. This roadmap will guide you from the basics to becoming an expert JavaScript developer.",
    steps: [
      {
        title: "Learn JavaScript Basics",
        overview: "Understand the fundamentals of JavaScript, including variables, functions, and DOM manipulation.",
        links: [
          { text: "JavaScript Tutorial", url: "https://www.w3schools.com/js/" },
          { text: "JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" }
        ]
      },
      {
        title: "Explore ES6+ Features",
        overview: "Learn about modern JavaScript features like arrow functions, destructuring, and async/await.",
        links: [
          { text: "ES6 Tutorial", url: "https://www.javascripttutorial.net/es6/" }
        ]
      },
      {
        title: "Master DOM Manipulation",
        overview: "Learn how to dynamically interact with HTML and CSS using JavaScript.",
        links: [
          { text: "DOM Manipulation Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }
        ]
      },
      {
        title: "Learn JavaScript Frameworks",
        overview: "Explore popular frameworks like React, Angular, or Vue.js for building modern web applications.",
        links: [
          { text: "React Tutorial", url: "https://reactjs.org/docs/getting-started.html" },
          { text: "Vue.js Guide", url: "https://vuejs.org/v2/guide/" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a weather app, portfolio website, or interactive game.",
        links: [
          { text: "JavaScript Project Ideas", url: "https://www.freecodecamp.org/news/javascript-projects-for-beginners/" }
        ]
      }
    ]
  },
  react: {
    title: "React Roadmap",
    overview: "React is a popular JavaScript library for building user interfaces. This roadmap will guide you from the basics to becoming an expert React developer.",
    steps: [
      {
        title: "Learn React Basics",
        overview: "Understand the fundamentals of React, including components, props, and state.",
        links: [
          { text: "React Tutorial", url: "https://reactjs.org/docs/getting-started.html" }
        ]
      },
      {
        title: "Explore React Hooks",
        overview: "Learn about React hooks like useState, useEffect, and useContext.",
        links: [
          { text: "React Hooks Guide", url: "https://reactjs.org/docs/hooks-intro.html" }
        ]
      },
      {
        title: "Master State Management",
        overview: "Learn how to manage state in large applications using Redux or Context API.",
        links: [
          { text: "Redux Tutorial", url: "https://redux.js.org/introduction/getting-started" }
        ]
      },
      {
        title: "Learn React Router",
        overview: "Understand how to handle routing in React applications.",
        links: [
          { text: "React Router Tutorial", url: "https://reactrouter.com/en/main" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a to-do app, e-commerce site, or social media platform.",
        links: [
          { text: "React Project Ideas", url: "https://www.freecodecamp.org/news/react-projects-for-beginners/" }
        ]
      }
    ]
  },
  nodejs: {
    title: "Node.js Roadmap",
    overview: "Node.js is a runtime environment for building server-side applications with JavaScript. This roadmap will guide you from the basics to becoming an expert Node.js developer.",
    steps: [
      {
        title: "Learn Node.js Basics",
        overview: "Understand the fundamentals of Node.js, including modules, events, and the file system.",
        links: [
          { text: "Node.js Tutorial", url: "https://www.w3schools.com/nodejs/" }
        ]
      },
      {
        title: "Explore Express.js",
        overview: "Learn how to build web applications using the Express.js framework.",
        links: [
          { text: "Express.js Guide", url: "https://expressjs.com/" }
        ]
      },
      {
        title: "Master REST APIs",
        overview: "Learn how to design and build RESTful APIs with Node.js and Express.",
        links: [
          { text: "REST API Tutorial", url: "https://www.restapitutorial.com/" }
        ]
      },
      {
        title: "Learn Database Integration",
        overview: "Understand how to connect Node.js applications to databases like MongoDB or MySQL.",
        links: [
          { text: "MongoDB with Node.js", url: "https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a blog API, chat application, or e-commerce backend.",
        links: [
          { text: "Node.js Project Ideas", url: "https://www.freecodecamp.org/news/node-js-projects-for-beginners/" }
        ]
      }
    ]
  },
  machinelearning: {
    title: "Machine Learning Roadmap",
    overview: "Machine Learning involves training algorithms to make predictions or decisions based on data. This roadmap will guide you from the basics to becoming an expert in Machine Learning.",
    steps: [
      {
        title: "Learn Python for Machine Learning",
        overview: "Understand the basics of Python and its libraries like NumPy, Pandas, and Scikit-Learn.",
        links: [
          { text: "Python for Machine Learning", url: "https://www.coursera.org/learn/python-machine-learning" }
        ]
      },
      {
        title: "Explore Supervised Learning",
        overview: "Learn about regression, classification, and other supervised learning techniques.",
        links: [
          { text: "Supervised Learning Tutorial", url: "https://scikit-learn.org/stable/supervised_learning.html" }
        ]
      },
      {
        title: "Master Unsupervised Learning",
        overview: "Understand clustering, dimensionality reduction, and other unsupervised learning techniques.",
        links: [
          { text: "Unsupervised Learning Tutorial", url: "https://scikit-learn.org/stable/unsupervised_learning.html" }
        ]
      },
      {
        title: "Learn Deep Learning",
        overview: "Explore neural networks and frameworks like TensorFlow and PyTorch.",
        links: [
          { text: "TensorFlow Tutorial", url: "https://www.tensorflow.org/tutorials" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a sentiment analysis model, image classifier, or recommendation system.",
        links: [
          { text: "Machine Learning Project Ideas", url: "https://www.kaggle.com/learn/overview" }
        ]
      }
    ]
  },
  sql: {
    title: "SQL Roadmap",
    overview: "SQL is the standard language for managing and manipulating relational databases. This roadmap will guide you from the basics to becoming an expert in SQL.",
    steps: [
      {
        title: "Learn SQL Basics",
        overview: "Understand the fundamentals of SQL, including queries, filtering, and sorting data.",
        links: [
          { text: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
          { text: "SQL Basics", url: "https://www.khanacademy.org/computing/computer-programming/sql" }
        ]
      },
      {
        title: "Master Data Manipulation",
        overview: "Learn how to insert, update, and delete data in databases using SQL.",
        links: [
          { text: "SQL Data Manipulation", url: "https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/" }
        ]
      },
      {
        title: "Explore Joins and Relationships",
        overview: "Understand how to combine data from multiple tables using JOINs and work with relationships.",
        links: [
          { text: "SQL Joins Tutorial", url: "https://www.sqlshack.com/sql-join-types-explained-inner-outer-left-right/" }
        ]
      },
      {
        title: "Learn Advanced SQL",
        overview: "Dive into advanced topics like subqueries, window functions, and stored procedures.",
        links: [
          { text: "Advanced SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
        ]
      },
      {
        title: "Optimize Database Performance",
        overview: "Learn how to write efficient queries and optimize database performance using indexing and query optimization techniques.",
        links: [
          { text: "SQL Performance Tuning", url: "https://use-the-index-luke.com/" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a database for an e-commerce site, a library management system, or a student record system.",
        links: [
          { text: "SQL Project Ideas", url: "https://www.geeksforgeeks.org/top-5-sql-projects-for-data-analysis/" }
        ]
      }
    ]
  },
  java: {
    title: "Java Roadmap",
    overview: "Java is a powerful, object-oriented programming language used for building web applications, mobile apps, and enterprise software. This roadmap will guide you from the basics to becoming an expert Java developer.",
    steps: [
      {
        title: "Learn Java Basics",
        overview: "Understand the fundamentals of Java, including syntax, data types, and control structures.",
        links: [
          { text: "Java Tutorial", url: "https://www.w3schools.com/java/" },
          { text: "Java Basics", url: "https://www.codecademy.com/learn/learn-java" }
        ]
      },
      {
        title: "Master Object-Oriented Programming (OOP)",
        overview: "Learn about classes, objects, inheritance, polymorphism, and encapsulation in Java.",
        links: [
          { text: "Java OOP Tutorial", url: "https://www.javatpoint.com/java-oops-concepts" }
        ]
      },
      {
        title: "Explore Java Collections",
        overview: "Understand how to work with data structures like lists, sets, and maps in Java.",
        links: [
          { text: "Java Collections Tutorial", url: "https://www.geeksforgeeks.org/collections-in-java-2/" }
        ]
      },
      {
        title: "Learn Exception Handling",
        overview: "Understand how to handle errors and exceptions in Java programs.",
        links: [
          { text: "Java Exception Handling", url: "https://www.baeldung.com/java-exceptions" }
        ]
      },
      {
        title: "Dive into Advanced Java",
        overview: "Explore advanced topics like multithreading, streams, and JavaFX for building GUI applications.",
        links: [
          { text: "Advanced Java Tutorial", url: "https://www.tutorialspoint.com/java/index.htm" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a banking system, inventory management system, or a simple game.",
        links: [
          { text: "Java Project Ideas", url: "https://www.javatpoint.com/java-projects" }
        ]
      }
    ]
  },
  dsa: {
    title: "Data Structures and Algorithms Roadmap",
    overview: "Data Structures and Algorithms (DSA) are the building blocks of efficient software development. This roadmap will guide you from the basics to mastering advanced DSA concepts, helping you excel in coding interviews and real-world problem-solving.",
    steps: [
      {
        title: "Learn Programming Basics",
        overview: "Understand the fundamentals of programming, including variables, loops, conditionals, and functions.",
        links: [
          { text: "Programming Basics", url: "https://www.freecodecamp.org/learn/" },
          { text: "Python for Beginners", url: "https://www.learnpython.org/" }
        ]
      },
      {
        title: "Master Time and Space Complexity",
        overview: "Learn how to analyze the efficiency of algorithms using Big-O notation.",
        links: [
          { text: "Big-O Cheatsheet", url: "https://www.bigocheatsheet.com/" },
          { text: "Time Complexity Explained", url: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/" }
        ]
      },
      {
        title: "Learn Basic Data Structures",
        overview: "Understand arrays, linked lists, stacks, queues, and hash tables.",
        links: [
          { text: "Data Structures Tutorial", url: "https://www.tutorialspoint.com/data_structures_algorithms/index.htm" },
          { text: "Visualizing Data Structures", url: "https://visualgo.net/en" }
        ]
      },
      {
        title: "Explore Advanced Data Structures",
        overview: "Dive into trees, graphs, heaps, and tries.",
        links: [
          { text: "Trees and Graphs Tutorial", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
          { text: "Graphs Explained", url: "https://www.programiz.com/dsa/graph" }
        ]
      },
      {
        title: "Master Sorting and Searching Algorithms",
        overview: "Learn popular algorithms like QuickSort, MergeSort, Binary Search, and more.",
        links: [
          { text: "Sorting Algorithms", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
          { text: "Binary Search Tutorial", url: "https://leetcode.com/explore/learn/card/binary-search/" }
        ]
      },
      {
        title: "Learn Dynamic Programming",
        overview: "Understand how to solve complex problems by breaking them into smaller subproblems.",
        links: [
          { text: "Dynamic Programming Guide", url: "https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews" },
          { text: "DP Problems", url: "https://leetcode.com/tag/dynamic-programming/" }
        ]
      },
      {
        title: "Practice Problem-Solving",
        overview: "Solve problems on platforms like LeetCode, HackerRank, and Codeforces to strengthen your skills.",
        links: [
          { text: "LeetCode", url: "https://leetcode.com/" },
          { text: "HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a pathfinding visualizer, a maze solver, or a recommendation system.",
        links: [
          { text: "DSA Project Ideas", url: "https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/" }
        ]
      }
    ]
  },
  // Add more roadmaps...
  nextjs: {
    title: "Next.js Roadmap",
    overview: "Next.js is a React framework for building server-side rendered (SSR) and static websites. This roadmap will guide you from the basics to becoming an expert Next.js developer.",
    steps: [
      {
        title: "Learn React Basics",
        overview: "Understand the fundamentals of React, as Next.js is built on top of it.",
        links: [
          { text: "React Tutorial", url: "https://reactjs.org/docs/getting-started.html" }
        ]
      },
      {
        title: "Understand Next.js Fundamentals",
        overview: "Learn about pages, routing, and data fetching in Next.js.",
        links: [
          { text: "Next.js Documentation", url: "https://nextjs.org/docs" }
        ]
      },
      {
        title: "Explore API Routes",
        overview: "Learn how to create API endpoints in Next.js.",
        links: [
          { text: "Next.js API Routes", url: "https://nextjs.org/docs/api-routes/introduction" }
        ]
      },
      {
        title: "Master Static Site Generation (SSG)",
        overview: "Understand how to generate static pages at build time.",
        links: [
          { text: "Next.js SSG Guide", url: "https://nextjs.org/docs/basic-features/pages#static-generation" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like a blog, e-commerce site, or portfolio.",
        links: [
          { text: "Next.js Project Ideas", url: "https://github.com/vercel/next.js/tree/canary/examples" }
        ]
      }
    ]
  },
  aws: {
    title: "AWS Roadmap",
    overview: "Amazon Web Services (AWS) is a cloud computing platform that provides on-demand services like computing power, storage, and databases. This roadmap will guide you from the basics to becoming an AWS expert.",
    steps: [
      {
        title: "Learn Cloud Computing Basics",
        overview: "Understand the fundamentals of cloud computing and AWS services.",
        links: [
          { text: "AWS Cloud Practitioner Guide", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" }
        ]
      },
      {
        title: "Explore Core AWS Services",
        overview: "Learn about EC2, S3, RDS, and other core AWS services.",
        links: [
          { text: "AWS Core Services", url: "https://aws.amazon.com/getting-started/" }
        ]
      },
      {
        title: "Master AWS Security",
        overview: "Understand IAM, VPC, and other security features.",
        links: [
          { text: "AWS Security Best Practices", url: "https://aws.amazon.com/security/" }
        ]
      },
      {
        title: "Learn AWS DevOps Tools",
        overview: "Explore tools like CodePipeline, CodeBuild, and CodeDeploy.",
        links: [
          { text: "AWS DevOps Tools", url: "https://aws.amazon.com/devops/" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by deploying applications on AWS.",
        links: [
          { text: "AWS Project Ideas", url: "https://aws.amazon.com/getting-started/hands-on/" }
        ]
      }
    ]
  },
  docker: {
    title: "Docker Roadmap",
    overview: "Docker is a platform for developing, shipping, and running applications in containers. This roadmap will guide you from the basics to becoming a Docker expert.",
    steps: [
      {
        title: "Learn Containerization Basics",
        overview: "Understand what containers are and how they work.",
        links: [
          { text: "Docker Overview", url: "https://www.docker.com/resources/what-container" }
        ]
      },
      {
        title: "Install Docker",
        overview: "Set up Docker on your local machine.",
        links: [
          { text: "Docker Installation Guide", url: "https://docs.docker.com/get-docker/" }
        ]
      },
      {
        title: "Master Docker Commands",
        overview: "Learn how to build, run, and manage containers.",
        links: [
          { text: "Docker CLI Reference", url: "https://docs.docker.com/engine/reference/commandline/cli/" }
        ]
      },
      {
        title: "Explore Docker Compose",
        overview: "Learn how to manage multi-container applications.",
        links: [
          { text: "Docker Compose Guide", url: "https://docs.docker.com/compose/" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by containerizing applications.",
        links: [
          { text: "Docker Project Ideas", url: "https://www.docker.com/blog/tag/projects/" }
        ]
      }
    ]
  },
  kubernetes: {
    title: "Kubernetes Roadmap",
    overview: "Kubernetes is an open-source platform for automating containerized application deployment, scaling, and management. This roadmap will guide you from the basics to becoming a Kubernetes expert.",
    steps: [
      {
        title: "Learn Kubernetes Basics",
        overview: "Understand the architecture and core concepts of Kubernetes.",
        links: [
          { text: "Kubernetes Documentation", url: "https://kubernetes.io/docs/concepts/" }
        ]
      },
      {
        title: "Set Up a Kubernetes Cluster",
        overview: "Learn how to create and manage a Kubernetes cluster.",
        links: [
          { text: "Kubernetes Setup Guide", url: "https://kubernetes.io/docs/setup/" }
        ]
      },
      {
        title: "Master Kubernetes Objects",
        overview: "Understand Pods, Deployments, Services, and ConfigMaps.",
        links: [
          { text: "Kubernetes Objects", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/" }
        ]
      },
      {
        title: "Explore Advanced Features",
        overview: "Learn about Helm, Ingress, and StatefulSets.",
        links: [
          { text: "Kubernetes Advanced Features", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by deploying applications on Kubernetes.",
        links: [
          { text: "Kubernetes Project Ideas", url: "https://kubernetes.io/docs/tutorials/" }
        ]
      }
    ]
  },
  pytorch: {
    title: "PyTorch Roadmap",
    overview: "PyTorch is an open-source machine learning library for Python. This roadmap will guide you from the basics to becoming a PyTorch expert.",
    steps: [
      {
        title: "Learn Python Basics",
        overview: "Understand the fundamentals of Python programming.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" }
        ]
      },
      {
        title: "Understand Machine Learning Basics",
        overview: "Learn about supervised and unsupervised learning.",
        links: [
          { text: "Machine Learning Basics", url: "https://www.coursera.org/learn/machine-learning" }
        ]
      },
      {
        title: "Explore PyTorch Fundamentals",
        overview: "Learn about tensors, autograd, and neural networks in PyTorch.",
        links: [
          { text: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }
        ]
      },
      {
        title: "Master Deep Learning with PyTorch",
        overview: "Understand how to build and train deep learning models.",
        links: [
          { text: "PyTorch Deep Learning Guide", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like image classifiers or NLP models.",
        links: [
          { text: "PyTorch Project Ideas", url: "https://pytorch.org/tutorials/beginner/project_templates.html" }
        ]
      }
    ]
  },
  tensorflow: {
    title: "TensorFlow Roadmap",
    overview: "TensorFlow is an open-source machine learning framework developed by Google. This roadmap will guide you from the basics to becoming a TensorFlow expert.",
    steps: [
      {
        title: "Learn Python Basics",
        overview: "Understand the fundamentals of Python programming.",
        links: [
          { text: "Python Tutorial", url: "https://www.w3schools.com/python/" }
        ]
      },
      {
        title: "Understand Machine Learning Basics",
        overview: "Learn about supervised and unsupervised learning.",
        links: [
          { text: "Machine Learning Basics", url: "https://www.coursera.org/learn/machine-learning" }
        ]
      },
      {
        title: "Explore TensorFlow Fundamentals",
        overview: "Learn about tensors, graphs, and sessions in TensorFlow.",
        links: [
          { text: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" }
        ]
      },
      {
        title: "Master Deep Learning with TensorFlow",
        overview: "Understand how to build and train deep learning models.",
        links: [
          { text: "TensorFlow Deep Learning Guide", url: "https://www.tensorflow.org/tutorials/quickstart/beginner" }
        ]
      },
      {
        title: "Build Projects",
        overview: "Apply your knowledge by building projects like image classifiers or NLP models.",
        links: [
          { text: "TensorFlow Project Ideas", url: "https://www.tensorflow.org/resources/projects" }
        ]
      }
    ]
  }

};
const projects = {
  frontend: [
    {
      title: "To-Do App",
      overview: "Build a simple to-do app using HTML, CSS, and JavaScript. Learn how to manage state and handle user interactions.",
      startUrl: "https://www.example.com/todo-app",
      guide: [
        "Step 1: Set up your project folder with `index.html`, `styles.css`, and `script.js` files.",
        "Step 2: Create a basic HTML structure with a form for adding tasks and a list to display them.",
        "Step 3: Style the app using CSS. Use Flexbox or Grid for layout.",
        "Step 4: Add JavaScript to handle adding, deleting, and marking tasks as complete.",
        "Step 5: Use `localStorage` to save tasks so they persist even after refreshing the page.",
        "Step 6: Deploy your app using GitHub Pages or Netlify."
      ]
    },
    {
      title: "Portfolio Website",
      overview: "Create a personal portfolio website to showcase your projects and skills. Use modern CSS frameworks like Tailwind or Bootstrap.",
      startUrl: "https://www.example.com/portfolio",
      guide: [
        "Step 1: Plan the layout of your portfolio (e.g., About Me, Projects, Skills, Contact).",
        "Step 2: Set up your project folder with `index.html`, `styles.css`, and `script.js` files.",
        "Step 3: Use a CSS framework like Tailwind or Bootstrap to style your website quickly.",
        "Step 4: Add sections for About Me, Projects, Skills, and Contact.",
        "Step 5: Make your portfolio responsive using media queries.",
        "Step 6: Deploy your portfolio using GitHub Pages or Vercel."
      ]
    },
    {
      title: "Weather App",
      overview: "Develop a weather app that fetches real-time weather data using an API. Learn how to work with asynchronous JavaScript.",
      startUrl: "https://www.example.com/weather-app",
      guide: [
        "Step 1: Sign up for a free API key from OpenWeatherMap.",
        "Step 2: Set up your project folder with `index.html`, `styles.css`, and `script.js` files.",
        "Step 3: Create a search bar for users to enter a city name.",
        "Step 4: Use the Fetch API to get weather data from OpenWeatherMap.",
        "Step 5: Display the weather data (temperature, humidity, wind speed) on the page.",
        "Step 6: Deploy your app using GitHub Pages or Netlify."
      ]
    }
  ],
  backend: [
    {
      title: "REST API",
      overview: "Build a RESTful API using Node.js and Express. Learn how to handle CRUD operations and connect to a database.",
      startUrl: "https://www.example.com/rest-api",
      guide: [
        "Step 1: Set up a Node.js project using `npm init`.",
        "Step 2: Install Express and create a basic server.",
        "Step 3: Define routes for CRUD operations (e.g., GET, POST, PUT, DELETE).",
        "Step 4: Connect your API to a database like MongoDB or PostgreSQL.",
        "Step 5: Test your API using Postman or Thunder Client.",
        "Step 6: Deploy your API using Heroku or Render."
      ]
    },
    {
      title: "Authentication System",
      overview: "Create a secure authentication system using JWT (JSON Web Tokens) and bcrypt for password hashing.",
      startUrl: "https://www.example.com/auth-system",
      guide: [
        "Step 1: Set up a Node.js project with Express.",
        "Step 2: Install `jsonwebtoken` and `bcrypt` for authentication.",
        "Step 3: Create routes for user registration and login.",
        "Step 4: Hash passwords using bcrypt before storing them in the database.",
        "Step 5: Generate and verify JWTs for authenticated users.",
        "Step 6: Deploy your authentication system using Heroku or Render."
      ]
    },
    {
      title: "E-Commerce Backend",
      overview: "Develop the backend for an e-commerce platform, including product management, user authentication, and order processing.",
      startUrl: "https://www.example.com/ecommerce-backend",
      guide: [
        "Step 1: Set up a Node.js project with Express.",
        "Step 2: Define models for products, users, and orders using Mongoose.",
        "Step 3: Create routes for managing products, users, and orders.",
        "Step 4: Implement user authentication using JWT.",
        "Step 5: Test your backend using Postman or Thunder Client.",
        "Step 6: Deploy your backend using Heroku or Render."
      ]
    }
  ],
  devops: [
    {
      title: "CI/CD Pipeline",
      overview: "Set up a CI/CD pipeline using Jenkins or GitHub Actions to automate testing and deployment.",
      startUrl: "https://www.example.com/ci-cd-pipeline",
      guide: [
        "Step 1: Choose a CI/CD tool (e.g., Jenkins, GitHub Actions, or GitLab CI).",
        "Step 2: Set up a repository for your project on GitHub or GitLab.",
        "Step 3: Create a configuration file (e.g., `.github/workflows/main.yml` for GitHub Actions).",
        "Step 4: Define jobs for testing, building, and deploying your application.",
        "Step 5: Push your code to trigger the CI/CD pipeline.",
        "Step 6: Monitor the pipeline and fix any issues that arise."
      ]
    },
    {
      title: "Dockerize an Application",
      overview: "Learn how to containerize an application using Docker and deploy it to a cloud platform.",
      startUrl: "https://www.example.com/dockerize-app",
      guide: [
        "Step 1: Install Docker on your machine.",
        "Step 2: Create a `Dockerfile` for your application.",
        "Step 3: Build a Docker image using `docker build -t your-app-name .`.",
        "Step 4: Run your Docker container using `docker run -p 3000:3000 your-app-name`.",
        "Step 5: Push your Docker image to Docker Hub.",
        "Step 6: Deploy your containerized app to a cloud platform like AWS or Google Cloud."
      ]
    },
    {
      title: "Kubernetes Deployment",
      overview: "Deploy a multi-container application using Kubernetes and manage scaling and load balancing.",
      startUrl: "https://www.example.com/kubernetes-deployment",
      guide: [
        "Step 1: Install Minikube or use a cloud-based Kubernetes service.",
        "Step 2: Create Kubernetes configuration files (e.g., `deployment.yaml`, `service.yaml`).",
        "Step 3: Deploy your application using `kubectl apply -f deployment.yaml`.",
        "Step 4: Expose your application using a Kubernetes Service.",
        "Step 5: Scale your application using `kubectl scale deployment your-app --replicas=3`.",
        "Step 6: Monitor your Kubernetes cluster using `kubectl get pods` and `kubectl logs`."
      ]
    }
  ]

};



  
/*// Event listener for role cards
rolesContainer.addEventListener('click', (e) => {
  const roleCard = e.target.closest('.role-card');
  if (roleCard) {
    const role = roleCard.getAttribute('data-role');
    showRoadmap(role);
  }
});

// Show roadmap for a specific role
function showRoadmap(role) {
  const roadmap = roadmaps[role];
  roadmapTitle.textContent = roadmap.title;
  roadmapOverview.textContent = roadmap.overview;


    // Clear previous steps
    stepsContainer.innerHTML = '';

    // Add each step
    roadmap.steps.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.classList.add('step');
  
      // Step title
      const stepTitle = document.createElement('h3');
      stepTitle.textContent = `${index + 1}. ${step.title}`;
      stepElement.appendChild(stepTitle);
  
      // Step content (hidden by default)
      const stepContent = document.createElement('div');
      stepContent.classList.add('step-content');
  
      // Step overview
      const stepOverview = document.createElement('p');
      stepOverview.textContent = step.overview;
      stepContent.appendChild(stepOverview);
      // Step links (numbered list)
      if (step.links && step.links.length > 0) {
      const linksHeader = document.createElement('h4');
      linksHeader.textContent = "Resources:";
      stepContent.appendChild(linksHeader);

      const linksList = document.createElement('ol');
      step.links.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.target = "_blank"; // Open link in new tab
        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
      });
      stepContent.appendChild(linksList);
    }
    // Append step content to step element
    stepElement.appendChild(stepContent);

    // Append step element to steps container
    stepsContainer.appendChild(stepElement);
  });

  // Show roadmap section
  roadmapSection.classList.remove('hidden');
  rolesContainer.classList.add('hidden');
}

// Back button functionality
backButton.addEventListener('click', () => {
  roadmapSection.classList.add('hidden');
  rolesContainer.classList.remove('hidden');
});

// Toggle step content
stepsContainer.addEventListener('click', (e) => {
  const stepHeader = e.target.closest('h3');
  if (stepHeader) {
    const stepContent = stepHeader.nextElementSibling;
    stepContent.style.display = stepContent.style.display === 'block' ? 'none' : 'block';
  }
});*/
// Event listener for role cards
// Event listener for role cards
rolesContainer.addEventListener('click', (e) => {
  const roleCard = e.target.closest('.role-card');
  if (roleCard) {
    const role = roleCard.getAttribute('data-role');
    showRoadmap(role,'role');
  }
});

// Event listener for skill cards
skillsContainer.addEventListener('click', (e) => {
  const skillCard = e.target.closest('.skill-card');
  if (skillCard) {
    const skill = skillCard.getAttribute('data-skill');
    showRoadmap(skill,'skill');
  }
});

// Event Listeners for Projects
document.querySelectorAll('.project-category').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');
    showNestedProjects(category);
  });
});

backToProjectsButton.addEventListener('click', () => {
  nestedProjectsSection.classList.add('hidden');
  projectsSection.classList.remove('hidden');
});

backToNestedProjectsButton.addEventListener('click', () => {
  projectDetailsSection.classList.add('hidden');
  nestedProjectsSection.classList.remove('hidden');
});

// Show roadmap for a specific role
// Show roadmap for a specific role or skill
function showRoadmap(key, type) {
  const roadmap = roadmaps[key];
  if (!roadmap) return; // Exit if roadmap data is not found

  // Hide Projects Section and its nested sections
  document.getElementById('projects-section').classList.add('hidden');
  document.getElementById('nested-projects-section').classList.add('hidden');
  document.getElementById('project-details-section').classList.add('hidden');

  // Set roadmap details
  roadmapTitle.textContent = roadmap.title;
  roadmapOverview.textContent = roadmap.overview;

  // Clear previous steps
  stepsContainer.innerHTML = '';

  // Add each step
  roadmap.steps.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.classList.add('step');

    // Step title
    const stepTitle = document.createElement('h3');
    stepTitle.textContent = `${step.title}`;
    stepElement.appendChild(stepTitle);

    // Step content (hidden by default)
    const stepContent = document.createElement('div');
    stepContent.classList.add('step-content');

    // Step overview
    const stepOverview = document.createElement('p');
    stepOverview.textContent = step.overview;
    stepContent.appendChild(stepOverview);

    // Add HR (horizontal rule) between description and resources
    const hr = document.createElement('hr');
    stepContent.appendChild(hr);

    // Step links (buttons)
    if (step.links && step.links.length > 0) {
      const linksHeader = document.createElement('h4');
      linksHeader.textContent = "Resources:";
      stepContent.appendChild(linksHeader);

      step.links.forEach(link => {
        const button = document.createElement('a');
        button.href = link.url;
        button.textContent = link.text;
        button.target = "_blank"; // Open link in new tab
        button.classList.add('resource-button'); // Add button styling
        stepContent.appendChild(button);
      });
    }

    // Append step content to step element
    stepElement.appendChild(stepContent);

    // Append step element to steps container
    stepsContainer.appendChild(stepElement);
  });

  // Show roadmap section
  roadmapSection.classList.remove('hidden');
  document.getElementById('role-based-roadmaps').classList.add('hidden');
  document.getElementById('skill-based-roadmaps').classList.add('hidden');
}

// Show Nested Projects
function showNestedProjects(category) {
  const categoryProjects = projects[category];
  if (!categoryProjects) return;

  // Hide all other sections
  document.getElementById('role-based-roadmaps').classList.add('hidden');
  document.getElementById('skill-based-roadmaps').classList.add('hidden');
  document.getElementById('projects-section').classList.add('hidden');
  document.getElementById('roadmap-section').classList.add('hidden');

  // Show Nested Projects Section
  nestedProjectsTitle.textContent = `${category.toUpperCase()} Projects`;
  const nestedProjectsContainer = document.querySelector('.nested-projects-container');
  nestedProjectsContainer.innerHTML = '';

  categoryProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('nested-project-card');
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
    `;
    projectCard.addEventListener('click', () => {
      showProjectDetails(project);
    });
    nestedProjectsContainer.appendChild(projectCard);
  });

  nestedProjectsSection.classList.remove('hidden');
}

// Show Project Details
function showProjectDetails(project) {
  // Set project details
  projectDetailsTitle.textContent = project.title;
  projectDetailsOverview.textContent = project.overview;
  startWorkingButton.href = project.startUrl;

  // Clear previous guide
  const guideContainer = document.getElementById('project-guide');
  if (guideContainer) {
    guideContainer.innerHTML = ""; // Clear the existing content
  } else {
    // If the guide container doesn't exist, create it
    const newGuideContainer = document.createElement('div');
    newGuideContainer.id = 'project-guide';
    projectDetailsSection.appendChild(newGuideContainer);
  }

  // Add each step to the guide
  project.guide.forEach((step, index) => {
    const stepElement = document.createElement('p');
    stepElement.textContent = step;
    guideContainer.appendChild(stepElement);
  });

  // Hide Nested Projects Section and show Project Details Section
  nestedProjectsSection.classList.add('hidden');
  projectDetailsSection.classList.remove('hidden');
}

// Back to Main Page
backToProjectsButton.addEventListener('click', () => {
  // Hide Nested Projects Section and Project Details Section
  nestedProjectsSection.classList.add('hidden');
  projectDetailsSection.classList.add('hidden');

  // Show all main sections
  document.getElementById('role-based-roadmaps').classList.remove('hidden');
  document.getElementById('skill-based-roadmaps').classList.remove('hidden');
  document.getElementById('projects-section').classList.remove('hidden');
});

// Back to Nested Projects Section
backToNestedProjectsButton.addEventListener('click', () => {
  // Hide Project Details Section and show Nested Projects Section
  projectDetailsSection.classList.add('hidden');
  nestedProjectsSection.classList.remove('hidden');
});

// Back button functionality
// Back button functionality
backButton.addEventListener('click', () => {
  // Hide Roadmap Section
  roadmapSection.classList.add('hidden');

  // Show all main sections
  document.getElementById('role-based-roadmaps').classList.remove('hidden');
  document.getElementById('skill-based-roadmaps').classList.remove('hidden');
  document.getElementById('projects-section').classList.remove('hidden');
});

// Toggle step content
stepsContainer.addEventListener('click', (e) => {
  const stepHeader = e.target.closest('h3');
  if (stepHeader) {
    const stepContent = stepHeader.nextElementSibling;
    stepContent.style.display = stepContent.style.display === 'block' ? 'none' : 'block';
  }
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Search Functionality

// Search Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  filterCards(query);
});

function filterCards(query) {
  const roleCards = document.querySelectorAll('.role-card');
  const skillCards = document.querySelectorAll('.skill-card');
  const roleSection = document.getElementById('role-based-roadmaps');
  const skillSection = document.getElementById('skill-based-roadmaps');
  const projectsSection = document.getElementById('projects-section');

  // Hide Projects Section when searching (only if query is not empty)
  if (query.trim() !== "") {
    projectsSection.classList.add('hidden');
  } else {
    // If search bar is empty, show all sections
    projectsSection.classList.remove('hidden');
    roleSection.classList.remove('hidden');
    skillSection.classList.remove('hidden');

    // Show all cards
    roleCards.forEach(card => card.style.display = 'block');
    skillCards.forEach(card => card.style.display = 'block');
    return; // Exit the function early
  }

  let roleMatch = false;
  let skillMatch = false;

  // Filter Role Cards
  roleCards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
      roleMatch = true; // At least one role card matches the query
    } else {
      card.style.display = 'none';
    }
  });

  // Filter Skill Cards
  skillCards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
      skillMatch = true; // At least one skill card matches the query
    } else {
      card.style.display = 'none';
    }
  });

  // Show/Hide Role-Based Section
  if (roleMatch) {
    roleSection.classList.remove('hidden');
  } else {
    roleSection.classList.add('hidden');
  }

  // Show/Hide Skill-Based Section
  if (skillMatch) {
    skillSection.classList.remove('hidden');
  } else {
    skillSection.classList.add('hidden');
  }

  // If no matches, hide both sections
  if (!roleMatch && !skillMatch) {
    roleSection.classList.add('hidden');
    skillSection.classList.add('hidden');
  }
}

// Highlight Active Section in Navbar
// Highlight Active Section in Navbar

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, #projects-section'); // Include Projects Section
  const navLinks = document.querySelectorAll('#navbar ul li a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100; // Adjust for header height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});

// Smooth Scrolling for Navbar Links
// Smooth Scrolling for Navbar Links
document.querySelectorAll('#navbar ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Hide Roadmap Section if it's visible
    if (!roadmapSection.classList.contains('hidden')) {
      roadmapSection.classList.add('hidden');
    }

    // Hide Nested Projects and Project Details Sections if they're visible
    nestedProjectsSection.classList.add('hidden');
    projectDetailsSection.classList.add('hidden');

    // Show all main sections
    document.getElementById('role-based-roadmaps').classList.remove('hidden');
    document.getElementById('skill-based-roadmaps').classList.remove('hidden');
    document.getElementById('projects-section').classList.remove('hidden');

    // Show the target section (in case it was hidden)
    targetSection.classList.remove('hidden');

    // Calculate the target section's position, accounting for the fixed header height
    const headerHeight = document.getElementById('header').offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight;

    // Scroll to the target section
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Highlight the clicked link
    document.querySelectorAll('#navbar ul li a').forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});





// Rest of the JavaScript code remains the same...
