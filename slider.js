{
    const sliders = document.querySelectorAll(".slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    const interval = 2800;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    const animDuration = 600;
  
    for (let i = 0; i < sliders.length; ++i) {
      const slider = sliders[i];
      const dots = slider.querySelector(".dots");
      const sliderImgs = slider.querySelectorAll(".img");
  
      let currImg = 0;
      let prevImg = sliderImgs.length - 1;
      let intrvl;
      let timeout;
  
      // Creates dots and add listeners to them
      for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
      }
  
      const allDots = dots.querySelectorAll(".dot");
      allDots[0].classList.add("active-dot");
  
      sliderImgs[0].style.left = "0";
      timeout = setTimeout(() => {
        animateSlider();
        sliderImgs[0].style.left = "";
        intrvl = setInterval(animateSlider, interval);
      }, interval - animDuration);   
  
      /**
       * Animates images
       * @param {number} [nextImg] - index of next image to show
       * @param {boolean} [right = false] - animate to right
       */
      function animateSlider(nextImg, right) {
        if (!nextImg)
          nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;
  
        --nextImg;
        sliderImgs[prevImg].style.animationName = "";
  
        if (!right) {
          sliderImgs[nextImg].style.animationName = "leftNext";
          sliderImgs[currImg].style.animationName = "leftCurr";
        } 
        else {
          sliderImgs[nextImg].style.animationName = "rightNext";
          sliderImgs[currImg].style.animationName = "rightCurr";
        }
  
        prevImg = currImg;
        currImg = nextImg;
  
        currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
      }
  
      /**
       * Decides if animate to left or right and highlights clicked dot
       * @param {number} num - index of clicked dot
       */
      function dotClick(num) {
        if (num == currImg)
          return false;
  
        clearTimeout(timeout);
        clearInterval(intrvl);
  
        if (num > currImg)
          animateSlider(num + 1);
        else
          animateSlider(num + 1, true);
  
        intrvl = setInterval(animateSlider, interval);
      }
    }

    $("#burger-menu").on("click", function(){
      $("#menu").toggleClass("open-menu");
     
    })
  
    $("#burger-menu1").on("click", function(){
      $("#menu1").toggleClass("open-menu");
    })
  
    $("#burger-menu2").on("click", function(){
      $("#menu2").toggleClass("open-menu");
    })
  
    $("#burger-menu11").on("click", function(){
      $("#shoes-drop").toggleClass("open-menu");
    })
  
    $("#burger-menu12").on("click", function(){
      $("#shoes-menu").toggleClass("open-menu");
    })

    $("#burger-menu13").on("click", function(){
      $("#size-menu").toggleClass("open-menu");
    })
  
    $("#sortpopup").on("click", function(){
      var element = document.getElementById("menu2");
      element.classList.remove("open-menu")
    })
    $("#sortpopup1").on("click", function(){
      var element = document.getElementById("sort-menu");
      element.classList.remove("open-menu")
    })
    $("#cancle1").on("click", function(){
      var element = document.getElementById("menu2");
      element.classList.remove("open-menu")
    })
    $("#cancle2").on("click", function(){
      var element = document.getElementById("sort-menu");
      element.classList.remove("open-menu")
    })
  
    $("#ghost").on("click", function(){
      $("#login-menu").toggleClass("open-menu");
    })

    $("#cart").on("click", function(){
      $("#cart-menu").toggleClass("open-menu");
    })
    $("#cart5").on("click", function(){
      $("#cart-menu5").toggleClass("open-menu");
    })
  
    $("#burger-menu14").on("click", function(){
      $("#size-menu3").toggleClass("open-menu");
    })
  
    $("#burger-menu15").on("click", function(){
      $("#range-menu").toggleClass("open-menu");
    })

    $("#burger-menu16").on("click", function(){
      $("#shoes-menu1").toggleClass("open-menu");
    })
    $("#sort").on("click", function(){
      $("#sort-menu").toggleClass("open-menu");
    })

    

  
    function deleteItem(name) {
      document.getElementById(name).remove();
    } 
  
    var header = document.getElementsByClassName("size-div");
    var btns = header.getElementsByClassName("h-size");
    console.log(btns);
    alert("1  ");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",function setColor(btn, color)  {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active"; 
      });
    }

  }

 

  
