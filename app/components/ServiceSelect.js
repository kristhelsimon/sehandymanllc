import { serviceOptions } from "../lib/serviceCategories";

// Shared estimate-form field, so every page asks the same question with the
// same options and posts the same field name.
export function ServiceSelect({ compact = false }) {
  return (
    <label className={compact ? undefined : "wide"}>
      <span className={compact ? "sr-only" : undefined}>Service</span>
      <select name="service" defaultValue="" required>
        <option value="" disabled>Select a service</option>
        {serviceOptions.map((service) => (
          <option key={service}>{service}</option>
        ))}
        <option>Not sure yet</option>
      </select>
    </label>
  );
}
