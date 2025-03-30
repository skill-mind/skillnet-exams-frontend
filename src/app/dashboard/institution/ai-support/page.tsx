export default function AISupportPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6">AI Support Assistant</h1>
      <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 border border-gray-800 mb-4">
        <p className="text-black dark:text-gray-400">
          Get instant help with our AI-powered assistant.
        </p>
      </div>
      <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 border border-gray-800 flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          {/* Chat messages would go here */}
          <div className="text-center text-gray-500 my-8">
            Start a conversation with our AI assistant
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your question here..."
            className="flex-1 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-black dark:text-white"
          />
          <button className="bg-primary hover:bg-primary/90 text-black dark:text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
