export async function submitLead(event) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const form = new FormData(formElement);
  const button = formElement.querySelector('button[type="submit"]');
  const originalButtonContent = button?.innerHTML || "Submit";

  if (button) {
    button.disabled = true;
    button.textContent = "Sending...";
  }

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(form.get("name") || "").trim(),
        contact: String(form.get("contact") || "").trim(),
        service: String(form.get("service") || "").trim(),
        message: String(form.get("message") || "").trim(),
        pageUrl: window.location.href,
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || "I couldn't send your request. Please try again.");
    }

    formElement.reset();
    if (button) button.textContent = "Request sent!";
    window.setTimeout(() => {
      if (button) button.innerHTML = originalButtonContent;
    }, 2500);
  } catch (error) {
    if (button) button.innerHTML = originalButtonContent;
    window.alert(error.message || "I couldn't send your request. Please call (206) 670-3045.");
  } finally {
    if (button) button.disabled = false;
  }
}
