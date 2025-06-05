"use client";

import type React from "react";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  Bold,
  Italic,
  UnderlineIcon,
  List,
  ListOrdered,
  AlignLeft,
} from "lucide-react";

interface RichTextEditorProps {
  placeholder?: string;
  content?: string;
  onChange?: (html: string) => void;
  minHeight?: string;
}

// Custom Button Component for the editor
interface MenuButtonProps {
  editor: Editor;
  name: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

function MenuButton({
  editor,
  name,
  onClick,
  isActive,
  children,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center h-8 w-8 rounded-md text-white/70 hover:bg-[#2a3552] ${
        isActive ? "bg-[#2a3552] text-white" : ""
      }`}
      onClick={onClick}
      title={name}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  placeholder = "Enter text...",
  content = "",
  onChange,
  minHeight = "150px",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content,
    editorProps: {
      attributes: {
        class: `focus:outline-none w-full ${minHeight} p-3 text-white`,
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md border-[#2a3552] bg-[#0a1022] overflow-hidden">
      <div className="flex space-x-1 p-1 border-b border-[#2a3552]">
        <MenuButton
          editor={editor}
          name="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <Bold className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          editor={editor}
          name="italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <Italic className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          editor={editor}
          name="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
        >
          <UnderlineIcon className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          editor={editor}
          name="bulletList"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <List className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          editor={editor}
          name="orderedList"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <ListOrdered className="h-4 w-4" />
        </MenuButton>
        <MenuButton
          editor={editor}
          name="paragraph"
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive("paragraph")}
        >
          <AlignLeft className="h-4 w-4" />
        </MenuButton>
      </div>
      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>
      <style jsx>{`
        .tiptap-editor :global(p) {
          margin-bottom: 0.75em;
        }
        .tiptap-editor :global(ul),
        .tiptap-editor :global(ol) {
          padding-left: 1.5em;
          margin-bottom: 0.75em;
        }
        .tiptap-editor :global(ul) {
          list-style-type: disc;
        }
        .tiptap-editor :global(ol) {
          list-style-type: decimal;
        }
        .tiptap-editor :global(li) {
          margin-bottom: 0.25em;
        }
        .tiptap-editor :global(strong) {
          font-weight: bold;
        }
        .tiptap-editor :global(em) {
          font-style: italic;
        }
        .tiptap-editor :global(u) {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
