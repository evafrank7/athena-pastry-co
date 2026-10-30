import { Link } from "react-router-dom";

type ConfirmationItem = {
  name: string;
  details?: string;
};

type OrderConfirmationProps = {
  customerName: string;
  email: string;
  phone?: string;
  items: ConfirmationItem[];
  pickupDate?: string;
  pickupTime?: string;
  notes?: string;
  estimatedTotal?: string;
  onStartOver?: () => void;
};

function displayDate(date?: string) {
  if (!date) return "To be confirmed";
  const parsed = new Date(`${date}T12:00:00`);
  return Number.isNaN(parsed.getTime())
    ? date
    : new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(parsed);
}

const OrderConfirmation = ({
  customerName,
  email,
  phone,
  items,
  pickupDate,
  pickupTime,
  notes,
  estimatedTotal,
  onStartOver,
}: OrderConfirmationProps) => {
  return (
    <main className="min-h-[70vh] bg-cream px-5 py-16 text-navy sm:px-10 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">
            Request Received
          </p>
          <h1 className="mt-3 font-heading text-5xl sm:text-6xl">
            Thank You, {customerName}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">
            We sent a copy to {email}. Athena Pastry Co. will follow up to
            confirm availability, final pricing, pickup, and payment.
          </p>
        </header>

        <section className="mt-10 border border-navy/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,53,88,0.08)] sm:p-9">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl">Requested Items</h2>
              <ul className="mt-4 divide-y divide-navy/10">
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="py-3">
                      <p className="font-bold">{item.name}</p>
                      {item.details && (
                        <p className="mt-1 text-sm text-navy/65">{item.details}</p>
                      )}
                    </li>
                  ))
                ) : (
                  <li className="py-3 text-navy/65">Custom request</li>
                )}
              </ul>
              {estimatedTotal && (
                <div className="mt-5 flex justify-between border-t border-navy/15 pt-4 text-lg font-bold">
                  <span>Estimated Total</span>
                  <span>{estimatedTotal}</span>
                </div>
              )}
            </div>

            <div>
              <h2 className="font-heading text-3xl">Contact & Pickup</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-navy/50">Email</dt>
                  <dd className="mt-1 break-words">{email}</dd>
                </div>
                {phone && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-navy/50">Phone</dt>
                    <dd className="mt-1">{phone}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-navy/50">Requested Pickup</dt>
                  <dd className="mt-1">{displayDate(pickupDate)}{pickupTime ? ` at ${pickupTime}` : ""}</dd>
                </div>
                {notes && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-navy/50">Notes</dt>
                    <dd className="mt-1 whitespace-pre-wrap text-navy/70">{notes}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-gold bg-cream px-5 py-4 text-sm leading-relaxed text-navy/75">
            This is a request receipt, not final order approval. No payment has
            been collected. Payment will be handled securely through Square
            after the order is reviewed.
          </div>
        </section>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/menu" className="bg-navy px-8 py-3 text-center text-cream hover:bg-navy-dark">
            Return to Menu
          </Link>
          {onStartOver && (
            <button type="button" onClick={onStartOver} className="border border-navy px-8 py-3 hover:bg-white">
              Start Another Request
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
