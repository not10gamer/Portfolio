// ===================================================
// links.js
// ===================================================
//
// Purpose: Central repository for all external links in the portfolio.
// Edit the URLs here to update them across the entire website.
//

const portfolioLinks = {
    // URL for your downloadable resume PDF.
    resume: '#', // Example: '/assets/ethan_peter_resume.pdf'

    // URLs for your social media profiles.
    social: {
        github: '#',   // Example: 'https://github.com/your-username'
        linkedin: '#', // Example: 'https://www.linkedin.com/in/your-username'
        twitter: '#'   // Example: 'https://twitter.com/your-username'
    },

    // URLs for each project.
    // The key (e.g., "jarvis") must match the `data-project-name` attribute in the HTML.
    projects: {
        jarvis: {
            site: '#',   // Live site URL for J.A.R.V.I.S.
            github: '#'  // GitHub repository URL for J.A.R.V.I.S.
        },
        'emotion-teacher': {
            site: '#',   // Live site URL for Emotion-Adaptive Teacher
            github: '#'  // GitHub repository URL for Emotion-Adaptive Teacher
        },
        'offense-meter': {
            site: '#',   // Live site URL for Offense Meter
            github: '#'  // GitHub repository URL for Offense Meter
        }
    }
};