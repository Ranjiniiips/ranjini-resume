document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navList.classList.remove('show');
        });
    });

    // Populate skills
    const skills = [
        'Python', 'SQL', 'Data Analysis', 'TensorFlow', 
        'Web Development', 'Communication', 'Team Collaboration',
        'Time Management', 'Client Counseling'
    ];
    
    const skillsContainer = document.getElementById('skills-container');
    
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });

    // Populate education timeline
    const educationData = [
        {
            title: 'BCA Graduate (9.44 CGPA)',
            institution: 'Govt Science College, Mysore University',
            year: '2022-2025'
        },
        {
            title: 'PUC (89%)',
            institution: 'Govt Girls College, Karnataka Board',
            year: '2020-2022'
        },
        {
            title: 'SSLC (69%)',
            institution: 'Govt Girls School, Karnataka Board',
            year: '2020'
        }
    ];
    
    const educationTimeline = document.getElementById('education-timeline');
    
    educationData.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <h3>${edu.title}</h3>
            <p>${edu.institution}</p>
            <p class="duration">${edu.year}</p>
        `;
        
        educationTimeline.appendChild(item);
    });

    // Populate experience
    const experienceData = [
        {
            title: 'Python Intern',
            company: 'Rankbook',
            duration: '2023',
            points: [
                'Strengthened coding and problem-solving abilities',
                'Worked on real-time Python projects focusing on data handling'
            ]
        },
        {
            title: 'Manufacturing and Dispatch',
            company: 'Nandha Pipe Pvt. Ltd.',
            duration: '2023',
            points: [
                'Learned about real-time workflow and team coordination'
            ]
        },
        {
            title: 'Academic Counselor',
            company: 'Self-employed',
            duration: '2022-2023',
            points: [
                'Counseled students on academic programs',
                'Handled outbound calls to promote courses'
            ]
        }
    ];
    
    const experienceContainer = document.getElementById('experience-container');
    
    experienceData.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        
        let pointsHTML = '';
        exp.points.forEach(point => {
            pointsHTML += `<li>${point}</li>`;
        });
        
        item.innerHTML = `
            <h3>${exp.title} at ${exp.company}</h3>
            <p class="duration">${exp.duration}</p>
            <ul>${pointsHTML}</ul>
        `;
        
        experienceContainer.appendChild(item);
    });

    // Project details
    const projectDetails = document.querySelector('.project-details');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    
    const projectPoints = [
        'Developed a web application using Flask and Python for 3D molecular visualization',
        'Integrated 3Dmol.js for real-time rendering of drug structures',
        'Predicted potential side effects of drugs based on molecular interactions',
        'Designed modules for structure analysis and drug interaction analysis'
    ];
    
    let pointsHTML = '<ul>';
    projectPoints.forEach(point => {
        pointsHTML += `<li>${point}</li>`;
    });
    pointsHTML += '</ul>';
    
    projectDetails.innerHTML = pointsHTML;
    
    viewMoreBtn.addEventListener('click', () => {
        alert('Drug Analysis Project:\n\n' + projectPoints.join('\n• '));
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const message = this.elements[2].value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
});