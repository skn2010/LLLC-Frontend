import Link from "next/link";
import { RiEyeFill } from "react-icons/ri";

type Props = {
  companyId: string;
  menus: TMenu[];
};

export default function MenuTable({ menus, companyId }: Props) {
  return (
    <div className="mt-8 relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-4">
              Menu name
            </th>
            <th scope="col" className="px-2 py-4">
              Tag
            </th>
            <th scope="col" className="px-2 py-4">
              Price
            </th>
            <th scope="col" className="px-2 py-4">
              Created in
            </th>
            <th scope="col" className="px-2 py-4">
              -
            </th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu, i) => {
            return (
              <tr key={`menu-table-${i}`} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap capitalize"
                >
                  {menu.name}
                </th>
                <td className="px-2 py-4">{menu.tag}</td>
                <td className="px-2 py-4">{menu?.price || "Not Mentioned"}</td>
                <td className="px-2 py-4">{menu.created_date.split("T")[0]}</td>
                <td className="px-2 py-4">
                  <Link href={`/companies/${companyId}/menus/${menu._id}`}>
                    <RiEyeFill size={18} title="View menu details" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
