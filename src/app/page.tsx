"use client";
import { unM49 } from "un-m49";
import { calculate } from "./action";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, formAction] = useFormState(calculate, null);

  return (
    <div className="w-96">
      <h1>Model your product here:</h1>
      <form action={formAction} className="flex gap-2 flex-col">
        <p>ingredient:</p>
        <select name="ingredient">
          <option value="">Select an ingredient</option>
          <option value="1">Beef</option>
          <option value="2">Potatoes</option>
        </select>
        <select name="origin">
          <option value="">Select an origin</option>
          {unM49.map((region) => (
            <option value={region.code} key={region.code}>
              {region.name}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-slate-400">
          Calculate
        </button>
      </form>

      <h1>calculation result:</h1>
      {state ?? "No result"}
    </div>
  );
}
