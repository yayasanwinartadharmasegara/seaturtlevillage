(() => {
  const config = window.SEA_TURTLE_CONFIG || {};
  const number = (config.whatsappNumber || "").replace(/\D/g, "");
  const configured = number.length >= 10 && !number.includes("XXXXXXXX");
  const waUrl = (message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const menu = document.querySelector(".main-nav");
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  document.getElementById("year").textContent = new Date().getFullYear();

  const contact = document.getElementById("contactButton");
  const contactText = document.getElementById("contactWhatsapp");
  if (configured) {
    contact.href = waUrl("Halo Sea Turtle Village, saya ingin mendapatkan informasi mengenai program konservasi.");
    contact.target = "_blank"; contact.rel = "noopener";
    contactText.textContent = "+" + number;
  } else {
    contact.addEventListener("click", e => { e.preventDefault(); alert("Nomor WhatsApp belum diatur. Silakan isi whatsappNumber di file config.js."); });
  }

  function handleForm(id, makeMessage) {
    const form = document.getElementById(id);
    form?.addEventListener("submit", e => {
      e.preventDefault();
      if (!configured) { alert("Formulir belum terhubung: atur nomor WhatsApp pada file config.js terlebih dahulu."); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      window.open(waUrl(makeMessage(data)), "_blank", "noopener");
    });
  }
  handleForm("adoptionForm", d =>
    `Halo Sea Turtle Village, saya ingin mendapatkan informasi program adopsi/konservasi penyu.\nNama: ${d.name}\nEmail: ${d.email}\nWhatsApp: ${d.phone}\nMinat: ${d.support}\nPesan: ${d.message || "-"}`
  );
  handleForm("donationForm", d =>
    `Halo, saya ingin bertanya mengenai dukungan/donasi untuk kegiatan konservasi Sea Turtle Village.\nNama: ${d.name}\nKontak: ${d.contact}\nJenis dukungan: ${d.type}\nPesan: ${d.message || "-"}`
  );
})();