document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }

  // Movie Credits Animation Controller
  const skipButton = document.getElementById("skipCredits");
  const welcomeContent = document.querySelector(".welcome-content");

  if (skipButton && welcomeContent) {
    // Skip credits functionality
    skipButton.addEventListener("click", function () {
      welcomeContent.style.animation = "none";
      welcomeContent.style.transform = "translateY(0)";
      welcomeContent.style.opacity = "1";
      skipButton.classList.add("hidden");
    });

    // Hide skip button after animation completes
    welcomeContent.addEventListener("animationend", function () {
      skipButton.classList.add("hidden");
    });

    // Auto-hide skip button after 5 seconds if not used
    setTimeout(() => {
      if (!skipButton.classList.contains("hidden")) {
        skipButton.style.opacity = "0.5";
      }
    }, 5000);
  }

  // Typing Animation Function
  function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = "";

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Typing complete, remove cursor after a delay
        setTimeout(() => {
          element.classList.add("typing-complete");
          if (callback) callback();
        }, 1000);
      }
    }

    type();
  }

  // Initialize typing animations for portfolio page
  const typingHeading = document.querySelector(".typing-text");
  const typingSubtext = document.querySelector(".typing-subtext");

  if (typingHeading) {
    const headingText = typingHeading.getAttribute("data-text");

    // Start typing the heading
    setTimeout(() => {
      typeWriter(typingHeading, headingText, 80, () => {
        // After heading is complete, type the subtext
        if (typingSubtext) {
          const subtextText = typingSubtext.getAttribute("data-text");
          setTimeout(() => {
            typeWriter(typingSubtext, subtextText, 50);
          }, 500);
        }
      });
    }, 300);
  }

  // Particles Animation
  const particlesContainer = document.getElementById("particles");

  if (particlesContainer) {
    function createParticle() {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = Math.random() * 5 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(${Math.random() * 100 + 155}, ${
        Math.random() * 100 + 126
      }, 234, ${Math.random() * 0.5 + 0.2})`;
      particle.style.borderRadius = "50%";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.pointerEvents = "none";
      particle.style.animation = `particleFloat ${
        Math.random() * 10 + 10
      }s linear infinite`;

      particlesContainer.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 20000);
    }

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    // Create new particles periodically
    setInterval(createParticle, 1000);
  }

  // Add CSS animation for particles dynamically
  if (!document.getElementById("particle-animation")) {
    const style = document.createElement("style");
    style.id = "particle-animation";
    style.textContent = `
      @keyframes particleFloat {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(${
            Math.random() * 100 - 50
          }px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.1)";
        navbar.style.background = "rgba(255, 255, 255, 0.99)";
      } else {
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
      }
    });
  }

  // ========================================
  // LIVE DEMO MODAL FUNCTIONALITY
  // ========================================

  const demoModal = document.getElementById("demoModal");
  const demoTitle = document.getElementById("demoTitle");
  const demoBody = document.getElementById("demoBody");
  const closeDemo = document.getElementById("closeDemo");
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  // Project Demo URLs - Add your GitHub Pages URLs here
  const projectDemos = {
    portfolio: {
      title: "Portfolio Website Demo",
      url: "https://lethusithole.github.io/Lethu-portfolio/",
      type: "iframe",
    },
    tictactoe: {
      title: "Tic Tac Toe Game Demo",
      url: "https://lethusithole.github.io/tic-tac-toe/",
      type: "iframe",
      features: [
        {
          icon: "fa-gamepad",
          title: "Interactive Gameplay",
          desc: "Play against another player with smooth animations",
        },
        {
          icon: "fa-trophy",
          title: "Score Tracking",
          desc: "Keep track of wins, losses, and draws",
        },
        {
          icon: "fa-redo",
          title: "Reset Function",
          desc: "Easy reset to start a new game anytime",
        },
      ],
    },
    airbnb: {
      title: "Airbnb Clone Demo",
      url: "https://lethusithole.github.io/airbnb-clone/",
      type: "iframe",
      features: [
        {
          icon: "fa-home",
          title: "Property Listings",
          desc: "Browse and search available properties",
        },
        {
          icon: "fa-calendar-alt",
          title: "Booking System",
          desc: "Reserve properties with date selection",
        },
        {
          icon: "fa-star",
          title: "Reviews & Ratings",
          desc: "Read and write property reviews",
        },
      ],
    },
    calculator: {
      title: "Calculator Demo",
      url: "https://lethusithole.github.io/calculator/",
      type: "iframe",
      features: [
        {
          icon: "fa-calculator",
          title: "Basic Operations",
          desc: "Add, subtract, multiply, and divide",
        },
        {
          icon: "fa-keyboard",
          title: "Keyboard Support",
          desc: "Use keyboard for quick calculations",
        },
        {
          icon: "fa-history",
          title: "Memory Functions",
          desc: "Store and recall previous calculations",
        },
      ],
    },
    youtube: {
      title: "YouTube Clone Demo",
      url: "https://lethusithole.github.io/youtube-clone/",
      type: "iframe",
      features: [
        {
          icon: "fa-video",
          title: "Video Streaming",
          desc: "Watch and upload video content",
        },
        {
          icon: "fa-search",
          title: "Search Function",
          desc: "Find videos with advanced search",
        },
        {
          icon: "fa-comments",
          title: "Comments System",
          desc: "Engage with comments and likes",
        },
      ],
    },
    netflix: {
      title: "Netflix Clone Demo",
      url: "https://lethusithole.github.io/netflix-clone/",
      type: "iframe",
      features: [
        {
          icon: "fa-film",
          title: "Movie Categories",
          desc: "Browse movies by genre and popularity",
        },
        {
          icon: "fa-play-circle",
          title: "Trailer Integration",
          desc: "Watch movie trailers before selecting",
        },
        {
          icon: "fa-user",
          title: "User Profiles",
          desc: "Create and manage multiple profiles",
        },
      ],
    },
    googlekeep: {
      title: "Google Keep Clone Demo",
      url: "https://lethusithole.github.io/google-keep-react/",
      type: "iframe",
      features: [
        {
          icon: "fa-sticky-note",
          title: "Note Creation",
          desc: "Create, edit, and organize notes easily",
        },
        {
          icon: "fa-palette",
          title: "Color Coding",
          desc: "Organize notes with custom colors",
        },
        {
          icon: "fa-search",
          title: "Search & Filter",
          desc: "Find notes quickly with search",
        },
      ],
    },
    tesla: {
      title: "Tesla Clone Website Demo",
      url: "https://lethusithole.github.io/tesla-clone/",
      type: "iframe",
      features: [
        {
          icon: "fa-car",
          title: "Car Models",
          desc: "Explore different Tesla vehicle models",
        },
        {
          icon: "fa-bolt",
          title: "Features Showcase",
          desc: "Interactive features and specifications",
        },
        {
          icon: "fa-mobile-alt",
          title: "Responsive Design",
          desc: "Optimized for all device sizes",
        },
      ],
    },
  };

  // Open demo modal
  document.querySelectorAll(".btn-demo").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const projectId = this.getAttribute("data-project");
      const project = projectDemos[projectId];

      if (project) {
        demoTitle.innerHTML = `<i class="fas fa-desktop"></i> ${project.title}`;

        if (project.type === "iframe" && project.url) {
          // Load project in iframe
          demoBody.innerHTML = `<iframe src="${project.url}" frameborder="0" allowfullscreen></iframe>`;
        } else {
          // Show placeholder with features
          let featuresHTML = "";
          if (project.features) {
            featuresHTML = `
              <div class="demo-features">
                ${project.features
                  .map(
                    (feature) => `
                  <div class="demo-feature-item">
                    <i class="fas ${feature.icon}"></i>
                    <h4>${feature.title}</h4>
                    <p>${feature.desc}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `;
          }

          demoBody.innerHTML = `
            <div class="demo-placeholder">
              <i class="fas fa-laptop-code"></i>
              <h4>${project.title}</h4>
              <p>To view the live demo, please add your project URL in the script.js file or enter it below:</p>
              <div class="demo-url-input">
                <input type="url" id="projectUrl" placeholder="Enter project URL (e.g., https://example.com)">
                <button onclick="loadProjectDemo('${projectId}')">
                  <i class="fas fa-external-link-alt"></i> Load Demo
                </button>
              </div>
              ${featuresHTML}
            </div>
          `;
        }

        demoModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close demo modal
  function closeDemoModal() {
    demoModal.classList.remove("active");
    document.body.style.overflow = "auto";
    demoBody.innerHTML = "";
  }

  if (closeDemo) {
    closeDemo.addEventListener("click", closeDemoModal);
  }

  // Close modal when clicking outside
  demoModal.addEventListener("click", function (e) {
    if (e.target === demoModal) {
      closeDemoModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && demoModal.classList.contains("active")) {
      closeDemoModal();
    }
  });

  // Fullscreen functionality
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", function () {
      const modalContent = document.querySelector(".demo-modal-content");
      if (!document.fullscreenElement) {
        modalContent.requestFullscreen().catch((err) => {
          console.log("Error attempting to enable fullscreen:", err);
        });
        fullscreenBtn.innerHTML =
          '<i class="fas fa-compress"></i> Exit Fullscreen';
      } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
      }
    });
  }

  // Listen for fullscreen changes
  document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement && fullscreenBtn) {
      fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
    }
  });

  // Global function to load project demo from input
  window.loadProjectDemo = function (projectId) {
    const urlInput = document.getElementById("projectUrl");
    const url = urlInput.value.trim();

    if (url) {
      // Validate URL
      try {
        new URL(url);
        demoBody.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
      } catch (e) {
        alert("Please enter a valid URL (e.g., https://example.com)");
      }
    } else {
      alert("Please enter a project URL");
    }
  };
});
