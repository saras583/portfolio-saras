function sendmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
}

const serviceID = "service_2vyu2sl";
const templateID = "template_keortzc";


emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
    })
    .catch(err => console.log(err));
    let section = document.querySelector("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            };
        });
    }