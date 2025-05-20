"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type DropdownProps = {
  history: string[];
  onHistoryClick: (query: string) => void;
  onRemoveQuery: (query: string) => void;
  onClearHistory: () => void;
  isMobile?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  history,
  onHistoryClick,
  onRemoveQuery,
  onClearHistory,
  isMobile = false,
}) => {
  return (
    <AnimatePresence mode="wait">
      {history.length > 0 && (
        <motion.div
          className={`absolute top-full left-0 ${
            isMobile ? "w-full max-w-md" : "w-48"
          } bg-gray-800 rounded-md mt-1 z-30`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {history.map((q) => (
            <div
              key={q}
              className={`px-2 ${
                isMobile ? "py-2" : "py-1"
              } text-white hover:bg-gray-700 cursor-pointer truncate flex items-center justify-between`}
            >
              <span
                onClick={() => onHistoryClick(q)}
                className="flex-1 truncate"
              >
                {q}
              </span>
              <FaTimes
                size={12}
                className="ml-2 text-gray-400 hover:text-white cursor-pointer"
                onClick={() => onRemoveQuery(q)}
                aria-label={`Remove ${q} from history`}
              />
            </div>
          ))}
          <div
            className={`px-2 ${
              isMobile ? "py-2" : "py-1"
            } text-sm text-gray-400 hover:bg-gray-700 cursor-pointer flex items-center`}
            onClick={onClearHistory}
          >
            <FaTimes size={12} className="mr-1" />
            Xóa lịch sử
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
