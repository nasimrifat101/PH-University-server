import { TAcademicCode, TAcademicName, TMapper, TMonth } from "./academic.interface";

export const Months: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const AcademicName: TAcademicName[] = ["Autumn", "Fall", "Summer"];

export const AcademicCode: TAcademicCode[] = ["01", "02", "03"];

export const mapper: TMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "02",
};