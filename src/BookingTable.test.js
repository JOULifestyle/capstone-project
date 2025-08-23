import { render, screen, fireEvent, within } from "@testing-library/react";
import BookingTable from "./Pages/BookingTable";

test("renders bookings list", () => {
  // Mock localStorage
  const mockBookings = [
    { date: "2025-08-24", time: "17:00", guests: 2, name: "John", email: "john@example.com", occasion: "birthday", note: "test note" }
  ];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockBookings));

  render(<BookingTable />);

  // Scope search to the table to avoid mobile duplicate
  const table = screen.getByRole("table");
  expect(within(table).getByText("2025-08-24")).toBeInTheDocument();
  expect(within(table).getByText("John")).toBeInTheDocument();
});

test("triggers edit warning when edit button is clicked", () => {
  window.confirm = jest.fn(() => false); // simulate cancel

  // Mock localStorage
  const mockBookings = [
    { date: "2025-08-24", time: "17:00", guests: 2, name: "John", email: "john@example.com", occasion: "birthday", note: "test note" }
  ];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockBookings));

  render(<BookingTable />);

  // Get the first edit button
  const editButtons = screen.getAllByText(/edit booking/i);
  fireEvent.click(editButtons[0]);

  expect(window.confirm).toHaveBeenCalled();
});
