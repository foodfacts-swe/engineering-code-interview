"use server";
import { unM49 } from "un-m49";
import { database } from "./database";

export async function calculate(previousState: any, data: FormData) {
  const ingredient = data.get("ingredient");
  const origin = data.get("origin");

  console.log(
    "Server action executed for ingredient ID",
    ingredient,
    "and origin",
    origin,
  );

  // just a dummy value for now
  return 15;
}
