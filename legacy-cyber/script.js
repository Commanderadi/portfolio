document.addEventListener('DOMContentLoaded', () => {

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    /* ==========================================================================
       V6: Custom Advanced Cursor
       ========================================================================== */
    const cursor = document.getElementById('cursor');
    if (cursor) {
        if (!isTouchDevice) {
            const cursorDot = cursor.querySelector('.cursor-dot');
            const cursorRing = cursor.querySelector('.cursor-ring');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let ringX = mouseX;
            let ringY = mouseY;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            });

            const renderCursor = () => {
                ringX += (mouseX - ringX) * 0.2;
                ringY += (mouseY - ringY) * 0.2;
                cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
                requestAnimationFrame(renderCursor);
            };
            requestAnimationFrame(renderCursor);

            // Hover States (Event Delegation handles dynamic elements)
            document.body.addEventListener('mouseover', (e) => {
                if (e.target.closest('a, button, .tilt-element')) {
                    cursor.classList.add('hover-link');
                }
            });
            document.body.addEventListener('mouseout', (e) => {
                if (e.target.closest('a, button, .tilt-element')) {
                    cursor.classList.remove('hover-link');
                }
            });
        } else {
            cursor.style.display = 'none';
        }
    }

    /* ==========================================================================
       V6: 3D Tilt Effect
       ========================================================================== */
    window.initTiltEffect = () => {
        if (isTouchDevice) return;
        const tiltEls = document.querySelectorAll('.tilt-element');
        tiltEls.forEach(el => {
            el.onmousemove = (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPct = (x / rect.width - 0.5) * 2;
                const yPct = (y / rect.height - 0.5) * 2;
                const maxRotate = el.dataset.tiltMax || 5;
                el.style.transform = `perspective(1200px) rotateX(${yPct * -maxRotate}deg) rotateY(${xPct * maxRotate}deg) scale3d(1.01, 1.01, 1.01)`;
            };
            el.onmouseleave = () => {
                el.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                el.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                setTimeout(() => { el.style.transition = ''; }, 500);
            };
        });
    };

    // Init on static elements
    setTimeout(() => window.initTiltEffect(), 100);

    /* ==========================================================================
       V6: Scroll Reveal Observer
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-panel').forEach(panel => {
        revealObserver.observe(panel);
    });

    /* ==========================================================================
       V5: Interactive Canvas Particle Network (Neural Grid)
       ========================================================================== */
    const canvas = document.getElementById('neural-net');
    const ctx = canvas.getContext('2d');

    let w, h, particles;
    let mouse = { x: null, y: null, radius: 150 };

    function initCanvas() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        particles = [];

        // Responsive particle count
        const particleCount = (w * h) / 15000;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.baseX = this.x;
            this.baseY = this.y;
            this.size = Math.random() * 2 + 0.1;
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 243, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        update() {
            // Mouse Repulsion Math
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const maxSpeed = 3;

                this.x -= forceDirectionX * force * maxSpeed;
                this.y -= forceDirectionY * force * maxSpeed;
            } else {
                // Return to base position roughly or just drift
                this.x += this.vx;
                this.y += this.vy;
            }

            // Bounce off edges
            if (this.x < 0 || this.x > w) this.vx = -this.vx;
            if (this.y < 0 || this.y > h) this.vy = -this.vy;
        }
    }

    // Connect particles with lines if close
    function drawConnections() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${1 - dist / 120})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        drawConnections();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    initCanvas();
    animate();

    /* ==========================================================================
       V5: HUD Data Streams Generator (Random Hex)
       ========================================================================== */
    const streamLeft = document.getElementById('data-stream-left');
    const streamRight = document.getElementById('data-stream-right');

    function generateHexStream() {
        let stream = '';
        for (let i = 0; i < 40; i++) {
            stream += Math.random().toString(16).substr(2, 4).toUpperCase() + ' ';
        }
        return stream;
    }

    setInterval(() => {
        if (streamLeft) streamLeft.innerText = generateHexStream();
        if (streamRight) streamRight.innerText = generateHexStream();
    }, 1500);


    /* ==========================================================================
       V5: Text Scramble Effect (Cyber-Decode)
       ========================================================================== */
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const scrambleElements = document.querySelectorAll(".scramble-text");

    scrambleElements.forEach(el => {
        el.addEventListener("mouseover", event => {
            let iteration = 0;
            clearInterval(el.dataset.scrambleInterval);

            el.dataset.scrambleInterval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 42)]
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(el.dataset.scrambleInterval);
                }

                iteration += 1 / 3;
            }, 30);
        });
    });

    // Run scramble once on load for the main title
    setTimeout(() => {
        const title = document.querySelector('.mega-title');
        if (title) {
            title.dispatchEvent(new MouseEvent('mouseover'));
        }
    }, 500);

    /* ==========================================================================
       V5: Render Dynamic Projects into Grid HUD
       ========================================================================== */
    const categoryConfig = {
        production: { label: 'PRODUCTION', color: '#ff0055' },
        fullstack: { label: 'FULL-STACK', color: '#00f3ff' },
        ai: { label: 'AI / ML', color: '#a855f7' },
        analytics: { label: 'ANALYTICS', color: '#22c55e' },
        cv: { label: 'COMPUTER VISION', color: '#f59e0b' }
    };

    const categoryIcons = {
        production: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>',
        fullstack: '<path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path>',
        ai: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path>',
        analytics: '<path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path>',
        cv: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
    };

    const renderProjectsHUD = () => {
        const grid = document.getElementById('projectsGrid');
        if (!grid || typeof projectsData === 'undefined') return;

        projectsData.forEach((project) => {
            const card = document.createElement('div');
            card.className = 'project-card tilt-element';
            card.dataset.tiltMax = "5";

            const tags = project.tags.map(t => `<span>${t}</span>`).join('');
            const cat = categoryConfig[project.category] || categoryConfig.fullstack;
            const icon = categoryIcons[project.category] || categoryIcons.fullstack;

            card.innerHTML = `
                <div class="project-header">
                    <div class="project-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>
                    </div>
                    <div class="project-links">
                        <span class="project-category" style="border-color:${cat.color}; color:${cat.color};">${cat.label}</span>
                        <a href="${project.links.github}" target="_blank" title="ACCESS NODE">
                            <span class="font-mono" style="font-size:0.7rem;">[SRC]</span>
                        </a>
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="hud-tags">${tags}</div>
            `;
            grid.appendChild(card);
        });
    };

    renderProjectsHUD();

    // Re-initialize tilt effect for dynamically added projects
    if (window.initTiltEffect) window.initTiltEffect();

});
