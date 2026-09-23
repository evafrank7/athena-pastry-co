import { useState, type FormEvent } from "react";
import { initialMenuItems } from "../data/menuItems";

const steps = ["Contact", "Treats", "Details", "Pickup"];

const CustomOrderPage = () => {
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleItem(id: string) {
    setSelectedItems((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < steps.length) {
      setStep((current) => current + 1);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main className="bg-cream px-6 py-24 text-center text-navy">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">Order Inquiry</p>
        <h1 className="mt-4 font-heading text-5xl">Thank You</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy/75">
          Your form is ready to connect to a submission service. No information has been sent yet.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setStep(1); }}
          className="mt-8 bg-navy px-8 py-3 text-cream hover:bg-navy-dark"
        >
          Start Over
        </button>
      </main>
    );
  }

  return (
    <main className="bg-cream px-6 py-16 text-navy sm:px-10">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">
            Let&apos;s make something sweet
          </p>
          <h1 className="mt-3 font-heading text-5xl sm:text-6xl">Start Your Custom Order</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-navy/75">
            Complete the form below and we&apos;ll personally follow up to confirm availability, pricing, and pickup details.
          </p>
        </header>

        <ol className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-2">
          {steps.map((label, index) => {
            const number = index + 1;
            const highlighted = number <= step;
            return (
              <li key={label} className="text-center">
                <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${highlighted ? "border-navy bg-navy text-cream" : "border-navy/25 bg-white text-navy/50"}`}>
                  {number.toString().padStart(2, "0")}
                </div>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.14em]">{label}</p>
              </li>
            );
          })}
        </ol>

        <form onSubmit={handleSubmit} className="mt-10 border border-navy/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,53,88,0.08)] sm:p-10">
          {step === 1 && (
            <section>
              <h2 className="font-heading text-3xl">Your Information</h2>
              <p className="mt-1 text-navy/65">Tell us how we can reach you.</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="text-sm font-bold">Full Name *</span>
                  <input required name="fullName" className="form-input" />
                </label>
                <label>
                  <span className="text-sm font-bold">Email *</span>
                  <input required type="email" name="email" className="form-input" />
                </label>
                <label>
                  <span className="text-sm font-bold">Phone *</span>
                  <input required type="tel" name="phone" className="form-input" />
                </label>
              </div>
              <fieldset className="mt-6">
                <legend className="text-sm font-bold">Preferred Contact Method *</legend>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["Text", "Email", "Phone Call"].map((method) => (
                    <label key={method} className="border border-navy/20 px-5 py-3">
                      <input required type="radio" name="contactMethod" value={method} className="mr-2" />
                      {method}
                    </label>
                  ))}
                </div>
              </fieldset>
            </section>
          )}

          {step === 2 && (
            <section>
              <h2 className="font-heading text-3xl">Choose Your Pastries</h2>
              <p className="mt-1 text-navy/65">Select everything you&apos;re interested in.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {initialMenuItems.map((item) => {
                  const selected = selectedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className={`overflow-hidden border text-left ${selected ? "border-blue bg-blue-light" : "border-navy/10 bg-cream-pale"}`}
                    >
                      <img src={item.image} alt="" className="h-28 w-full object-cover" />
                      <span className="block px-4 py-3 font-heading text-xl">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {step === 3 && (
            <section>
              <h2 className="font-heading text-3xl">Order Details</h2>
              <p className="mt-1 text-navy/65">Tell us how much you need and anything special we should know.</p>
              <div className="mt-7 space-y-4">
                {selectedItems.length === 0 ? (
                  <p className="border border-gold/40 bg-cream px-4 py-3">
                    No pastries selected. Go back to choose some, or describe your request below.
                  </p>
                ) : selectedItems.map((id) => {
                  const item = initialMenuItems.find((menuItem) => menuItem.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="grid items-end gap-4 border-b border-navy/10 pb-4 sm:grid-cols-2">
                      <div>
                        <p className="font-heading text-xl">{item.name}</p>
                        {item.flavorOptions && (
                          <select className="form-input" aria-label={`${item.name} flavor`}>
                            {item.flavorOptions.map((flavor) => <option key={flavor}>{flavor}</option>)}
                          </select>
                        )}
                      </div>
                      <label>
                        <span className="text-sm font-bold">Quantity requested</span>
                        <input name={`${id}Quantity`} placeholder={`Example: 2 ${item.unit}`} className="form-input" />
                      </label>
                    </div>
                  );
                })}
              </div>
              <label className="mt-6 block">
                <span className="text-sm font-bold">Additional Notes or Requests</span>
                <textarea name="notes" rows={5} placeholder="Allergies, packaging requests, event details, or other preferences" className="form-input resize-y" />
              </label>
            </section>
          )}

          {step === 4 && (
            <section>
              <h2 className="font-heading text-3xl">Pickup & Review</h2>
              <p className="mt-1 text-navy/65">When would you like your order?</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="text-sm font-bold">Preferred Pickup Date *</span>
                  <input required type="date" name="pickupDate" className="form-input" />
                </label>
                <label>
                  <span className="text-sm font-bold">Preferred Pickup Time *</span>
                  <input required type="time" name="pickupTime" className="form-input" />
                </label>
              </div>
              <div className="mt-7 border-l-4 border-blue bg-blue-light/60 p-5">
                <p className="font-bold">Please note</p>
                <p className="mt-1 leading-relaxed text-navy/75">
                  Submitting this form does not confirm your order. Athena Pastry Co. will follow up to confirm availability, pricing, pickup details, and payment.
                </p>
              </div>
              <div className="mt-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Your Order Inquiry</h3>
                <ul className="mt-3 space-y-1 text-navy/75">
                  {selectedItems.length > 0 ? selectedItems.map((id) => (
                    <li key={id}>{initialMenuItems.find((item) => item.id === id)?.name}</li>
                  )) : <li>Custom request</li>}
                </ul>
              </div>
            </section>
          )}

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-navy/10 pt-6">
            {step > 1 ? (
              <button type="button" onClick={() => setStep((current) => current - 1)} className="px-4 py-3 hover:underline">
                &larr; Back
              </button>
            ) : <span />}
            <button type="submit" className="bg-navy px-8 py-3 text-cream hover:bg-navy-dark">
              {step === steps.length ? "Send Order Inquiry" : "Continue →"}
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-sm text-navy/60">No payment is required at this time.</p>
      </div>
    </main>
  );
};

export default CustomOrderPage;
