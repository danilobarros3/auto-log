import { CardsDashboard } from "./components/CardsDashboard";
import { TableDashboard } from "./components/TableDashboard";

export function Dashboard(){
  return(
    <div className="grid gap-10 justify-center items-center">
      <CardsDashboard/>
      <TableDashboard/>
    </div>
  )
}