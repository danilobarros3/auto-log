import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Box, Minus, Plus } from "lucide-react";
import { useState } from "react";

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
  subtitle?: string;
}

export function TablePartsInUse({
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  title,
  subtitle,
}: ITableColumn) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white flex flex-col justify-center w-full rounded-2xl shadow-2xl p-3">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <button className="flex items-center justify-center">
          {isOpen ? (
            <div className="bg-white border border-gray-300 rounded-full p-1">
              <Minus className="h-6 w-6 text-gray-500" />
            </div>
          ) : (
            <div className="bg-white border border-gray-400 rounded-full p-1">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </button>
        <div className="flex flex-1 justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          </div>
          <Button className="flex items-center justify-center bg-white border border-black shadow-lg">
            <Box className="h-6 w-6 text-black" />
            <span className="text-black">Adicionar peças</span>
          </Button>
        </div>
      </div>

      {isOpen && (
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
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
