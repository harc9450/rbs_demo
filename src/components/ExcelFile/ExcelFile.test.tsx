import ExcelFile, { IExcelFileProps } from "./ExcelFile";
import * as React from "react";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import { ExcelGrid } from "../ExcelDataRenderer/ExcelDataRenderer";

describe("ExcelFile Component", () => {
  let wrapper: Enzyme.ShallowWrapper;
  let mountedWrapper: Enzyme.ReactWrapper<any, any>;
  let props: IExcelFileProps;

  beforeEach(() => {
    props = {};
  });

  it("should render correctly", () => {
    wrapper = Enzyme.shallow(<ExcelFile {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a ExcelGrid element", () => {
    mountedWrapper = Enzyme.mount(<ExcelFile {...props} />);
    expect(mountedWrapper.find(ExcelGrid)).toHaveLength(1);
  });

  it("should have a form element", () => {
    mountedWrapper = Enzyme.mount(<ExcelFile {...props} />);
    expect(mountedWrapper.find("form")).toHaveLength(1);
  });

  it("should have a input element", () => {
    mountedWrapper = Enzyme.mount(<ExcelFile {...props} />);
    expect(mountedWrapper.find("input")).toHaveLength(1);
  });
});
