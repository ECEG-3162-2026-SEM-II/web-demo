document.addEventListener('DOMContentLoaded', () => {
    
    // --- LOGIC FOR LOGIN PAGE ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop form from submitting to a server
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById('errorMessage');

            // Simple validation simulation
            if (email && password.length >= 6) {
                // Simulate API call delay
                const btn = loginForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = "Signing in...";
                btn.disabled = true;

                setTimeout(() => {
                    // Save user session (optional, for realism)
                    localStorage.setItem('userEmail', email);
                    // Redirect to dashboard
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                errorMsg.innerText = "Password must be at least 6 characters.";
            }
        });
    }

    // --- LOGIC FOR DASHBOARD PAGE ---
    const logoutBtn = document.getElementById('logoutBtn');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectsGrid = document.getElementById('projectsGrid');
    const newProjectInput = document.getElementById('newProjectTitle');
    const greetingElement = document.getElementById('greeting');

    if (logoutBtn) {
        // 1. Handle Logout
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            window.location.href = 'index.html';
        });

        // 2. Personalize Greeting
        const userEmail = localStorage.getItem('userEmail') || "Guest";
        if(greetingElement) {
            greetingElement.innerText = `Hello, ${userEmail.split('@')[0]}!`;
        }

        // 3. Add New Project Dynamically
        addProjectBtn.addEventListener('click', () => {
            const title = newProjectInput.value.trim();
            
            if (title) {
                createProjectCard(title);
                newProjectInput.value = ''; // Clear input
            } else {
                alert("Please enter a project name!");
            }
        });

        // Helper function to create HTML elements
        function createProjectCard(title) {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Random gradient color for variety
            const colors = ['color-1', 'color-2', 'color-3'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            card.innerHTML = `
                <div class="card-header ${randomColor}"></div>
                <div class="card-body">
                    <h3>${title}</h3>
                    <p>Newly added project description.</p>
                    <button class="btn-text">View Details →</button>
                </div>
            `;
            
            // Add animation effect
            card.style.opacity = '0';
            projectsGrid.prepend(card); // Add to top of grid
            
            // Fade in
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s';
                card.style.opacity = '1';
            }, 10);
        }
    }
});