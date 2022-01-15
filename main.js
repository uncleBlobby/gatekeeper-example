let agreeButton = document.getElementById("agreeButton")
let disagreeButton = document.getElementById("disagreeButton")

let mainContent = document.getElementById("main")
let gateKeeperModal = document.getElementById("gateKeeper")


agreeButton.addEventListener("click", function(){
    console.log(`clicked agree button`)
    mainContent.style.visibility = "visible"
    gateKeeperModal.style.visibility = "hidden"

})


disagreeButton.addEventListener("click", function(){
    console.log(`clicked disagree button`)
    window.location.replace("http://www.google.com")
})