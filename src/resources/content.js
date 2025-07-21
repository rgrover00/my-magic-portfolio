const person = {
  firstName: "Ronnie",
  lastName: "Grover",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "👨‍👧‍👦 Dad. 👨‍💻 Engineer. 🛠️ Developer. ",
  avatar: "/images/avatar.jpg",
  email: "rkg@ronniegrovr.com", 
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about my projects, thoughts, and experiences.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rgrover00",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ronniegrover/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ronniekgrover",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Look for what you can't see`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From Wi-Fi to Web Apps — One Bug Fix at a Time</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">2D Grover Journey</strong></>,
    href: "/work/2d-grover-journey",
  },
  subline: (
    <>
      I'm Ronnie, a dad developer and network engineer. I help secure, troubleshoot, and build networks. After hours, I dive into web development, self-hosted tools, and the occasional lego castle.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ronniegrover",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm currently a system support specialist and web developer passionate about building secure networks and intuitive digital experiences. With over a decade in IT and cloud tech, I bring creative problem-solving and hands-on expertise to everything from enterprise networking to front-end frameworks. Powered by my wife, three kids, and a healthy dose of dad humor, I approach tech with heart, hustle, and a touch of fun.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BCSD",
        timeframe: "2024 - Present",
        role: "System Support Specialist II - Networking",
        achievements: [
          <span key="achievement1">Maintain and optimize network systems to ensure secure, reliable, and scalable connectivity across the organization. Utilize expertise in Extreme Switching and EXOS, backed by Extreme Networks certifications, to implement and troubleshoot advanced networking solutions..</span>,
          <span key="achievement2">Provide technical support for network-related issues, collaborating with cross-functional teams to enhance IT operations and ensure seamless system performance. Leverage certifications to deliver efficient solutions and uphold industry best practices.</span>
      ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "BCSD Logo",
            width: 20,
            height: 10,
          },
        ],
      },
      {
        company: '11:11 Systems',
        timeframe: '2018 - 2023',
        role: 'IT Manager',
        achievements: [
            <span key="achievement1">Spearheaded the successful integration of acquired companies into the existing Google Workspace and Okta environment, ensuring data integrity, minimal downtime, and a seamless user experience for all employees.</span>,
            <span key="achievement2">Collaborated with HR to design and implement a streamlined onboarding and offboarding process within Google Workspace, Azure, and Active Directory, automating user account provisioning, access permissions, and resource allocation.</span>,
            <span key="achievement3">Integrated a variety of SaaS cloud applications into Okta using Google SSO, streamlining user access and authentication processes while upholding industry-leading security standards. This integration enhanced user experience, reduced friction, and ensured a secure and efficient workflow across all platforms.</span>
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "1111 Logo",
            width: 20,
            height: 10,
          },
        ],
      },
      {
        company: 'ConvergeOne',
        timeframe: '2016 - 2018',
        role: 'Network Engineer',
        achievements: [
            <span key="achievement1">Ensured uninterrupted communication and operational efficiency by maintaining mission-critical network infrastructure for government entities. Configured and deployed network devices, including routers, switches, firewalls, and load balancers, to optimize performance, reliability, and security.</span>,
            <span key="achievement2">Collaborated with cross-functional teams to analyze business needs and implement tailored network solutions. Conducted network capacity planning, proactively recommending and executing upgrades to meet evolving organizational demands and ensure future scalability.</span>
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "C1 Logo",
            width: 20,
            height: 10,
          },
        ],
      },
      {
        company: 'Charter Communications',
        timeframe: '2012 - 2016',
        role: 'Commercial Tech Ops Support',
        achievements: [
            <span key="achievement1">Enhanced technical support processes, reducing response times by 20% and improving customer satisfaction by 15%. Managed logistical coordination to ensure timely delivery of materials, minimized operational downtime, and maintained accurate hardware inventory for efficient resource allocation.</span>,
            <span key="achievement2">Diagnosed and resolved complex software compatibility issues, improving end-user experiences. Acted as the primary escalation point for Tier-1 and Tier-2 support, delivering swift resolutions to critical technical problems while maintaining operational efficiency..</span>
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Spectrum Logo",
            width: 20,
            height: 10,
          },
        ],
      },
      {
        company: 'Coach',
        timeframe: '2010 - 2012',
        role: 'Stock Associate',
        achievements: [
            <span key="achievement1">Back before I was troubleshooting networks and building web apps, I was restocking luxury handbags and keeping inventory sharp at Coach. My role involved managing product flow, organizing back stock, and making sure everything on the floor looked flawless—basically early training in structured systems and attention to detail (just without the routers and React components).</span>,
            <span key="achievement2">But the best part? It’s where I met my future wife. Fast forward 10+ years, three amazing kids, two Yorkies, and a whole lot of adventures later—turns out this gig stocked more than just handbags. It was the start of a life built on teamwork, late-night laughs, and tech-powered dad jokes.</span>
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Coach Logo",
            width: 20,
            height: 10,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
          name: 'Suny Orange',
          description: <>Computer Information Technology - Networking - 2012</>,
      },
      {
          name: 'Professional Google Workspace Administrator',
          description: <>Google Cloud Platform (GCP)•September 2023</>,
      },
      {
          name: 'AWS Certified Cloud Practitioner',
          description: <>Amazon Web Services (AWS)•September 2023</>,
      },
      {
          name: 'Extreme Networks',
          description: <>Extreme Switching - Installation, Configuration, and Management Certification</>,
      }
  ]
},
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Developer",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and more...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    // Alternating pattern: horizontal, vertical, horizontal, vertical...
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Gallery image 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Gallery image 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Gallery image 3",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Gallery image 4",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Gallery image 5",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Gallery image 6",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Gallery image 7",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Gallery image 8",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-5.jpg",
      alt: "Gallery image 9",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-5.jpg",
      alt: "Gallery image 10",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-6.jpg",
      alt: "Gallery image 11",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-6.jpg",
      alt: "Gallery image 12",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-7.jpg",
      alt: "Gallery image 13",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-7.jpg",
      alt: "Gallery image 14",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-8.jpg",
      alt: "Gallery image 15",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-9.jpg",
      alt: "Gallery image 16",
      orientation: "horizontal",
    }, 
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
