
// Function to replace name
function replaceName () {
    let name = prompt("Please enter your name","");
    alert("Thank you (" + name + ") for visiting my website!");
    document.getElementById("name").innerHTML = name;
}

replaceName();

// change name button
document.getElementById("change-name").addEventListener("click", replaceName);


let bannerIndex = 0;
 showBanner();

// function to show next banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}
// function to show banner
function showBanner() {
    // get all banner element
    const banners = document.getElementsByClassName ('banner-img');
    console.log(banners);

    // Check if banner index is greater than the number of banners
    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
