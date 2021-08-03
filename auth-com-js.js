let htmlMain = `
<table width="100%" border="1">
    <tr>
        <td colspan="2" id="headerContainer" align="right">HEADER</td>
    </tr>
    <tr>
        <td valign="top" align="center" id="menuContainer"></td>
        <td id="mainContainer"></td>
    </tr>
</table>
`
//<script src="auth-com-js.js"><\/script>

let htmlHeaderLogout = `
<div>
    User: nome <button onclick="logout()">Logout</button>
</div>
`

let htmlHeaderLogin = `
<div>
    User: <input type="text" name="user" id="inputUser"> 
    Password : <input type="text" name="password" id="inputPassword"> 
    <button onclick="login()">Login</button>
</div>
`

let htmlNotAllowed = `
<div align="center">
    <p>Not Allowed. Please, proceed to Login!!!</p>
</div>
`

loadMain = () => {

    let container = document.getElementById("container");

    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = htmlMain;

    let mainContainer = document.getElementById("mainContainer")

    if (isAuthenticated()) {
        loadMenu()
        mainContainer.appendChild(container)
    } else {
        mainContainer.innerHTML = htmlNotAllowed
    }
}

loadHeader = () => {
    let html = ''

    if (isAuthenticated()) {
        html = htmlHeaderLogout
    } else {
        html = htmlHeaderLogin
    }

    let headerContainer = document.getElementById("headerContainer")
    headerContainer.innerHTML = html
}

loadMenu = () => {
    let menuContainer = document.getElementById("menuContainer")
    menuContainer.setAttribute("width", "20%")
    menuContainer.innerHTML = "MENU"
}

login = () => {
    let inputUser = document.getElementById("inputUser")
    let inputPassword = document.getElementById("inputPassword")

    localStorage.setItem("token", inputUser.value + "." + inputPassword.value)

    document.location.reload();
}

logout = () => {
    localStorage.removeItem("token")

    document.location.reload();
}

isAuthenticated = () => {
    return (localStorage.getItem("token") && localStorage.getItem("token") !== 'undefined')
}

loadMain()
loadHeader()