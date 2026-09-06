import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stats from "../components/Stats";

describe("Stats", () => {
  test("renders title, value, and description", () => {
    render(
      <Stats title="Total Employees" value={25} description="All employees" />,
    );

    expect(screen.getByText("Total Employees")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("All employees")).toBeInTheDocument();
  });

  test("shows loading state", () => {
    render(
      <Stats
        title="Total Employees"
        value={25}
        description="All employees"
        loading={true}
      />,
    );

    expect(screen.queryByText("25")).not.toBeInTheDocument();
  });

  test("shows error state", () => {
    render(
      <Stats
        title="Total Employees"
        value={25}
        description="All employees"
        error="Failed to load"
      />,
    );

    expect(screen.getByText("Unable to load")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Try Again" }),
    ).toBeInTheDocument();
  });

  test("calls onRetry when Try Again is clicked", async () => {
    const onRetry = jest.fn();

    const user = userEvent.setup();

    render(
      <Stats
        title="Total Employees"
        value={25}
        error="Failed to load"
        onRetry={onRetry}
      />,
    );

    const retryButton = screen.getByRole("button", {
      name: "Try Again",
    });

    await user.click(retryButton);

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
