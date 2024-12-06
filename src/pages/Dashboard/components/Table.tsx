import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface ITableColumn {
  column1?: string;
  column2?: string;
  column3?: string;
  column4?: string;
  column5: string;
  column6?: string;
  column7?: string;
  title?: string;
  subtitle?:string;
}

export function TableDemo({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  title,
  subtitle
}: ITableColumn) {
  return (
    <>
    <div className="bg-white flex flex-col justify-center w-full rounded-2xl shadow-2xl p-3">
      <div className="grid gap-3 mt-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{column1}</TableHead>
          <TableHead>{column2}</TableHead>
          <TableHead>{column3}</TableHead>
          <TableHead>{column4}</TableHead>
          <TableHead>{column5}</TableHead>
          <TableHead>{column6}</TableHead>
          <TableHead className="text-right">{column7}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    </>
  );
}
