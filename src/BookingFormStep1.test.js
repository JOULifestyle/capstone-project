import { render, screen, fireEvent } from "@testing-library/react";
import BookingFormStep1 from "./component/BookingFormStep1";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { bookingIndex: null, bookingData: null }
  }),
  useNavigate: () => jest.fn(),
}));

test("renders step 1 form fields", () => {
  render(<BookingFormStep1 formData={{}} setFormData={() => {}} nextStep={() => {}} />);

  // Updated label texts
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});

test("allows user to input reservation date", () => {
  const mockSetFormData = jest.fn();
  render(<BookingFormStep1 formData={{}} setFormData={mockSetFormData} nextStep={() => {}} />);

  // Updated label
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-08-24" } });

  expect(mockSetFormData).toHaveBeenCalled();
});
