

loadMain = () => {
    let html = `
    <table width="100%" border="1">
        <tr>
            <td colspan="2" id="headerContainer" align="right">HEADER</td>
        </tr>
        <tr>
            <td id="menuContainer">MENU</td>
            <td id="mainContainer"></td>
        </tr>
    </table>
    `
    //<script src="auth-com-js.js"><\/script>

    let container = document.getElementById("container");

    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = html;

    let mainContainer = document.getElementById("mainContainer")
    mainContainer.appendChild(container)
}

loadHeader = () => {
    let html = ''

    if (localStorage.getItem("token")) {
        html = `
            <div>
                User: nome <button onclick="logout()">Logout</button>
            </div>
        `
    } else {
        html = `
            <div>
                User: <input type="text" name="user" id="inputUser"> 
                Password : <input type="text" name="password" id="inputPassword"> 
                <button onclick="login()">Login</button>
            </div>
        `
    }

    let headerContainer = document.getElementById("headerContainer")
    headerContainer.innerHTML = html
}

login = () => {
    let inputUser = document.getElementById("inputUser")
    let inputPassword = document.getElementById("inputPassword")

    localStorage.setItem("token", inputUser.value + "." + inputPassword.value)

    loadHeader()
}

logout = () => {
    localStorage.removeItem("token")

    loadHeader()
}

loadMain()
loadHeader()