const text = "Hi, I'm Aman Kumar Yadav.";
    const typingElement = document.getElementById("typing-name");

    let index = 0;
    let deleting = false;

    function typeEffect() {

        if (!deleting) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {
            typingElement.textContent = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                deleting = false;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
