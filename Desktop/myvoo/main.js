function toggleText() {
    var text = document.getElementById("change");
    var text2 = document.getElementById("change2")
    if (text.innerHTML === "Got an Epiphanay? Whether it's journaling or curating special<br> memories. Keep it safe and private with our 'self' feature. For<br> your eyes only!" && text2.innerHTML === "Self mode") {
        text.innerHTML = "Keep friends and family in sync with your current happenings<br> - adventures, new skill, new venture, trials, tribulations, <br>successes."
        text2.innerHTML = "Friends and family"
    } else {
        text.innerHTML = "Got an Epiphanay? Whether it's journaling or curating special<br> memories. Keep it safe and private with our 'self' feature. For<br> your eyes only!";
        text2.innerHTML = "Self mode";
    }
};

function displayInput() {
    var handle = document.getElementById("handle");
    var twitterInput = document.getElementById("twitter-input");
    var instagramInput = document.getElementById("instagram-input");
    var whatsappInput = document.getElementById("whatsapp-input");

    if (handle.value == "twitter") {
        twitterInput.style.display = "block";
        instagramInput.style.display = "none";
        whatsappInput.style.display = "none";
    } else if (handle.value == "instagram") {
        instagramInput.style.display = "block";
        whatsappInput.style.display = "none";
        twitterInput.style.display = "none";
    } else if (handle.value == "whatsapp") {
        whatsappInput.style.display = "block";
        twitterInput.style.display = "none";
        instagramInput.style.display = "none";
    } else {
        whatsappInput.style.display = "none";
        twitterInput.style.display = "none";
        instagramInput.style.display = "none";
    }
};

/**const copyEmail = document.getElementById("copyEmail");
copyEmail.addEventListener("click", function () {
    const email = document.getElementById("getEmail").value;
    if (email.trim() !== "") {
        const encodedEmail = encodeURIComponent(email);
        window.location.href = `access.html?email={${encodedEmail}`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
        const decodedEmail = decodeURIComponent(email);
        document.getElementById("acceptEmail").value = decodedEmail;
    }
}) **/

//changeIcon = (icon) => icon.classList.toggle("fa-times");

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const navLinks = document.querySelector(".dropdown-menu");
const navLink2 = document.querySelector(".dropdown-menu.open");
const content = document.querySelector(".drop");
const header = document.querySelector(".header")

toggleBtn.onclick = function () {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open')
    toggleBtnIcon.classList = isOpen
        ? 'fa fa-times'
        : 'fa fa-bars';
    if (isOpen == true) {
        content.style.marginTop = '200px';
        header.style.height = "auto"
    } else {
        content.style.marginTop = '60px';
        header.style.height = "auto"
    }
};




