import { fireEvent, render, screen } from "@testing-library/react";
import Search from ".";

test("Render default value", async () => {
  const onchange = jest.fn();
  render(<Search value="Nature" type="search" onChange={onchange} />);

  const searchInput: HTMLInputElement = await screen.findByDisplayValue(
    "Nature"
  );

  expect(searchInput?.value).toBe("Nature");
});

test("Render value on change", () => {
  const onchange = jest.fn();
  render(<Search type="search" onChange={onchange} />);

  const searchInput: HTMLInputElement = screen.getByPlaceholderText(
    "Search with keyword"
  );

  fireEvent.change(searchInput, { target: { value: "Animal" } });

  expect(searchInput?.value).toBe("Animal");
});
