import { Grid } from "gridjs-react";
import data from "./data.json";
import "gridjs/dist/theme/mermaid.css";
// Over-ride css
import "./styles.css";

export default function App() {
  const gridProps = new Grid({
    data: data,
    columns: [
      "User",
      "Date",
      "Worktime",
      "Worktime - Minutes",
      "Empty",
      "Pause",
      "Holidays",
      "Payless holidays"
    ],
    pagination: {
      enabled: true,
      limit: 15
    },
    className: {
      container: "table-wrapper"
    }
  });

  return (
    <div className="App">
      <h1>Grid</h1>
      <Grid {...gridProps.props} />
    </div>
  );
}
