document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    // Extracts customize container.
    const customizeContainer = option.querySelector(".customize");
    // Extracts radio button inside option.
    const radioInput = option.querySelector("input[type='radio']");
    radioInput.addEventListener("change", () => {
      // Remove the 'highlighted' class from all options and add 'hidden' class on all the options.
      options.forEach((opt) => {
        opt.querySelector(".customize").classList.add("hidden");
        opt.classList.remove("highlighted");
      });

      // Add the 'highlighted' class and remove the 'hidden' class from the currently selected option.
      if (radioInput.checked) {
        customizeContainer.classList.remove("hidden");
        option.classList.add("highlighted");
      }
    });
  });
});
