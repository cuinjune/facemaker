window.onload = function () {
    const buttonsContainer = document.getElementById("buttons-container");
    function buttonsContainterTouched(e) {
        var id = e.target.id;
        if (!id) {
            return;
        }
        if (id.startsWith("button-")) {
            id = id.slice(7);
        }
        const type = id.slice(0, -1);
        if (type !== "head" && type !== "eyes" && type !== "nose" && type !== "mouth") {
            return;
        }
        // reset all images
        for (let i = 1; i <= 5; i++) {
            const image = document.getElementById(type + i);
            image.style.filter = "none";
            image.style.opacity = "0.5";

            // hide all images in face
            const face = document.getElementById("face-" + type + i);
            face.style.display = "none";
        }
        // highlight selected image
        const image = document.getElementById(id);
        image.style.filter = "invert(12%) sepia(83%) saturate(10841%) hue-rotate(244deg) brightness(300%) contrast(153%)";
        image.style.opacity = "1.0";

        // display the image in face
        const face = document.getElementById("face-" + id);
        face.style.display = "block";
    }

    buttonsContainer.addEventListener("touchstart", function (e) {
        buttonsContainterTouched(e);
    });

    buttonsContainer.addEventListener("touchmove", function (e) {
    });

    buttonsContainer.addEventListener("touchcancel", function (e) {
    });

    buttonsContainer.addEventListener("touchend", function (e) {
    });

    buttonsContainer.addEventListener("mousedown", function (e) {
        buttonsContainterTouched(e);
    });

    buttonsContainer.addEventListener("mousemove", function (e) {
    });

    buttonsContainer.addEventListener("mouseup", function (e) {
    });
}