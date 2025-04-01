
    imagePaths.forEach(path => {
        let img = document.createElement("img");
        img.src = path;
        img.alt = "Зображення галереї";
        gallery.appendChild(img);
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Дякуємо за ваше повідомлення! Ми з вами зв'яжемося.");
        form.reset();
    });
