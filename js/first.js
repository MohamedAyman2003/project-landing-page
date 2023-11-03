

if ( localStorage.getItem( "color-option" ) !== null ) {
    document.documentElement.style.setProperty( "--main-color", localStorage.getItem( "color-option" ) )
     document.querySelectorAll( ".settings-box li" ).forEach( el => {
            el.classList.remove( "active" )
         if ( el.dataset.color === localStorage.getItem( "color-option" ) ) {
              el.classList.add("active")
          }
         
        } )
}

// background options
let backgroundOptions = true

let backgroundInterval;
//  randomizeImgs()

// check if there is background item in local storage
let backgroundItem = localStorage.getItem( "backgroundOption" )
if ( backgroundItem !== null ) {
    if ( backgroundItem === "true" ) {
        backgroundOptions = true;
    } else {
        backgroundOptions = false;
    }
    document.querySelectorAll( ".random-background span" ).forEach( (ele) => {
        ele.classList.remove("active")
    } )
    if ( backgroundItem === "true" ) {
        document.querySelector(".random-background .yes").classList.add("active")
    } else {
        document.querySelector( ".random-background .no" ).classList.add( "active" )
         
    }
} 

// toggle rotation and open
document.querySelector( ".settings-box i" ).onclick = function () {
    this.classList.toggle( "fa-spin" )
    document.querySelector(".settings-box").classList.toggle("open")
}

// changing color of the main color
let colorList = document.querySelectorAll( ".colors-list li" )
colorList.forEach( li  => {
    li.addEventListener( "click", ( e ) => {
        document.documentElement.style.setProperty( "--main-color", e.target.dataset.color )
        localStorage.setItem( "color-option", e.target.dataset.color )
        e.target.parentElement.querySelectorAll( ".active" ).forEach( el => {
            el.classList.remove( "active" )
    
        } )
          e.target.classList.add("active")
    } )
    
} )
let backgroundEl = document.querySelectorAll( ".random-background span" )
backgroundEl.forEach( span => {
    span.addEventListener( "click", (e) => {
        // e.target.parentElement.querySelectorAll( ".active" ).forEach( (el) => {
        //   el.classList.remove("active")
        // } )
        // e.target.classList.add("active")
        handleActive(e)
  

if ( e.target.dataset.background === "yes" ) {
    backgroundOptions = true
    randomizeImgs()
      localStorage.setItem("backgroundOption",true)
} else {
    backgroundOptions = false;
    clearInterval( backgroundInterval )
    localStorage.setItem( "backgroundOption", false )
    
        }
          })
})
// sliding landing images 
let landing = document.querySelector( ".landing-page" )
let arrayImage =["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg"]
// sliding interval
function randomizeImgs() {
    if ( backgroundOptions === true ) {
        backgroundInterval = setInterval( () => {
            let randomNumber = Math.floor( Math.random() * arrayImage.length )
    
            landing.style.backgroundImage = `url(${ arrayImage[ randomNumber ] })`
        }, 1000 )
    }
}


// skills animation when scroll

let skills = document.querySelector( ".skills" )
let mySpan = document.querySelectorAll( ".skill-progress span" )
console.log()
window.onscroll = function () {
    if ( window.scrollY >= skills.offsetTop - 275) {
        mySpan.forEach( el => {
     el.style.width = `${el.dataset.progress}%`
 })
    }
}

// popup box of the gallery

let images = document.querySelectorAll( ".images-box img" )

images.forEach( img => {
    img.addEventListener( "click", () => {
        // overlay popup
        let popupOverlay = document.createElement( "div" );
        popupOverlay.className = "popup-overlay"
        document.body.appendChild( popupOverlay )
        
        // image popup

        let popupImgBox = document.createElement( "div" )
        popupImgBox.className = "image-popup"
        if ( img.alt !== null ) {
            let myHeading = document.createElement( "h2" )
            let myHeadingText = document.createTextNode( `${ img.alt }` )
            myHeading.className = "image-heading"
            myHeading.appendChild( myHeadingText )
            popupImgBox.appendChild(myHeading)
           }  
        let myImage = document.createElement( "img" )
        myImage.src = img.src
        console.log(myImage.src)
        popupImgBox.appendChild( myImage )
        document.body.appendChild(popupImgBox)
          
        // close btn
        let closeBtn = document.createElement( "span" )
        let closeBtnTxt = document.createTextNode( "X" )
        closeBtn.className = "close"
        closeBtn.appendChild( closeBtnTxt )
        popupImgBox.appendChild(closeBtn)
    })
})
document.addEventListener( "click", (e) => {
    if ( e.target.classList == "close" ) {
        document.querySelector( ".image-popup" ).remove()
        document.querySelector(".popup-overlay").remove()
    }
})

// // bullets section 
// let allBullets = document.querySelectorAll(".nav-bullets .bullets")

// allBullets.forEach( bullet => {
//     bullet.addEventListener( "click", ( e ) => {
//         document.querySelector( scrollTo(0, e.target.dataset.section)).scrollIntoView({
//             behavior: "smooth"
//     } );
//     })
// })


// bullets section 
let allLinks = document.querySelectorAll(".list a")

allLinks.forEach( link => {
    link.addEventListener( "click", ( e ) => {
        document.querySelector( e.target.dataset).scrollIntoView();
    })
})


function handleActive(ev) {
     ev.target.parentElement.querySelectorAll( ".active" ).forEach( (el) => {
          el.classList.remove("active")
        } )
        ev.target.classList.add("active")
  
}


// reset options button

document.querySelector( ".reset-options" ).onclick = function () {
    localStorage.removeItem("color-option")
    localStorage.removeItem( "backgroundOption" )
    window.location.reload()
}

// toggle-menu
 
let toggleList = document.querySelector(".toggle-menu")
let list = document.querySelector(".list")
let allLists = document.querySelector(".list li")
toggleList.onclick = function ( e ) {
    e.stopPropagation()
    this.classList.toggle( "menu-active" )
    list.classList.toggle("open")
}

document.addEventListener( "click", (e) => {
    if ( e.target !== toggleList && e.target !== list ) {
        if ( list.classList.contains( "open" ) ) {
          toggleList.classList.toggle( "menu-active" )
          list.classList.toggle("open")   
        }
 
    }
})
list.onclick = (e) => {
    e.stopPropagation()
}

let upBtn = document.querySelector( ".up-scroll" )

window.onscroll = () => {
    if ( window.scrollY >= 1000 ) {
        upBtn.classList.add("show")
    } else {
        upBtn.classList.remove("show")
    }
}


upBtn.onclick = function () {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
        
    })
}
