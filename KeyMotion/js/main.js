(function(){
    emailjs.init("_KLI8Dmr7vuhkOe8i");
})();

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".contact-form");
    const statusDiv = document.querySelector(".form-status");
    const button = form.querySelector("button");

    if(!form) return;

    form.addEventListener("submit", function (e){
        e.preventDefault();

        statusDiv.textContent = "Sending message...";
        statusDiv.className = "form-status";

        button.disabled = true;
        button.textContent = "Sending";
        
        emailjs
            .sendForm(
                "service_q6za6pw",
                "template_spkmi8c",
                form
            )
            .then(function(){
                statusDiv.textContent = "✅ Message sent successfully!";
                statusDiv.className = "form-status success";

                form.reset();
                button.disabled = false;
                button.textContent = "Send";

            })
                .catch(
                    function(error) {
                        statusDiv.textContent = "❌ Failed to send message. Try again.";
                        statusDiv.className = "form-status error";

                        button.disabled = false;
                        button.textContent = "Send";

                        console.error(error);
                    });
        });
});

document.addEventListener("DOMContentLoaded", function(){

    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function(){
        if(window.scrollY > 300){
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
})