import * as React from "react";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import { IExcelDataToShow } from "../../modules/ExcelModules";
import { ExcelGrid } from "./ExcelDataRenderer";

describe("ExcelFile Component", () => {
  let wrapper: Enzyme.ShallowWrapper;
  let mountedWrapper: Enzyme.ReactWrapper<any, any>;
  let props: IExcelDataToShow;

  beforeEach(() => {
    props = {
      rows: [],
      cols: []
    };
  });

  it("should render correctly", () => {
    wrapper = Enzyme.shallow(<ExcelGrid {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should have a div element", () => {
    mountedWrapper = Enzyme.mount(<ExcelGrid {...props} />);
    expect(mountedWrapper.find("div")).toHaveLength(1);
  });

  it("should have a table element", () => {
    mountedWrapper = Enzyme.mount(<ExcelGrid {...props} />);
    expect(mountedWrapper.find("table")).toHaveLength(1);
  });

  it("should render table body", () => {
    mountedWrapper = Enzyme.mount(<ExcelGrid {...props} />);
    expect(mountedWrapper.find("tbody")).toHaveLength(1);
  });

  it("should not render table row while props having default value only", () => {
    mountedWrapper = Enzyme.mount(<ExcelGrid {...props} />);
    expect(mountedWrapper.find("tr")).toHaveLength(0);
  });

  it("should render table row while props having a record", () => {
    props = {
      rows: ["row1"],
      cols: [{ key: 1, name: "row 1" }]
    };
    mountedWrapper = Enzyme.mount(<ExcelGrid {...props} />);
    expect(mountedWrapper.find("tr")).toHaveLength(1);
  });
});
