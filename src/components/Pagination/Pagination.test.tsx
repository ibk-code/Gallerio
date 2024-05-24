import { render, screen, fireEvent, within } from "@testing-library/react";
import Pagination from ".";

test("Current Pagination", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Pagination
      totalPage={6}
      currPage={1}
      totalData={60}
      paginate={onClick}
      pageSize={10}
      loading={false}
    />
  );

  const activePage = container.querySelector(".active");
  expect(activePage?.textContent).toBe("1");
});

test("Move to Next page", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Pagination
      totalPage={6}
      currPage={1}
      totalData={60}
      paginate={onClick}
      pageSize={10}
      loading={false}
    />
  );

  const nextButton = screen.getByText("Next");
  fireEvent.click(nextButton);

  const activePage = container.querySelector(".active");
  expect(activePage?.textContent).toBe("2");
});

test("Move to Prev page", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Pagination
      totalPage={6}
      currPage={1}
      totalData={60}
      paginate={onClick}
      pageSize={10}
      loading={false}
    />
  );

  const nextButton = screen.getByText("Next");
  const prevButton = screen.getByText("Prev");
  fireEvent.click(nextButton);
  fireEvent.click(prevButton);

  const activePage = container.querySelector(".active");
  expect(activePage?.textContent).toBe("1");
});

test("Move to clicked page", () => {
  const onClick = jest.fn();
  const { container } = render(
    <Pagination
      totalPage={6}
      currPage={1}
      totalData={60}
      paginate={onClick}
      pageSize={10}
      loading={false}
    />
  );

  const clickButton = screen.getByText("3");
  fireEvent.click(clickButton);

  const activePage = container.querySelector(".active");
  expect(activePage?.textContent).toBe("3");
});
