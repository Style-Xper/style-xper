import MultiClass from "../components/MultiClass/MultiClass";
import SingleClass from "../components/SingleClass/SingleClass";

export const routes = [
  { label: "Single Class", value: "single-class", component: SingleClass },
  { label: "Multiple Classes", value: "multi-class", component: MultiClass },
  { label: "Nested Classes", component: null },
  { label: "ID Selector", component: null },
  { label: "All Elements", component: null },
  { label: "Single Element", component: null },
  { label: "Single Element with Class", component: null },
  { label: "Multiple Elements", component: null },
];
