
import { customDashboardData } from "../../data/customDashboardData";
import ServicesComponent from "./ServicesComponent";

export default function CustomDashboard() {

  return (
    <>
      <ServicesComponent data={customDashboardData} title="Custom Dashboard Development" />
    </>
  )
}
