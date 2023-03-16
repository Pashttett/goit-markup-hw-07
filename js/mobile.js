(() => {
  const refs = {
    openModalBtn: document.querySelector("[is-open]"),
    closeModalBtn: document.querySelector("[is-close]"),
    modal: document.querySelector("[backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
  }
})();