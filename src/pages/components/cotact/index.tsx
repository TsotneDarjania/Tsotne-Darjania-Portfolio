import style from "./style.module.css";

export default function Contact() {
  const formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  function submitForm() {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill out all fields");
      return;
    }

    fetch("/api/contactform/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("Form submitted successfully!");
        window.location.reload();
      } else {
        console.log(res);
      }
    });
  }

  return (
    <div id="contact" class={style.contact}>
      <div class={style.content}>
        {/* Form */}
        <div data-aos="fade-up" class={style.form}>
          <h2 class={style.formTitle + " custom-font-1"}>Contact Form</h2>
          <input
            onchange={(e) => (formData.name = e.target.value)}
            class={style.formInput + " custom-font-1"}
            type="text"
            placeholder="Your Name"
          />
          <input
            onchange={(e) => (formData.email = e.target.value)}
            class={style.formInput + " custom-font-1"}
            type="email"
            placeholder="Your Email"
          />
          <input
            onchange={(e) => (formData.subject = e.target.value)}
            class={style.formInput + " custom-font-1"}
            type="text"
            placeholder="Subject"
          />
          <textarea
            onchange={(e) => (formData.message = e.target.value)}
            class={style.formInput + " " + style.formTextArea}
            placeholder="Message"
          ></textarea>
          <button
            onclick={submitForm}
            class={style.formButton + " custom-font-1"}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
