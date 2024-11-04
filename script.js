async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Pooja2420/repos');
        const repos = await response.json();

        const projectList = document.getElementById('project-list');
        repos.forEach(repo => {
            const projectDiv = document.createElement('div');
            projectDiv.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || 'No description available'}</p>
                <p>Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
            `;
            projectList.appendChild(projectDiv);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

fetchGitHubRepos();
