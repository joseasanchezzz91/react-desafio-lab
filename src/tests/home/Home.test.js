import React from "react";
import { shallow } from "enzyme";
import Home from "../../views/home/Home";

describe("Pruebas en el componente Home", () => {
  let wrapper = shallow(<Home />);
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test("debe mostrar <Home/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostart H1 correctamente", () => {
    const h1 = "Lista de Post";
    const textH1 = wrapper.find("h1").text();
    expect(textH1).toBe(h1);
  });
});
