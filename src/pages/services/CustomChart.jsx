
import { customChartData } from "../../data/customChartData";
import ServicesComponent from "./ServicesComponent";

export default function CustomChart() {
  
  return (
    <>
      <ServicesComponent data={customChartData} title="Custom Chart & Visualization Creation" />
    </>
  )
}
