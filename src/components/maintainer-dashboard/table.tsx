import type React from "react";

interface TableProps {
  headings: string[];
  rows: Record<string, any>[];
  onViewClick?: (institution: any) => void; // Accept onViewClick as an optional prop
}

const DynamicTable: React.FC<TableProps> = ({
  headings,
  rows,
  onViewClick,
}) => {
  return (
    <div className="w-full">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-">
          {/* Table Header */}
          <thead className=" bg-gray-200 dark:bg-gray-800">
            <tr>
              {headings.map((header) => (
                <th
                  key={header}
                  className="text-[12px] font-light py-4 px-4 text-left text-black dark:text-white"
                >
                  {header}
                </th>
              ))}
              <th className="text-[12px] font-light py-4 px-4 text-left text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#31283A]">
            {rows.map((row, index) => (
              <tr key={index}>
                {headings.map((header, i) => {
                  let value = row[header];

                  // Format Wallet Address (first 6, last 4)
                  if (
                    header === "Wallet Address" &&
                    typeof value === "string"
                  ) {
                    value = `${value.slice(0, 6)}...${value.slice(-4)}`;
                  }

                  return (
                    <td
                      key={i}
                      className="py-4 px-4 whitespace-nowrap text-[12px] font-light"
                    >
                      {/* Apply styling if column is "Status" */}
                      {header === "Status" ? (
                        <span
                          className={`px-2 py-1 rounded-full text-xs border border-white/20 `}
                        >
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
                <td>
                  <div className="flex flex-row gap-4">
                    <button
                      className="text-white text-[12px] border border-white/20 rounded-full px-4 py-1"
                      onClick={() => onViewClick && onViewClick(row)} // Pass row data
                    >
                      View
                    </button>
                    <button className="text-white text-[12px] border border-white/20 rounded-full px-4 py-1">
                      Ban
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Define props type for StudentsTable
interface StudentsTableProps {
  tableData: TableProps;
  onViewClick?: (institution: any) => void; // Add onViewClick prop
}

const StudentsTable: React.FC<StudentsTableProps> = ({
  tableData,
  onViewClick,
}) => {
  return (
    <DynamicTable
      headings={tableData.headings}
      rows={tableData.rows}
      onViewClick={onViewClick}
    />
  );
};

export default StudentsTable;
