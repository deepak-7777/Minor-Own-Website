function openSkill(type) {
    const title = document.getElementById("popupTitle");
    const list = document.getElementById("popupList");

    const skills = {
        programming: {
            title: "Programming Skills",
            items: [
                "Java (OOP, Core)",
                "Kotlin",
                "Python",
                "C Language",
                "JavaScript"
            ]
        },
        web: {
            title: "Web Development",
            items: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Responsive Design",
                "Basic UI/UX"
            ]
        },
        android: {
            title: "Android Development",
            items: [
                "Java & Kotlin",
                "Android Studio",
                "XML Layouts",
                "Firebase Integration",
                "App Lifecycle"
            ]
        },
        database: {
            title: "Database & Backend",
            items: [
                "SQLite",
                "MySQL",
                "Firebase Realtime DB",
                "Firebase Auth",
                "Spring Boot (Learning)"
            ]
        },
        dsa: {
            title: "DSA & Problem Solving",
            items: [
                "Arrays",
                "Linked List",
                "Stack & Queue",
                "Basic Algorithms",
                "Logical Thinking"
            ]
        },
        tools: {
            title: "Tools",
            items: [
                "Git & GitHub",
                "VS Code",
                "Android Studio",
                "Chrome DevTools"
            ]
        }
    };

    title.innerText = skills[type].title;
    list.innerHTML = "";

    skills[type].items.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    document.getElementById("skillPopup").style.display = "flex";
}

function closeSkill() {
    document.getElementById("skillPopup").style.display = "none";
}



// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyANVSx0LJjmckFtI1YwCmCbV9SIIsKhWnQ",
  authDomain: "own-website-9b99d.firebaseapp.com",
  projectId: "own-website-9b99d",
  storageBucket: "own-website-9b99d.appspot.com",
  messagingSenderId: "601444407040",
  appId: "1:601444407040:web:6330fdd81cccbcc4a885e5"
};

// 🔹 Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 🔹 Firestore reference
const db = firebase.firestore();

// 🔹 Contact form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 reload stop

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    db.collection("contacts").add({
        name,
        email,
        phone,
        message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Message sent successfully 🚀");
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Error: " + error.message);
    });
});
