const API_URL = 'https://react-app-backend.onrender.com'
// const API_URL = 'http://localhost:8080'

export async function getRules() {
    return (await fetch(`${API_URL}/rules`)).json()
}

export async function getRuleSection(section) {
    return (await fetch(`${API_URL}/rules/${section}`)).text()
}

export async function getExams() {
    return (await fetch(`${API_URL}/exams`, {
        credentials: "include"
    })).json()
}
export async function getExamSection(section) {
    return (await fetch(`${API_URL}/exams/${section}`, {
        credentials: "include"
    })).json()
}

export async function singin(email, password) {
    let result = await fetch(`${API_URL}/auth/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
        credentials: "include",
    })

    return result
}

export async function signup(email, username, password) {
    let result = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "password": password
        }),
        credentials: "include",
    })

    return result
}

export async function whoami() {
    return (await fetch(`${API_URL}/auth/whoami`, {
        credentials: "include"
    })).json()
}

export async function logout() {
    return (await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include"
    })).status
}

export async function scores() {

}