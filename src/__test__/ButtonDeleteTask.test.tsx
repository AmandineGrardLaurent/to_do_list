import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ButtonDeleteTask } from "../app/ui/ButtonDeleteTask";
import { deleteTask } from "@/actions/task";
import { beforeEach } from "vitest";

vi.mock("@/data/taskActions", () => ({
  deleteTask: vi.fn(),
}));

const mockId = 1;

describe("ButtonDeleteTask", () => {
  it("Envoi de l'instruction", async () => {
    render(<ButtonDeleteTask id={mockId} />);

    await userEvent.click(screen.getByTestId("delete-task-button"));
    await waitFor(() => {
      expect(deleteTask).toHaveBeenCalled();
    });
  });

  it("Vérification des éléments du composant", () => {
    render(<ButtonDeleteTask id={mockId} />);
    expect(screen.getByTestId("delete-task-button")).toBeInTheDocument();
  });
});
