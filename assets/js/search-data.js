// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-archives",
          title: "Archives",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-research-project-on-vocal-development-voc2speak",
          title: 'New research project on vocal development : VOC2SPEAK',
          description: "",
          section: "News",},{id: "news-talks-and-poster-presentation-at-the-journées-de-la-phonétique-clinique-in-sète",
          title: 'Talks and poster presentation at the Journées de la Phonétique Clinique in Sète...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/journeePhonetiqueClinique/";
            },},{id: "news-two-new-publications-fuchs-s-jover-m-noiray-a-amp-amp-petrone-c-in-press-on-the-development-of-breathing-and-vocalization-in-a-prelinguistic-child-a-case-study-folia-phoniatrica-et-logopaedica-doi-10-1159-000547328-paper-rubertus-e-popescu-a-amp-amp-noiray-a-2025-seriality-in-word-reading-kinematic-insights-into-beginning-and-proficient-readers-journal-of-experimental-psychology-learning-memory-and-cognition-paper",
          title: 'Two new publications: Fuchs, S., Jover, M., Noiray, A., &amp;amp;amp; Petrone, C. (in...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-workshop-on-ultrasound-imaging-at-stem-ix-summer-training-in-experimental-methods-july-16th-2025",
          title: 'I will give a workshop on ultrasound imaging at STEM IX (Summer Training...',
          description: "",
          section: "News",},{id: "news-speech-balance-a-new-funded-project-on-speech-related-deficiencies-in-patients-with-vestibular-schwannomas",
          title: 'Speech Balance, a new funded project on speech-related deficiencies in patients with vestibular...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-at-the-next-rencontre-des-jeunes-chercheurs-en-parole-rjpc-november-5th-2025",
          title: 'I will give a talk at the next Rencontre des Jeunes Chercheurs en...',
          description: "",
          section: "News",},{id: "projects-coarticulation",
          title: 'Coarticulation',
          description: "A metric to study spoken language fluency (development)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coarticulation/";
            },},{id: "projects-disharmonious-babblers",
          title: 'Disharmonious babblers',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disharmonious_babblers/";
            },},{id: "projects-methodologies",
          title: 'Methodologies',
          description: "Conceptualizing tailored tools to study (a)typical speech (development)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/methodologies/";
            },},{id: "projects-pathological-speech",
          title: 'Pathological speech',
          description: "Speech disfluencies in patients with language-related deficiencies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pathological_speech/";
            },},{id: "projects-links-between-speech-amp-reading-fluency",
          title: 'Links between speech &amp;amp; reading fluency',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/relation_speech_and_reading/";
            },},{id: "projects-voc2speak",
          title: 'VOC2SPEAK',
          description: "An integrative-interactive approach to vocal development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/voc2speak/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/audenoiray.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%75%64%65.%6E%6F%69%72%61%79@%75%6E%69%76-%67%72%65%6E%6F%62%6C%65-%61%6C%70%65%73.%66%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aude-noiray-1b514187", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Aude-Noiray/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://lpnc.univ-grenoble-alpes.fr/fr", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
