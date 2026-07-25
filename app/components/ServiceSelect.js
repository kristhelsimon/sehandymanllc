import { serviceOptions } from "../lib/serviceCategories";

// Shared estimate-form field, so every page asks the same question with the
// same options and posts the same field name.
export function ServiceSelect() {
  return (
    <label className="wide">
      <span>Which service do you need?</span>
      <select name="service" defaultValue="">
        <option value="">Select a service or choose “Not sure”</option>
        {serviceOptions.map((service) => (
          <option key={service}>{service}</option>
        ))}
        <option>Not sure yet</option>
      </select>
    </label>
  );
}
