import { useState } from "react";

const FORM_ENDPOINT = "https://readdy.ai/api/form/dbc7gqlkptvhpsfmcekg";

type Status = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    icon: "ri-map-pin-2-line",
    label: "The field",
    value: "Medvednica Field, Zagreb, Croatia",
  },
  { icon: "ri-mail-line", label: "Email", value: "club@medvednica-baseball.hr" },
  { icon: "ri-phone-line", label: "Clubhouse", value: "+385 99 211 9524" },
  { icon: "ri-time-line", label: "Match days", value: "Saturdays · gates 12:30" },
];

const fieldClass =
  "box-border mt-2 min-h-[48px] w-full rounded-none border-0 border-b border-background-300 bg-transparent px-0 py-3 text-[16px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-500";

export default function ContactBlock() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = String(data.get("website_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      setErrorText("");
      form.reset();
      setMessage("");
      return;
    }

    setStatus("submitting");
    setErrorText("");

    const payload = new URLSearchParams();
    data.forEach((value, key) => {
      if (key === "website_alt") return;
      const text = String(value).trim();
      if (text !== "") payload.append(key, text);
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: any = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.meta?.detail || parsed?.message || "";
      const isSpam =
        typeof serverMessage === "string" &&
        serverMessage.toLowerCase().includes("spam");
      const isOk = response.ok && parsed?.code === "OK" && !isSpam;

      if (isOk) {
        setStatus("success");
        setErrorText("");
        form.reset();
        setMessage("");
      } else {
        setStatus("error");
        setErrorText(
          typeof serverMessage === "string" && serverMessage.length > 0
            ? serverMessage
            : "We could not send your message right now. Please try again in a moment."
        );
      }
    } catch {
      setStatus("error");
      setErrorText(
        "The connection dropped before we could send that. Check your network and try again."
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="grid grid-cols-1 overflow-hidden  border border-background-200 lg:grid-cols-12">
          <div className="relative lg:col-span-5 lg:border-r lg:border-background-200">
            <div className="grain-plate absolute inset-0" />
            <div className="relative p-6 md:p-9">
              <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-accent-500">
                <span className="inline-block h-px w-8 bg-primary-500" />
                Get in touch
              </p>
              <h2 className="font-heading mt-5 text-[32px] uppercase leading-[0.92] text-foreground-950 md:text-[42px]">
                Talk to
                <br />
                the club.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[17px] leading-[1.75] text-foreground-500">
                Want to try a training session, order merch in a size that is not
                listed, or put your company on the outfield fence? Send a note and
                a real person from the club will answer.
              </p>

              <div className="mt-8 space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center  border border-background-300 text-primary-500">
                      <i className={`${detail.icon} text-base`} />
                    </span>
                    <div>
                      <p className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-[16px] leading-snug text-foreground-800">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-background-200 pt-5">
                {["ri-instagram-line", "ri-facebook-circle-line", "ri-youtube-line"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center  border border-background-300 text-foreground-500 transition-colors hover:border-primary-500 hover:text-primary-500"
                      aria-label="Medvednica social profile"
                    >
                      <i className={`${icon} text-base`} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-background-200 bg-background-50 p-6 md:p-9 lg:col-span-7 lg:border-l lg:border-t-0">
            <h3 className="font-heading text-[24px] uppercase leading-none text-foreground-950">
              Send a message
            </h3>
            <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-foreground-500">
              Fields marked with an asterisk are required.
            </p>

            <form
              data-readdy-form
              id="medvednica-club-contact"
              onSubmit={handleSubmit}
              className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2"
            >
              <div className="min-w-0">
                <label
                  htmlFor="contact-name"
                  className="font-label block text-[11px] uppercase tracking-[0.18em] text-foreground-500"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-email"
                  className="font-label block text-[11px] uppercase tracking-[0.18em] text-foreground-500"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0 sm:col-span-2">
                <label
                  htmlFor="contact-topic"
                  className="font-label block text-[11px] uppercase tracking-[0.18em] text-foreground-500"
                >
                  I am writing about *
                </label>
                <select
                  id="contact-topic"
                  name="topic"
                  required
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option value="join-a-squad">Joining a squad</option>
                  <option value="academy">Academy for kids</option>
                  <option value="merch-order">Merch order or sizing</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="min-w-0 sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="font-label block text-[11px] uppercase tracking-[0.18em] text-foreground-500"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us what you need. Max 500 characters."
                  className={`${fieldClass} resize-none leading-relaxed`}
                />
                <p className="mt-1 text-right text-[12px] tabular-nums text-foreground-400">
                  {message.length}/500
                </p>
              </div>

              <input
                type="text"
                name="website_alt"
                className="honeypot-field"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
              />

              {status === "success" && (
                <div className="flex items-start gap-3 border border-background-300 bg-background-50 px-4 py-3 sm:col-span-2">
                  <i className="ri-checkbox-circle-line mt-0.5 text-base text-foreground-900" />
                  <p className="text-sm text-foreground-700">
                    Message sent. Someone from the club will get back to you
                    within a couple of days.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 border border-primary-500/30 bg-primary-50 px-4 py-3 sm:col-span-2">
                  <i className="ri-error-warning-line mt-0.5 text-base text-primary-500" />
                  <p className="text-sm text-foreground-700">{errorText}</p>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[38ch] text-[12px] leading-relaxed text-foreground-400">
                  We only use your details to answer this message.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-label flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap  bg-foreground-950 px-6 py-3.5 text-[13px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-foreground-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-sm" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <i className="ri-send-plane-line text-sm" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}