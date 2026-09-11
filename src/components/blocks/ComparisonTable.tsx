import { Reveal } from "../ui/Reveal";

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-2xl border border-ink-200 shadow-sm">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-ink-900 to-ink-800 text-white">
              {columns.map((col) => (
                <th key={col} scope="col" className="px-6 py-4 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row[0]}
                className={`transition-colors duration-200 hover:bg-primary-50/60 ${i % 2 === 0 ? "bg-white" : "bg-ink-50"}`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-4 ${j === 0 ? "font-medium text-ink-900" : "text-ink-600"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
