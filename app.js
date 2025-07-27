function copyText() {
  const text = document.getElementById("text");
  const msg = document.getElementById("msg");

  navigator.clipboard.writeText(text.value).then(() => {
    msg.classList.remove("hidden");
    setTimeout(() => {
      msg.classList.add("hidden");
    }, 2000);
  });
}
