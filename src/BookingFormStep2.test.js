import { render, screen, fireEvent } from "@testing-library/react";
import BookingFormStep2 from "./component/BookingFormStep2";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { bookingIndex: null, bookingData: null }
  }),
  useNavigate: () => jest.fn(),
}));

test("renders step 2 form fields", () => {
  render(<BookingFormStep2 formData={{}} setFormData={() => {}} prevStep={() => {}} handleSubmit={() => {}} />);

  // Updated label texts
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("allows user to input name", () => {
  const mockSetFormData = jest.fn();
  render(<BookingFormStep2 formData={{}} setFormData={mockSetFormData} prevStep={() => {}} handleSubmit={() => {}} />);

  // Updated label
  const nameInput = screen.getByLabelText(/full name/i);
  fireEvent.change(nameInput, { target: { value: "John" } });

  expect(mockSetFormData).toHaveBeenCalled();
});
