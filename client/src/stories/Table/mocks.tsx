import { TMockItem } from "./types";
import "../../app/styles/index.css";

export const mockItems: TMockItem[] = [
    {
        field1: "Value 1",
        field2: "Value 2",
        field3: "Value 3",
    },
    {
        field1: "Value 4",
        field2: "Value 5",
        field3: "Value 6",
    },
    {
        field1: "Value 7",
        field2: "Value 8",
        field3: "Value 9",
    },
];

export const mockRenerHeaders = () => {
    return (
        <tr>
            <th className="text-left">Field 1</th>
            <th className="text-left">Field 2</th>
            <th className="text-left">Field 3</th>
        </tr>
    );
};

export const mockRenderItem = (item: TMockItem) => {
    return (
        <tr className="hover:bg-gray-200 cursor-pointer">
            <td className="text-left">{item.field1}</td>
            <td className="text-left">{item.field2}</td>
            <td className="text-left">{item.field3}</td>
        </tr>
    );
};
