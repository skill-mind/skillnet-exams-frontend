interface Certificate {
  [key: string]: string | number;
}

interface Rows {
  certificate: Certificate;
}

const Rows: React.FC<Rows> = ({ certificate }) => {
  return (
    <tr className="border-b-[0.2px] border-[#31283A]">
      {Object.entries(certificate).map(([key, value], index) => (
        <td
          key={key}
          className="text-start truncate font-thin h-[68px] max-w-[174px] pl-[20px] text-[12px]">
          {key === "Status" ? (
            <div className="flex items-center gap-2">{value}</div>
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  );
};

export default Rows;
