function osmessage() {
    document.querySelector(".btn").style.display = "none";
    
    var osMap = { 'mac': 'macos', 'win': 'windows', 'linux': 'linux'};
    
    let platform = navigator.platform.toLowerCase();

    for(let key in osMap) {
        if (platform.includes(key)){
            document.querySelector("div[data-version="+ osMap[key] + "]").style.display = "block";
        }
    }
}

function start() {
    var rocket = document.querySelector("button");
    rocket.addEventListener("click", osmessage);
}
start();