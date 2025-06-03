"use client";

import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";
import React, { useState } from "react";
import Image from "next/image";

function HelpCenter() {
  const [helpItems, setHelpItems] = useState([
    {
      id: 1,
      title: "Getting started as a user on SkillNet",
      content: "",
    },
    {
      id: 2,
      title: "Getting started an institution on SkillNet",
      content: "",
    },
    {
      id: 3,
      title: "Exam Creation Guide (How to structure, host, and monitor)",
      content: "",
    },
    {
      id: 4,
      title:
        "Technical Issues (Troubleshooting exam uploads, media files, etc.)",
      content: "",
    },
    {
      id: 5,
      title: "Certification benefits and use cases",
      content: "",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleEdit = (item: { id: number; title: string; content: string }) => {
    setEditingId(item.id);
    setEditingTitle(item.title);
    setEditingContent(item.content);
  };

  const handleSaveEdit = () => {
    setHelpItems((items) =>
      items.map((item) =>
        item.id === editingId
          ? { ...item, title: editingTitle, content: editingContent }
          : item
      )
    );
    setEditingId(null);
    setEditingTitle("");
    setEditingContent("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
    setEditingContent("");
  };

  const handleAddNew = () => {
    if (newTitle.trim()) {
      const newItem = {
        id: Math.max(...helpItems.map((item) => item.id)) + 1,
        title: newTitle,
        content: newContent,
      };
      setHelpItems([...helpItems, newItem]);
      setNewTitle("");
      setNewContent("");
      setIsAddingNew(false);
    }
  };

  const handleCancelAdd = () => {
    setIsAddingNew(false);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <AdminDashboardLayout title="HelpCenter" activePage="Help-Center">
      <div className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-[#0b1739] rounded-xl p-6 sm:p-8 border border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4">
              New To SkillNet
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              SkillNet Is Not Just An Exam Platform—It's A Game-Changer.
              Designed To Deliver Secure, <br /> Transparent, And Verifiable
              Academic Records, SkillNet Leverages Cutting-Edge Blockchain{" "}
              <br /> Technology, AI Proctoring, And NFT-Based Certificate
              Minting
            </p>
            <button className="bg-transparent border-2 border-blue-400 text-white px-6 py-2 rounded-3xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
              Explore SkillNet
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <h2 className="text-base font-medium text-gray-400">
                Help And Tips
              </h2>
            </div>

            {/* Help Items */}
            <div className="space-y-4">
              {helpItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b-gray-700 border-b-2 overflow-hidden"
                >
                  {editingId === item.id ? (
                    // Edit Mode
                    <div className="p-6">
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={editingTitle}
                          onChange={(e) => setEditingTitle(e.target.value)}
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-blue-500 focus:outline-none font-medium"
                          placeholder="Help item title..."
                        />
                        <textarea
                          value={editingContent}
                          onChange={(e) => setEditingContent(e.target.value)}
                          rows={6}
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                          placeholder="Help item content..."
                        />
                        <div className="flex gap-3">
                          <button
                            onClick={handleSaveEdit}
                            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Display Mode
                    <div className="flex justify-between items-center p-6">
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-lg">
                          {item.title}
                        </h3>
                        {item.content && (
                          <p className="text-slate-400 mt-2">{item.content}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center gap-2 bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-3xl transition-all duration-200 font-medium ml-4"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Add New Item Form */}
              {isAddingNew && (
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-blue-500 focus:outline-none font-medium"
                      placeholder="New help item title..."
                    />
                    <textarea
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      rows={6}
                      className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                      placeholder="New help item content..."
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={handleAddNew}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                      >
                        Add Help Item
                      </button>
                      <button
                        onClick={handleCancelAdd}
                        className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="flex items-center gap-2 text-gray-400 transition-colors duration-200 font-medium"
                >
                  &#43; Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

export default HelpCenter;
