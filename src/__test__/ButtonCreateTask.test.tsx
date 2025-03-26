import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ButtonCreateTask } from "../app/ui/ButtonCreateTask";

test("affichage du lien et du texte createTask", () => {
  render(<ButtonCreateTask />);
  expect(
    screen.getByRole("link", { name: /ajouter une nouvelle tâche/i })
  ).toBeDefined();
  expect(screen.getByText(/Ajouter une nouvelle tâche/i)).toBeDefined();
});
