const OrderFormDetails = () => {
  return (
    <div className="mt-8 border-t border-navy/10 pt-7">
      <h2 className="font-heading text-3xl"> Contact & Pickup</h2>
      <p className="mt-2 text-navy/65">
        {" "}
        Please provide your contact information and a preferred pickup time.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="text-sm font-bold"> Full Name </span>
          <input
            required
            type="text"
            name="fullName"
            autoComplete="name"
            className="form-input"
          />
        </label>

        <label>
          <span className="text-sm font-bold"> Email </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="form-input"
          />
        </label>

        <label>
          <span className="text-sm font-bold"> Phone </span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            className="form-input"
          />
        </label>

        <label>
          <span className="text-sm font-bold"> Preferred Pickup Date </span>
          <input
            required
            type="date"
            name="pickupDate"
            autoComplete="off"
            className="form-input"
          />
        </label>

        <label>
          <span className="text-sm font-bold"> Preferred Pickup Time </span>
          <input
            required
            type="time"
            name="pickupTime"
            autoComplete="off"
            className="form-input"
          />
        </label>

        <label className="sm:col-span-2">
          <span className="text-sm font-bold"> Order Notes </span>
          <textarea
            name="order-notes"
            rows={4}
            placeholder="Any special requests or instructions (i.e. allergies, dietary restrictions, pickup notes, etc.)?"
            className="form-input resize-y"
          />
        </label>
      </div>
    </div>
  );
};

export default OrderFormDetails;
