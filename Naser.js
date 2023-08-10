//  ends

const apple = document.querySelector(".apple");
const button = document.querySelector(".button");
const buttonsMain = document.querySelectorAll(".buttons");
const iphone14 = document.querySelector(".iphone-14");
const iphoneRoom = document.querySelectorAll(".iphone-room");

const iphone15 = document.querySelector(".iphone14-pluse"); 

const iphonePro = document.querySelector(".iphone14-pro")

const iphoneSe = document.querySelector(".iPhoneSE");
const footerImg = document.querySelector(".parent-of-imgbox");


//to be changes to all
const expandButtons = document.querySelectorAll(
  ".button-iphone14-plus-information"
);
const lists = document.querySelectorAll(".list");

apple.addEventListener("click", () => {
  console.log("clicked");
  button.classList.remove("hidden");
  apple.classList.add("hidden");
});

const actionButton = buttonsMain.forEach((el, index) => {
  const buttons = el;
  if (index === 0) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });

    for (let i = 0; i < iphoneRoom.length; i++) {
      iphoneRoom[i].addEventListener("click", () => {
        iphone14.classList.add("hidden");
        footerImg.classList.remove("hidden")
        expandButtons.forEach((expandButton) => {
          expandButton.classList.remove("hidden");
        });
      });
    }
  } else if (index === 1) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphone15.classList.remove("hidden");
    });
  }else if (index === 2) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("now");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
  }else if (index === 3) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
  } else if (index === 4) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphoneSe.classList.remove("hidden");
    });
  }else if (index === 5) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
  }else if (index === 6) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
  }else if (index === 7) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
  }else if (index === 8) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphonePro.classList.remove("hidden");
    });
  }else if (index === 9) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphoneSe.classList.remove("hidden");
    });
  }else if (index === 10) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
  }else if (index === 11) {
    //ihpne-14
    buttons.addEventListener("click", () => {
      console.log("wow");
      button.classList.add("hidden");
      iphone14.classList.remove("hidden");
    });
  }


});

//ends

expandButtons.forEach((button, index) => {
  let isOpen = false;
  console.log(expandButtons);

  button.addEventListener("click", function () {
    isOpen = !isOpen;

    lists[index].classList.toggle("expand");
    lists[index].style.maxHeight = isOpen
      ? lists[index].scrollHeight + "px"
      : "0";

    Array.from(lists[index].children).forEach((li, liIndex) => {
      li.style.opacity = isOpen ? "1" : "0";
    });
  });
});



apple.addEventListener("click", () => {
  console.log("clicked");

  loadingElement.classList.remove('hidden');

  loadingElement.addEventListener("animationend", function() {
    loadingElement.classList.add('hidden');
    apple.classList.remove('hidden');
  }, { once: true });

  setTimeout(function() {
    loadingElement.classList.add('hidden');
    apple.classList.remove('hidden');
  }, 3000);
});