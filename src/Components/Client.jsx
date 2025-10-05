"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const clients = [
  {
    name: "Akash Life",
    logo: "https://d1ouo9ky39mo8a.cloudfront.net/micro-site/images/white_bgLogo%203.png",  // from Wikipedia / Wikimedia Commons :contentReference[oaicite:0]{index=0}
  },
  {
    name: "Start.gg",
    logo: "https://www.start.gg/__static/images/logo_wordmark_white.png",  // original you had was fine
  },
  {
    name: "Rumusha",
    logo: "https://clothing-store.rashidshamloo.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",  // check if this exists & serves properly
  },
  {
    name: "HUB",
    logo: "https://hub.com.pk/cdn/shop/files/HUB_tag_line-02_main_logo_130x@2x.png?v=1754983837",  
  },
  {
    name: "ONE",
    logo: "https://ecomm.one-line.com/one-ecom/logo-production.svg",
  },
  {
    name: "kordovan",
    logo: "https://kordovanleather.com/cdn/shop/files/White_Logo_500x_1_140x.png?v=1718311384",
  },
  {
    name: "Cozy",
    logo: "https://res.cloudinary.com/dc6svbdh9/image/upload/v1748156659/header/uknthto2pstvbrmvqxnl.svg",  // official Elastic / Elasticsearch logo from Wikimedia Commons :contentReference[oaicite:1]{index=1}
  },
  {
    name: "HubSpot",
    logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjU1LjgyIDM1NS45OSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmNDgwMDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9Ikh1YlNwb3RfTG9nbyIgZGF0YS1uYW1lPSJIdWJTcG90IExvZ28iPgogICAgPGc+CiAgICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMzYuMDEgMjAxLjQ4IDQzLjc5IDIwMS40OCA0My43OSAyOTguNjIgMCAyOTguNjIgMCA1OC45MyA0My43OSA1OC45MyA0My43OSAxNTkuMzUgMTM2LjAxIDE1OS4zNSAxMzYuMDEgNTguOTMgMTc5Ljc5IDU4LjkzIDE3OS43OSAyOTguNjIgMTM2LjAxIDI5OC42MiAxMzYuMDEgMjAxLjQ4Ii8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxOS45MSwyMjEuMTRjMCwxOS45Ni0xNi4yNiwzNi4yMS0zNi4yMiwzNi4yMXMtMzYuMjEtMTYuMjQtMzYuMjEtMzYuMjF2LTEwMi42NmgtNDEuNDd2MTAyLjY2YzAsNDIuODMsMzQuODUsNzcuNjcsNzcuNjgsNzcuNjdzNzcuNjctMzQuODQsNzcuNjctNzcuNjd2LTEwMi42NmgtNDEuNDV2MTAyLjY2WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MjcuNiwxMjkuMDVjMC0yMS4wNSwxMy45My0yNy43MiwyOS4xOC0yNy43MiwxMi4yOCwwLDI4LjUzLDkuMzUsMzkuMTQsMjAuNzFsMjcuMTktMzIuMDZjLTEzLjU5LTE4LjM2LTQxLjEyLTMxLjA1LTYzLjY3LTMxLjA1LTQ1LjEyLDAtNzcuNjMsMjYuMzgtNzcuNjMsNzAuMTMsMCw4MS4xNCw5OS4xOSw1NS40Miw5OS4xOSwxMDAuODQsMCwxNC4wMS0xMy42LDI2LjM3LTI5LjE4LDI2LjM3LTI0LjU1LDAtMzIuNTItMTIuMDItNDMuNzktMjQuNzFsLTMwLjE5LDMxLjM4YzE5LjI1LDIzLjcxLDQzLjEzLDM1Ljc0LDcxLjY2LDM1Ljc0LDQyLjc5LDAsNzcuMjktMjYuNzEsNzcuMjktNjguNDYsMC05MC4xNS05OS4xOC02Mi4xLTk5LjE4LTEwMS4xNloiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI0MS4yMSwyNjAuMzNjLTI0LjU0LDAtMzEuNS0xMC42MS0zMS41LTI2Ljg3di03MS45OGgzOC4xNHYtMzYuNDhoLTM4LjE0di00OC4xbC00Mi4xMiwxOC45MXYxNDYuNjJjMCwzNy40OSwyNS44Niw1Ni40LDYxLjM0LDU2LjQsNS4zMSwwLDEyLjYxLS4zNCwxNi42LTEuMzNsMTAuMjktMzcuODFjLTQuNjQuMzItOS45NS42NS0xNC42MS42NVoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDc3Ljk2LDExOS42OGMtMjAuNTcsMC0zNC45Miw1Ljk3LTQ4Ljc5LDE5LjU4VjYwLjM2aC00MS42djE0Ni4yM2MwLDU0LjczLDM5LjU3LDkyLjIyLDg0LjA0LDkyLjIyLDQ5LjQzLDAsOTIuNzMtMzguMTUsOTIuNzMtODkuNTZzLTM5LjkzLTg5LjU3LTg2LjM4LTg5LjU3Wk00NzcuNywyNTYuOTVjLTI2LjA2LDAtNDcuMTgtMjEuMTItNDcuMTgtNDcuMThzMjEuMTItNDcuMTgsNDcuMTgtNDcuMTgsNDcuMTgsMjEuMTIsNDcuMTgsNDcuMTgtMjEuMTIsNDcuMTgtNDcuMTgsNDcuMThaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkyOS41OSwyMDcuMDljMC01MS40MS00My4zMS04OS41Ni05Mi43My04OS41Ni00NC40NiwwLTg0LjA0LDM3LjQ5LTg0LjA0LDkyLjIydjE0Ni4yM2g0MS42di03OC45MWMxMy44NywxMy42MSwyOC4yMiwxOS41OCw0OC43OSwxOS41OCw0Ni40NSwwLDg2LjM4LTM4LjgxLDg2LjM4LTg5LjU3Wk04OTAuMTMsMjA2LjU4YzAsMjYuMDYtMjEuMTIsNDcuMTgtNDcuMTgsNDcuMThzLTQ3LjE4LTIxLjEyLTQ3LjE4LTQ3LjE4LDIxLjEyLTQ3LjE4LDQ3LjE4LTQ3LjE4LDQ3LjE4LDIxLjEyLDQ3LjE4LDQ3LjE4WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDY0LjAxLDExNS41MnYtNDEuNzljMTAuOTEtNS4xNSwxOC41NS0xNi4xOSwxOC41NS0yOC45OXYtLjk3YzAtMTcuNjctMTQuNDYtMzIuMTMtMzIuMTMtMzIuMTNoLS45NmMtMTcuNjcsMC0zMi4xMywxNC40Ni0zMi4xMywzMi4xM3YuOTdjMCwxMi44MSw3LjY0LDIzLjg0LDE4LjU1LDI4Ljk5djQxLjc5Yy0xNi4yNCwyLjUxLTMxLjA4LDkuMjEtNDMuMzIsMTkuMDZsLTExNC43My04OS4yNWMuNzUtMi45MSwxLjI4LTUuOSwxLjI5LTkuMDRDODc5LjE0LDE2LjI3LDg2Mi45NC4wMyw4NDIuOTIsMGMtMjAuMDItLjAzLTM2LjI2LDE2LjE4LTM2LjI5LDM2LjItLjAyLDIwLjAyLDE2LjE4LDM2LjI2LDM2LjIsMzYuMjksNi41MiwwLDEyLjU2LTEuODQsMTcuODUtNC44NWwxMTIuODYsODcuNzljLTkuNiwxNC40OS0xNS4yMiwzMS44NC0xNS4yMiw1MC41MnM2LjE4LDM3LjY1LDE2LjYyLDUyLjUzbC0zNC4zMiwzNC4zMmMtMi43MS0uODEtNS41My0xLjM4LTguNTEtMS4zOC0xNi40NSwwLTI5Ljc4LDEzLjMzLTI5Ljc4LDI5Ljc4czEzLjM0LDI5Ljc4LDI5Ljc4LDI5Ljc4LDI5Ljc4LTEzLjMzLDI5Ljc4LTI5Ljc4YzAtMi45OC0uNTctNS44LTEuMzgtOC41MWwzMy45NS0zMy45NWMxNS40MSwxMS43NiwzNC42LDE4LjgzLDU1LjQ5LDE4LjgzLDUwLjYsMCw5MS42Mi00MS4wMiw5MS42Mi05MS42MiwwLTQ1LjgxLTMzLjY1LTgzLjY1LTc3LjU2LTkwLjQzWk0xMDQ5Ljk0LDI1Mi45MmMtMjUuOTQsMC00Ni45OC0yMS4wMy00Ni45OC00Ni45N3MyMS4wMy00Ni45Nyw0Ni45OC00Ni45Nyw0Ni45NywyMS4wMyw0Ni45Nyw0Ni45Ny0yMS4wMyw0Ni45Ny00Ni45Nyw0Ni45N1oiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==",
  },
];

export default function CleanProfessionalClients() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-slate-900  px-4 sm:px-8 py-16 sm:py-20 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto ">
        
  <SectionHeading 
  first={"Brands"}
  second={"We Serve"}
  paragraph={"We collaborate with global technology leaders to build scalable, enterprise-level solutions that power the digital economy"}
  color={"white"}
  />

        {/* Client Logos */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.9 + (index * 0.1),
                ease: "easeOut"
              }}
            >
              <div className="relative py-8 md:py-12 px-6 bg-slate-800/40 rounded-lg border border-slate-700/50  transition-all duration-500 hover:bg-slate-700/40 hover:border-blue-700 group-hover:scale-105">
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-16 object-contain filter brightness-0 invert opacity-50 group-hover:opacity-80 transition-opacity duration-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}