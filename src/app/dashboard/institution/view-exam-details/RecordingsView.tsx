"use client"


const FullscreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

interface Candidate {
  id: number;
  name: string;
}

const RecordingCard = ({ candidate }: { candidate: Candidate }) => {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 bg-[#0A1225] rounded-3xl overflow-hidden border border-[#1A2A44]">
      <div className="py-6 px-4 text-white text-center font-medium text-xl">
        {candidate.name}
      </div>
      <div className="bg-[#0B1739] w-full pb-2">
        
        <div className="relative bg-[#2A2A2A] w-full overflow-hidden">
          
          <div className="w-full aspect-video bg-[#2A2A2A]"></div>
          
          
          <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center">
              <button className="text-white mr-4">
                <PlayIcon />
              </button>
              
              <div className="relative flex-grow">
                <div className="h-1 bg-gray-600 rounded-full">
                  <div className="h-1 bg-red-600 rounded-full w-1/4 relative">
                    
                    <div className="absolute -right-1.5 -top-1.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-white mx-4 text-sm font-medium">
                0:00 / 0:00
              </div>
              
              <button className="text-white">
                <FullscreenIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="p-6 flex items-center justify-between">
        <button className="bg-[#00A99D] hover:bg-[#008C82] text-white py-3 px-8 rounded-full text-lg font-medium transition-colors">
          Play Recording
        </button>
        
        <button className="p-3 rounded-full bg-transparent border-2 border-[#2A8D9C] text-white hover:bg-[#0F1F4B]/10 transition-colors">
          <EditIcon />
        </button>
      </div>
    </div>
  );
};


interface Recording {
  id: number;
  name: string;
}

const RecordingsRow = ({ recordings }: { recordings: Recording[] }) => {
  return (
    <div className="flex overflow-x-auto pb-6 hide-scrollbar">
      <div className="flex space-x-6 pl-1">
        {recordings.map((candidate) => (
          <RecordingCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

// Recordings View Component
const RecordingsView = () => {
  // Sample data for recordings (grouped by date)
  const recordingSessions = [
    {
      date: "Apr 15th, 2025",
      recordings: [
        { id: 1, name: "Candidate's Name" },
        { id: 2, name: "John Smith" },
        { id: 3, name: "Alice Johnson" },
        { id: 4, name: "Marcus Lee" },
        { id: 5, name: "Emily Chen" }
      ]
    },
    {
      date: "Apr 27th, 2025",
      recordings: [
        { id: 6, name: "Candidate's Name" },
        { id: 7, name: "John Smith" },
        { id: 8, name: "Alice Johnson" },
        { id: 9, name: "Marcus Lee" },
        { id: 10, name: "Emily Chen" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {recordingSessions.map((session, index) => (
        <div key={index} className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-medium">Recording</h2>
            <p className="text-gray-400 mt-1">{session.date}</p>
          </div>
          
          {/* Horizontal scrolling recordings */}
          <RecordingsRow recordings={session.recordings} />
          
          {/* View All link */}
          {index === 0 && (
            <div className="mt-4 flex justify-end">
              <button className="text-white hover:text-blue-300 transition-colors">
                View All
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecordingsView;