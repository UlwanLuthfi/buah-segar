document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;
  const totalSteps = 5;

  const steps = document.querySelectorAll(".form-step");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("multiStepForm");

  // STEP CONTENT & BUTTON
  function showStep(step) {
    steps.forEach((el) => {
      el.classList.toggle("hidden", Number(el.dataset.step) !== step);
    });

    prevBtn.disabled = step === 1;

    nextBtn.classList.toggle("hidden", step === totalSteps);
    submitBtn.classList.toggle("hidden", step !== totalSteps);

    updateStepper(step);
    updateReview(step);
  }

  // STEPPER UI
  function updateStepper(step) {
    const circles = document.querySelectorAll("[data-step-circle]");
    const labels = document.querySelectorAll("[data-step-label]");

    circles.forEach((circle, index) => {
      const active = index + 1 <= step;

      circle.classList.toggle("bg-pink-400", active);
      circle.classList.toggle("text-white", active);
      circle.classList.toggle("bg-white", !active);
    });

    labels.forEach((label, index) => {
      label.classList.toggle("text-blue-400", index + 1 === step);
      label.classList.toggle("text-black/30", index + 1 !== step);
    });
  }

  // REVIEW STEP (STEP 5)
  function updateReview(step) {
    if (step !== totalSteps) return;

    const formData = new FormData(form);
    const reviewEl = document.getElementById("review");

    let html = "";

    for (const [key, value] of formData.entries()) {
      html += `
      <div class="flex justify-between border-b pb-2">
        <span class="font-medium capitalize">
          ${key.replaceAll("-", " ")}
        </span>
        <span class="text-slate-600 text-right">
          ${value || "-"}
        </span>
      </div>
    `;
    }

    reviewEl.innerHTML = html;
  }

  // NAVIGATION
  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  // SUBMIT
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form berhasil disubmit 🎉");
  });

  // LIMIT 5 CHECKBOX BUAH
  const maxSelect = 5;
  const checkboxes = document.querySelectorAll(".fruit-checkbox");

  function updateCheckboxState() {
    const checkedCount = document.querySelectorAll(
      ".fruit-checkbox:checked"
    ).length;

    checkboxes.forEach((cb) => {
      if (!cb.checked) {
        cb.disabled = checkedCount >= maxSelect;
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateCheckboxState);
  });

  // INIT
  showStep(currentStep);
});
