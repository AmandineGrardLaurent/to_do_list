import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormCreateTask } from "@/app/create/ui/FormCreateTask";
import { describe, expect, it, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { addTask } from "@/actions/task";

vi.mock("@/data/taskActions", () => ({
  addTask: vi.fn(),
}));

describe("FormCreateTask", () => {
  it("Vérification des éléments du formulaire", () => {
    render(<FormCreateTask />);
    expect(
      screen.getByLabelText("Description de la tâche")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("A réaliser pour le :")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Enregistrer" })
    ).toBeInTheDocument();
    expect(screen.getByText("Annuler")).toBeInTheDocument();
  });
  it("Envoi avec un texte valide", async () => {
    render(<FormCreateTask />);
    await userEvent.type(
      screen.getByPlaceholderText("Tâche à réaliser"),
      "faire les courses"
    );
    await userEvent.type(
      screen.getByLabelText("A réaliser pour le :"),
      "2025-03-15"
    );
    await userEvent.click(screen.getByRole("button", { name: "Enregistrer" }));
    await waitFor(() => {
      expect(addTask).toHaveBeenCalled();
    });
  });

  it("Vérification que les champs sont remplis", async () => {
    render(<FormCreateTask />);
    const labelInput = screen.getByLabelText(/Description de la tâche/i);
    await userEvent.type(labelInput, "Faire du ménage");
    await waitFor(() => {
      expect(labelInput).toHaveProperty("value", "Faire du ménage");
    });
    const dateInput = screen.getByLabelText(/A réaliser pour le :/i);
    await userEvent.type(dateInput, "2025-03-10");
    await waitFor(() => {
      expect(dateInput).toHaveProperty("value", "2025-03-10");
    });
  });

  it("vérification de l'appel de addTask", async () => {
    render(<FormCreateTask />);
    await userEvent.click(screen.getByText("Enregistrer"));
    await waitFor(() => {
      expect(addTask);
    });
  });
});
