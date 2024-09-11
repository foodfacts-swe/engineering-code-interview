# FoodFacts Engineering Code interview

## Context

- This is an standard Next.ja configured with Typescript and TailwindCSS.
- The app that let's users look up the CO2 emissions for a given ingredient and origin.
- The ingredient and origin combinations (the "database") is in the file `src/app/database.ts`
- A simple form is prepared and linked up with a React Server Action to calculate the CO2
  emissions and display the data in the UI

## General information

- Please "think aloud" as you work through the problem.
- Nothing in this codebase is set up to trick you. There are no hidden bugs that are meant to be fixed.

## Task 1:

- Implement a lookup mechanism in the app which selects the best possible origin for a selected ingredient
- Use the un-m49 database for this task (npm package already installed).
  See here: https://github.com/wooorm/un-m49/blob/main/index.js
- The countries and regions are organized in a hierarchy. Walk the tree up or down depending on the
  selection to find the closest match

**For example:**

1. Beef from Sweden: Direct match in the database. Return the CO2
2. Beef from Germany: No direct match. Germany is a child of "Western Europe" (code 155). France is also a child of 155. Return the value for France

## Task 2 (stretch goal if there's time)

- Discuss options to visualize the result (CO2 value)
- Impelement a rough version of the visualization
- Style and improve the look of the form
