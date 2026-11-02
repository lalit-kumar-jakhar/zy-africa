import type { ReactNode } from "react";
import { ink, label } from "@/components/industries/typography";

type Column<T> = {
  key: string;
  header: string;
  className?: string;
  render: (row: T) => ReactNode;
};

type IndustryTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  caption?: string;
  minWidth?: string;
};

function IndustryTable<T>({
  columns,
  rows,
  rowKey,
  caption,
  minWidth = "640px",
}: IndustryTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E8E8ED] bg-white">
      <table className="w-full text-left" style={{ minWidth }}>
        {caption && (
          <caption
            className={`border-b border-[#E8E8ED] p-5 text-left text-[16px] font-semibold md:px-6 ${ink}`}
          >
            {caption}
          </caption>
        )}
        <thead className="bg-[#FAFAFB]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-4 md:px-5 ${label}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className="border-t border-[#F0F0F3] hover:bg-[#FAFAFB]"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`p-4 align-top text-[15px] leading-relaxed md:px-5 md:text-[16px] ${
                    col.className ?? ""
                  }`}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IndustryTable;
