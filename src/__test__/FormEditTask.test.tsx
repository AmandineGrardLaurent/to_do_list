import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { FormEditTask } from "../app/[id]/edit/ui/FormEditTask";
import { editTask } from "@/actions/task";

const mockTask = [
  {
    id: 1,
    label: "éplucher les bananes",
    date: null,
    status: "à faire",
  },
];

vi.mock("@/data/taskActions", () => ({
  editTask: vi.fn(),
}));

describe("FormEditTask", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("Vérification des éléments du formulaire", () => {
    render(<FormEditTask task={mockTask} />);
    expect(
      screen.getByLabelText("Description de la tâche")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Date max pour réaliser la tâche")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("à faire")).toBeInTheDocument();
    expect(screen.getByLabelText("fait")).toBeInTheDocument();
    expect(screen.getByText("Annuler")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("verification des valeurs des input", async () => {
    render(<FormEditTask task={mockTask} />);
    await userEvent.type(
      screen.getByLabelText("Description de la tâche"),
      "éplucher les bananes"
    );
    await userEvent.type(screen.getByLabelText("à faire"), "à faire");
  });

  it("appel de editTask après l'envoi du formulaire", async () => {
    render(<FormEditTask task={mockTask} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(editTask).toBeCalled();
  });
});
