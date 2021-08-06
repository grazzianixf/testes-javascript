let htmlMain = `
<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<div id="divMenu">

</div>

<header class=" w3-display-container w3-top w3-bar w3-theme">
  <button id="buttonOpenMenu" class="w3-bar-item w3-button w3-xxxlarge w3-hover-theme" onclick="w3_open()">&#9776;</button>
  <h1 class="w3-bar-item">My APP</h1>
  <div class="w3-container w3-display-right" id="headerContainer"></div>
</header>

<div class="w3-container" id="mainContainer" style="margin-top:90px">
</div>

</body>
</html> 
`
//<script src="auth-com-js.js"><\/script>

let htmlHeaderLogout = `
<div>
    <button class="w3-btn w3-xlarge" onclick="logout()">&#9940;</button>
</div>
`

let htmlEnterLogin = `

<div class="w3-card-4">
  <div class="w3-container w3-indigo w3-center">
    <h3>Login</h3>
  </div>
  <div class="w3-container">
    <p>      
    <label class="w3-text-indigo"><b>Username</b></label>
    <input class="w3-input w3-border w3-sand" name="user" id="inputUser" type="text"></p>
    <p>      
    <label class="w3-text-indigo"><b>Password</b></label>
    <input class="w3-input w3-border w3-sand" name="password" id="inputPassword" type="password"></p>
    <p>
        <div class="w3-center">
            <button class="w3-btn w3-indigo w3-center" onclick="login()">Login</button>
        </div>
    </p>
  </div>
</div>
`

let htmlMenu = `
<!-- Sidebar -->
<div class="w3-sidebar w3-bar-block" style="display:none;z-index:5" id="menu">
<button class="w3-bar-item w3-button w3-xxlarge" onclick="w3_close()">Close &times;</button>
<a href="#" class="w3-bar-item w3-button">Link 1</a>
<a href="#" class="w3-bar-item w3-button">Link 2</a>
<a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>
<div class="w3-overlay" onclick="w3_close()" style="cursor:pointer" id="overlay"></div>
`

loadMain = () => {

    let container = document.getElementById("container");

    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = htmlMain;

    let mainContainer = document.getElementById("mainContainer")

    let buttonOpenMenu = document.getElementById("buttonOpenMenu")

    if (isAuthenticated()) {
        loadMenu()
        mainContainer.appendChild(container)
        buttonOpenMenu.disabled = false
    } else {
        mainContainer.innerHTML = htmlEnterLogin
        buttonOpenMenu.disabled = true
    }
}

loadHeader = () => {
    let html = ''

    if (isAuthenticated()) {
        html = htmlHeaderLogout
    } 

    let headerContainer = document.getElementById("headerContainer")
    headerContainer.innerHTML = html
}

loadMenu = () => {
    let divMenu = document.getElementById("divMenu")
    divMenu.innerHTML = htmlMenu
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

function w3_open() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

loadMain()
loadHeader()