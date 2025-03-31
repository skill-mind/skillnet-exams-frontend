
import Rows from "./rows";

interface Certificate {
  [key: string]: string | number;
}

interface Table {
  certificates: Certificate[];
}

const Table: React.FC<Table> = ({ certificates }) => {
  if (certificates.length === 0) {
    return <p className="text-[#848484] text-center">No certificates issued</p>;
  }

  return (
    <div className="w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:hidden">
    <table className="w-full text-[14px] mt-[20px]">
      <thead className="text-[#EBEBEB] text-[12px] font-[400] h-[45px] bg-[#161716]">
        <tr className="text-start">
          {Object.keys(certificates[0]).map((key) => (
            <th key={key} className="text-start font-light max-w-[174px] pl-[20px]">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll max-h-[600px]">
        {certificates.map((certificate) => (
          <Rows key={certificate.id || JSON.stringify(certificate)} certificate={certificate} />
        ))}
      </tbody>
    </table>

    </div>
  );
};

export default Table;
