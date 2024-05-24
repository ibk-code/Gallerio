import { render, screen } from "@testing-library/react";
import Image from ".";

test("Renders Image", async () => {
  render(<Image src="https://dummy.jpg" alt="A dummy bear" />);

  const imgElement: HTMLImageElement = await screen.findByRole("img");

  expect(imgElement?.src).toContain("https://dummy.jpg");
  expect(imgElement?.alt).toContain("A dummy bear");
});

test("Contains Title", async () => {
  render(<Image src="https://dummy.jpg" alt="A dummy bear" />);

  const titleElement = screen.getByText("A dummy bear");

  expect(titleElement.textContent).toBe("A dummy bear");
});
