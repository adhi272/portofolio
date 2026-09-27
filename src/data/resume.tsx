import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { SqlIcon } from "@/components/ui/svgs/sql";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Adhi",
  initials: "A",
  url: "https://adhi272.vercel.app",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Internet Engineering Student at UGM | Network Enthusiast | Exploring Cloud Computing & Cybersecurity",
  summary:
    "I am an Internet Engineering (D4) student at Universitas Gadjah Mada with a strong interest in computer networking and cloud infrastructure. Passionate about understanding how network systems and technologies integrate, I am constantly expanding my technical skill set through hands-on projects and continuous learning. Also, I am open to connecting with professionals, collaborating on tech projects, and exploring opportunities in network engineering. Feel free to connect or reach out via LinkedIn!.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "SQL", icon: SqlIcon },
    { name: "Python", icon: Python },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "radhi0550@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adhi272",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raka-adhi-gunattama-7b2310369",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Dhivert_",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Dhivertt",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Karang Taruna",
      href: "https://www.instagram.com/permadikadisono/",
      badges: [],
      location: "Yogyakarta, Indonesia",
      title: "Event Logistics Coordinator",
      logoUrl: "/karangtaruna.png",
      start: "Sep 2022",
      end: "Now",
      description:
        "Responsible for end-to-end logistics and equipment setup for Permadi Kadisono serving 100+ participants. Successfully lowered operational expenditures through vendor negotiations and ensured smooth event delivery by managing inventory tracking and on-site technical troubleshooting before, during, and after the event.",
    },
    {
      company: "Networking Club",
      href: "https://www.instagram.com/netclub_ugm/",
      badges: [],
      location: "Yogyakarta, Indonesia",
      title: "Cyber Security Division Member",
      logoUrl: "/netclub.jpg",
      start: "Sep 2026",
      end: "Now",
      description:
        "Active member of the Cybersecurity Division at NetClub UGM, participating in technical workshops, hands-on network security analysis, ethical hacking practices, and collaborative learning around cloud security and threat mitigation.",
    },
  ],
  education: [
    {
      school: "Universitas Gadjah Mada",
      href: "https://ugm.ac.id/id/",
      degree: "Internet Engineering Student (D4)",
      logoUrl: "/UGM.jpg",
      start: "2026",
      end: "Now",
    },
    {
      school: "Universitas Pembangan Nasional Veteran Yogyakarta",
      href: "https://www.upnyk.ac.id/",
      degree: "Informatics Engineering (S1)",
      logoUrl: "/upnvyk.png",
      start: "2025",
      end: "2026",
    },
    {
      school: "SMA Negeri 1 Sleman",
      href: "https://sman1sleman.sch.id/",
      degree: "Science Major",
      logoUrl: "/smansatu-sleman.png",
      start: "2022",
      end: "2025",
    },
  ],
 projects: [
    {
      title: "Crypto Alpha Bot",
      href: "https://github.com/adhi272",
      dates: "2026",
      active: true,
      description:
        "An automated trading or tracking bot designed to capture crypto alpha insights, market trends, and real-time signals.",
      technologies: [
        "Python",
        "Next.js",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adhi272",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/crypto-demo.mp4",
    },
    {
      title: "NaviMaps",
      href: "https://github.com/adhi272",
      dates: "2026",
      active: true,
      description:
        "An indoor navigation and mapping system designed for public buildings like malls and hospitals, enabling users to easily search and find specific rooms or locations indoors.",
      technologies: [
        "React",
        "Python",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adhi272",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://www.mappedin.com/static/66e7429ad31166cccba38d2887aa5c72/map-design-hero-first-frame.webp",
      video: "",
    },
  ],
} as const;