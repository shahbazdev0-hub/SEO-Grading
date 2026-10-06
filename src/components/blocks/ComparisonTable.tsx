import { Reveal } from "../ui/Reveal";

/** Comparison table the second column (our model) is highlighted. */
export function ComparisonTable({
  columns,
  rows,
}: {
  columns: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-xl border border-ink-200 bg-white">
        <table className="w-full min-w-[600px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b-2 border-ink-950">
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`px-6 py-4 font-display font-bold ${
                    i === 1 ? "bg-primary-100 text-primary-800" : i === 0 ? "text-ink-950" : "text-ink-500"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-ink-200 last:border-b-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-4 ${
                      j === 0
                        ? "font-medium text-ink-950"
                        : j === 1
                          ? "bg-primary-50/70 font-semibold text-ink-950"
                          : "text-ink-500"
                    }`}
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
