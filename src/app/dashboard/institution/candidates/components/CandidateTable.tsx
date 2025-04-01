import Candidate from "./candidate";

export interface ICandidates {
  sn: number;
  address: string;
  date: string;
  certification: string;
  status: "Eligible" | "Unverified";
}

const CandidateTable: React.FC<{ candidates: ICandidates[] }> = ({
  candidates,
}) => {
  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr className=" bg-gray-400 dark:bg-[#161716] text-white text-left">
          <th className="p-4 py-6">S/N</th>
          <th className="p-4 py-6">Address</th>
          <th className="p-4 py-6">Date</th>
          <th className="p-4 py-6">Certification</th>
          <th className="p-4 py-6">Status</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((item, index) => (
          <Candidate key={index + new Date().getTime()} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;
