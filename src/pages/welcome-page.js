// const Workbench = require("./workbench-page");
import Workbench from "./workbench-page"

export default class Welcome {
    constructor(){
        this.welcomeStructure();
    }

    welcomeStructure(){
        let welcomePageFigure = document.createElement("figure")
        welcomePageFigure.id = 'welcome'
        document.body.appendChild(welcomePageFigure)
        let ul = document.createElement("ul")
        ul.id = "welcome-text-box"
        welcomePageFigure.appendChild(ul);
        let li1 = document.createElement("li");
            li1.className = "welcome-1";
            ul.appendChild(li1);
        let li2 = document.createElement("li");
            li2.className = "welcome-2";
            ul.appendChild(li2);
        let li3 = document.createElement("li");
            li3.className = "welcome-3";
            ul.appendChild(li3);
        let li4 = document.createElement("button");
            li4.className = "launch-button";
            //this should link us to generating the workbench page//
            ul.appendChild(li4)
        let li5 = document.createElement('div');
            li5.className = 'about-me';
            ul.appendChild(li5);
        let personalWeb = document.createElement( 'a');
            personalWeb.className = 'github';
            personalWeb.href = '';
            personalWeb.target = '_blank';
            personalWeb.innerHTML = 'About Me';
            li5.appendChild(personalWeb); 
        let github = document.createElement('a');
            github.className = 'github';
            github.href = 'https://github.com/nobleport/ElegantWeapon-CivilizedAge'
            github.target = '_blank'
            github.innerHTML = 'Github';
            li5.appendChild(github);
        let linkedIn = document.createElement('a');
            linkedIn.className = 'linked-in'
            linkedIn.href = 'https://www.linkedin.com/in/john-gardner-320b4a20b'
            linkedIn.innerHTML = 'LinkedIn';
            linkedIn.target='_blank'
            li5.appendChild(linkedIn);
        li4.addEventListener("click", () => {
            let soundEffect = new Audio("images/lightspeed.mp3");
            soundEffect.play()
            setTimeout(this.switchScreens.bind(this), 5500)
        });
        this.welcomeContent(li1, li2, li3, li4);
    }

    welcomeContent(li1, li2, li3, li4){
        li1.innerHTML = 'Welcome, Padawan'
        li2.innerHTML = 'These are your first steps... -Ben Kenobi'
        li3.innerHTML = 'Before you can be fully accepted into the Jedi Order, you must construct your first lightsaber prototype'
        li3.innerHTML += '. Think carefully about your design. Remember, there are consequences to every choice, and the choices '
        li3.innerHTML += 'you make now will help determine your focus as a Jedi.\
 Select a sleeve, then a crystal, then cap it off with an emitter. May the Force be with you.'
        li4.innerHTML = "Launch"
    }

    // addEventListener("click",)
    switchScreens(e) {
        let welcomeBox = document.getElementById('welcome');
        document.body.removeChild(welcomeBox)
        new Workbench();
        //this is where we are switching pages
    }
    
}

// module.exports = Welcome;


