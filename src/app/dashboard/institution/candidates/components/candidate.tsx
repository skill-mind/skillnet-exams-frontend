import { ICandidates } from "./CandidateTable";

const Candidate: React.FC<ICandidates> = ({
  sn,
  address,
  date,
  certification,
  status,
}) => {
  return (
    <tr className="border-b-[#31283A] border-b text-left font-normal">
      <td className="p-4 py-6">{sn}</td>
      <td className="p-4 py-6">{address}</td>
      <td className="p-4 py-6">{date}</td>
      <td className="p-4 py-6">
        <div className="flex">
          <button className="border rounded-full border-[#2D2E2D] w-[80px] h-[30px] flex justify-center items-center">
            {certification}
          </button>
        </div>
      </td>
      <td className="p-4 py-6 font-semibold text-[#4B4B4B]">{status}</td>
    </tr>
  );
};

export default Candidate;
