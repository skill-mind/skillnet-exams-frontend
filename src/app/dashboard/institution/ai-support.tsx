"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  Mic,
  Smile,
  Search,
  MoreVertical,
  Send,
  Check,
  X,
  Trash2,
  Clock,
  Paperclip,
  File,
  Image,
  FileText,
  Video,
  Music,
  Download,
  XCircle,
} from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot" | "voice";
  timestamp: Date;
  status: "sending" | "sent" | "delivered" | "read";
  attachments?: Attachment[];
};

type Attachment = {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnail?: string;
  uploadProgress?: number;
};

const fileTypeIcons: Record<string, React.ReactNode> = {
  image: <Image className="w-5 h-5" />,
  video: <Video className="w-5 h-5" />,
  audio: <Music className="w-5 h-5" />,
  text: <FileText className="w-5 h-5" />,
  default: <File className="w-5 h-5" />,
};

interface AISupportPageProps {
  goBack: () => void;
}

export default function AISupportPage({ goBack }: AISupportPageProps) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Gm Gm, Satoshi. I have been following your teachings and it's been really helpful to me. I do have a thing to suggest regarding one of your programs",
      sender: "user",
      timestamp: new Date(new Date().setHours(0, 43, 0, 0)),
      status: "read",
    },
    {
      id: "2",
      content:
        "Oh that's awesome. I'm glad my resources have been helpful and I'm open to helpful suggestions.",
      sender: "bot",
      timestamp: new Date(new Date().setHours(0, 45, 0, 0)),
      status: "read",
    },
  ]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [previewAttachment, setPreviewAttachment] = useState<Attachment | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const emojis = ["😀", "😂", "😍", "😎", "👍", "🎉", "😢", "😡"];

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    if (isTyping) {
      typingTimeout = setTimeout(() => {
        const botResponses = [
          "That's an interesting perspective. Could you elaborate more?",
          "I appreciate your feedback. I'll take that into consideration.",
          "Thanks for sharing your thoughts on this matter.",
          "I'm curious to hear more about your suggestion.",
          "That's a great point. How would you implement that?",
        ];
        const randomResponse =
          botResponses[Math.floor(Math.random() * botResponses.length)];
        const newMessage: Message = {
          id: Date.now().toString(),
          content: randomResponse,
          sender: "bot",
          timestamp: new Date(),
          status: "sent",
        };
        setMessages((prev) => [...prev, newMessage]);
        setIsTyping(false);
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === newMessage.id ? { ...msg, status: "read" } : msg
            )
          );
        }, 2000);
      }, 1500 + Math.random() * 1500);
    }
    return () => clearTimeout(typingTimeout);
  }, [isTyping]);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileType = (mimeType: string): string => {
    if (mimeType.startsWith("image/")) return "image";
    if (mimeType.startsWith("video/")) return "video";
    if (mimeType.startsWith("audio/")) return "audio";
    if (mimeType.startsWith("text/")) return "text";
    return "default";
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      const newAttachment: Attachment = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        url: fileUrl,
        uploadProgress: 0,
      };
      if (file.type.startsWith("image/")) {
        newAttachment.thumbnail = fileUrl;
      }
      setAttachments((prev) => [...prev, newAttachment]);
      simulateFileUpload(newAttachment.id);
    });
    e.target.value = "";
  };

  const simulateFileUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setAttachments((prev) =>
        prev.map((att) => (att.id === fileId ? { ...att, uploadProgress: progress } : att))
      );
    }, 300);
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() && attachments.length === 0) return;
    const allUploaded = attachments.every((att) => att.uploadProgress === 100);
    if (!allUploaded) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
      attachments: attachments.length > 0 ? [...attachments] : undefined,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setAttachments([]);
    setIsEmojiPickerOpen(false);
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "sent" } : msg))
      );
    }, 500);
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg))
      );
    }, 1000);
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);
  };

  const handleSendVoiceMessage = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const newMessage: Message = {
      id: Date.now().toString(),
      content: "",
      sender: "voice",
      timestamp: new Date(),
      status: "sent",
      attachments: [
        {
          id: Date.now().toString(),
          name: "Voice Message",
          type: "audio/webm",
          size: blob.size,
          url,
          uploadProgress: 100,
        },
      ],
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMessageSelection = (id: string) => {
    if (selectedMessages.includes(id)) {
      setSelectedMessages((prev) => prev.filter((msgId) => msgId !== id));
    } else {
      setSelectedMessages((prev) => [...prev, id]);
    }
  };

  const deleteSelectedMessages = () => {
    setMessages((prev) => prev.filter((msg) => !selectedMessages.includes(msg.id)));
    setSelectedMessages([]);
    setIsSelectionMode(false);
  };

  const filteredMessages = searchQuery
    ? messages.filter((msg) =>
        msg.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : messages;

  const StatusIcon = ({ status }: { status: Message["status"] }) => {
    switch (status) {
      case "sending":
        return <Clock className="w-3 h-3 ml-1" />;
      case "sent":
        return <Check className="w-3 h-3 ml-1" />;
      case "delivered":
        return <Check className="w-3 h-3 ml-1" />;
      case "read":
        return <Check className="w-3 h-3 ml-1" />;
      default:
        return null;
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
    setShowAttachmentMenu(false);
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setAudioChunks([]);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) setAudioChunks((prev) => [...prev, e.data]);
      };
      recorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/webm" });
        handleSendVoiceMessage(blob);
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
    setMediaRecorder(null);
  };

  const toggleRecording = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  const addEmoji = (emoji: string) => {
    setInputMessage((prev) => prev + emoji);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl bg-[#121212] rounded-lg overflow-hidden relative">
      <div className="flex items-center px-4 py-3 border-b border-gray-800">
        {isSearchOpen ? (
          <div className="flex items-center w-full">
            <button className="text-gray-400 hover:text-gray-300 mr-2" onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}>
              <X className="w-5 h-5" />
            </button>
            <input type="text" placeholder="Search messages..." className="flex-1 bg-[#1e1e1e] text-gray-300 rounded-lg px-3 py-1 outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus />
          </div>
        ) : (
          <>
            <button onClick={goBack} className="flex items-center text-gray-400 hover:text-gray-300">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back</span>
            </button>
            <div className="flex items-center ml-4">
              <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
              <span className="text-white font-medium">Skillnet Chatbot</span>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              {isSelectionMode ? (
                <>
                  <span className="text-gray-300 text-sm">{selectedMessages.length} selected</span>
                  <button className="text-red-400 hover:text-red-300" onClick={deleteSelectedMessages}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-300" onClick={() => { setIsSelectionMode(false); setSelectedMessages([]); }}>
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <button className="text-gray-400 hover:text-gray-300" onClick={() => setIsSearchOpen(true)}>
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-300" onClick={() => setIsSelectionMode(true)}>
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212]">
        {filteredMessages.length === 0 && searchQuery && (
          <div className="text-center text-gray-500 mt-4">No messages found matching "{searchQuery}"</div>
        )}
        {filteredMessages.map((msg) => (
          <div key={msg.id} className={flex flex-col ${msg.sender === "user" ? "items-end ml-auto" : "items-start"} max-w-[80%]} onClick={() => isSelectionMode && toggleMessageSelection(msg.id)}>
            <div className={relative ${isSelectionMode ? "border-2 " + (selectedMessages.includes(msg.id) ? "border-blue-500" : "border-transparent") : ""} bg-[#1e1e1e] text-gray-300 p-3 rounded-lg}>
              {msg.attachments && msg.attachments.length > 0 && (
                <div className="mb-2 space-y-2">
                  {msg.attachments.map((attachment) => (
                    <div key={attachment.id} className="flex items-center p-2 bg-[#2a2a2a] rounded-md" onClick={(e) => { e.stopPropagation(); if (attachment.type.startsWith("image/")) { setPreviewAttachment(attachment); } }}>
                      {attachment.type.startsWith("image/") ? (
                        <div className="w-10 h-10 mr-2 rounded overflow-hidden flex-shrink-0">
                          <img src={attachment.thumbnail || attachment.url} alt={attachment.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 mr-2 bg-[#3a3a3a] rounded flex items-center justify-center flex-shrink-0">
                          {fileTypeIcons[getFileType(attachment.type)]}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{attachment.name}</div>
                        <div className="text-xs text-gray-400">{formatFileSize(attachment.size)}</div>
                      </div>
                      <button className="ml-2 text-gray-400 hover:text-gray-300" onClick={(e) => { e.stopPropagation(); window.open(attachment.url, "_blank"); }}>
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {msg.content && <p>{msg.content}</p>}
            </div>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <span>{formatTime(msg.timestamp)}</span>
              {msg.sender === "user" && <StatusIcon status={msg.status} />}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start max-w-[80%]">
            <div className="bg-[#1e1e1e] text-gray-300 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {isEmojiPickerOpen && (
        <div className="absolute bottom-16 left-4 bg-[#1e1e1e] p-2 rounded shadow-lg flex flex-wrap gap-2 z-20">
          {emojis.map((emoji) => (
            <button key={emoji} onClick={() => addEmoji(emoji)} className="text-xl">{emoji}</button>
          ))}
        </div>
      )}
      {previewAttachment && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4">
          <div className="relative max-w-full max-h-full">
            <button className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1" onClick={() => setPreviewAttachment(null)}>
              <X className="w-6 h-6" />
            </button>
            <img src={previewAttachment.url || "/placeholder.svg"} alt={previewAttachment.name} className="max-w-full max-h-[80vh] object-contain" />
            <div className="mt-2 text-white text-center">{previewAttachment.name}</div>
          </div>
        </div>
      )}
      {attachments.length > 0 && (
        <div className="px-4 py-2 border-t border-gray-800 bg-[#1a1a1a]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Attachments</span>
            <button className="text-gray-400 hover:text-gray-300 text-xs" onClick={() => setAttachments([])}>Clear all</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="relative bg-[#2a2a2a] rounded-md p-2 w-[calc(50%-4px)]">
                <div className="flex items-center">
                  {attachment.type.startsWith("image/") ? (
                    <div className="w-10 h-10 mr-2 rounded overflow-hidden flex-shrink-0">
                      <img src={attachment.thumbnail || attachment.url} alt={attachment.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 mr-2 bg-[#3a3a3a] rounded flex items-center justify-center flex-shrink-0">
                      {fileTypeIcons[getFileType(attachment.type)]}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-300 truncate">{attachment.name}</div>
                    <div className="text-xs text-gray-400">{formatFileSize(attachment.size)}</div>
                  </div>
                  <button className="ml-1 text-gray-400 hover:text-gray-300" onClick={() => removeAttachment(attachment.id)}>
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
                {attachment.uploadProgress !== undefined && attachment.uploadProgress < 100 && (
                  <div className="mt-1 h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#a3d063]" style={{ width: ${attachment.uploadProgress}% }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="p-3 border-t border-gray-800 bg-[#121212] relative">
        <div className="flex items-center bg-[#1e1e1e] rounded-full px-4 py-2">
          <button className="text-gray-400 mr-2" onClick={toggleRecording}>
            <Mic className="w-5 h-5" />
          </button>
          {isRecording && <span className="text-red-400 mr-2 text-sm">Recording...</span>}
          <div className="relative">
            <button className="text-gray-400 mr-2" onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}>
              <Paperclip className="w-5 h-5" />
            </button>
            {showAttachmentMenu && (
              <div className="absolute bottom-full left-0 mb-2 bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden z-10">
                <button className="flex items-center w-full px-4 py-2 text-left text-gray-300 hover:bg-[#3a3a3a]" onClick={openFilePicker}>
                  <Image className="w-4 h-4 mr-2" />
                  Photo &amp; Video
                </button>
                <button className="flex items-center w-full px-4 py-2 text-left text-gray-300 hover:bg-[#3a3a3a]" onClick={openFilePicker}>
                  <File className="w-4 h-4 mr-2" />
                  Document
                </button>
              </div>
            )}
            <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileSelect} accept="image/,video/,audio/*,application/pdf,text/plain" />
          </div>
          <button className="text-gray-400 mr-2 relative" onClick={() => setIsEmojiPickerOpen((prev) => !prev)}>
            <Smile className="w-5 h-5" />
          </button>
          <input type="text" placeholder="Type a message" className="flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyDown={handleKeyPress} disabled={isSelectionMode} />
          <button className={ml-2 w-8 h-8 flex items-center justify-center ${inputMessage.trim() || (attachments.length > 0 && attachments.every((a) => a.uploadProgress === 100)) ? "bg-[#A8C789] text-[#121212]" : "bg-gray-700 text-gray-400"} rounded-full} onClick={handleSendMessage} disabled={(!inputMessage.trim() && attachments.length === 0) || isSelectionMode || (attachments.length > 0 && !attachments.every((a) => a.uploadProgress === 100))}>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}