const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>    
                                                <p>${user.bio ?? "Não possui bio"}</p>
                                                <ul>
                                                    <li>👥 Seguidores: ${user.followers}</li>
                                                    <li>👤 Seguindo: ${user.following}</li>
                                                </ul>
                                            </div>
                                        </div>  `

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                    <br><br>
                                                                    🍴${repo.forks_count} ⭐${repo.stargazers_count} 👀${repo.watchers_count} 👨‍💻${repo.language}
                                                                    </a>
                                                                    
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>  `
        }

        let eventItens = ""

        user.events.forEach((event) => {
            if (event.type === "PushEvent") {
                eventItens += `<li>${event.repo.name} - <span>${event.payload.commits[0].message}</span></li>`
            } else if (event.type === 'CreateEvent') {
                eventItens += `<li>${event.repo.name} - <span>O usuário criou um repositório</span></li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += ` <div class='events section'>
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`;
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}


export { screen }