import { CatalogProduct } from "@/types";

interface SpecTableProps {
  product: CatalogProduct;
}

export function SpecTable({ product }: SpecTableProps) {
  const specs = [
    { label: "Dimensions", value: product.dimensions },
    { label: "Material", value: product.material },
    { label: "Weight", value: product.weight },
    { label: "Color", value: product.color },
  ].filter((spec) => spec.value);

  if (specs.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-stone-900 mb-4">Specifications</h3>
      <div className="border border-stone-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody className="divide-y divide-stone-200">
            {specs.map((spec, index) => (
              <tr
                key={index}
                className="hover:bg-stone-50 transition-colors"
              >
                <td className="px-4 py-3 text-sm font-medium text-stone-500 w-1/3">
                  {spec.label}
                </td>
                <td className="px-4 py-3 text-sm text-stone-900">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

