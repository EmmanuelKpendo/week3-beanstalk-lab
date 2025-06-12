document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("fetchBtn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        fetch("/random")
            .then((res) => res.json())
            .then((data) => {
                output.textContent = data.footballer;
            })
            .catch((err) => {
                output.textContent = "Error fetching footballer!";
                console.error(err);
            });
    });
});
