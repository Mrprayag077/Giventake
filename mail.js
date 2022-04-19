// const firebaseConfig = {
//     //   copy your firebase config informations

//     apiKey: "AIzaSyA6EMj20K-1RRfnUpp-YZqMmaaqp_pRHCo",
//     authDomain: "swipe-d3097.firebaseapp.com",
//     databaseURL: "https://swipe-d3097-default-rtdb.firebaseio.com",
//     projectId: "swipe-d3097",
//     storageBucket: "swipe-d3097.appspot.com",
//     messagingSenderId: "787064454414",
//     appId: "1:787064454414:web:1fea024f06270c8d92ab5f",
//     measurementId: "G-FV6TTNF4WS"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDdRYz6gCSVqILZ2rAabe0gwfyHsSKaCZA",
    authDomain: "giventake-659fe.firebaseapp.com",
    projectId: "giventake-659fe",
    databaseURL: "https://giventake-659fe-default-rtdb.firebaseio.com",
    storageBucket: "giventake-659fe.appspot.com",
    messagingSenderId: "1074629974109",
    appId: "1:1074629974109:web:c48d2452350e2746c695b4"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var rent = getElementVal("rent");
    var price = getElementVal("price");
    var product = getElementVal("product");


    saveMessages(rent, price, product);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (rent, price, product) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        rent: rent,
        price: price,
        product: product,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};