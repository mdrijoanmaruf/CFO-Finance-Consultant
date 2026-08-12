"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  FiSearch,
  FiMail,
  FiCalendar,
  FiLoader,
  FiFilter,
  FiEye,
  FiX,
  FiMessageSquare,
  FiCheck,
  FiBriefcase,
  FiPhone,
  FiSave,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Consultation {
  _id: string;
  refId: string;
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  requirement: string;
  status: "new" | "contacted" | "scheduled" | "proposal_sent" | "won" | "lost" | "archived";
  source: string;
  internalNotes?: string;
  createdAt: string;
}

export default function MessagesPage() {
  const { data: session, status: sessionStatus } = useSession();
  const [messages, setMessages] = useState<Consultation[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Consultation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [newCount, setNewCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === "loading") return;
    if (sessionStatus === "authenticated") {
      fetchMessages();
    } else {
      setLoading(false);
    }
  }, [sessionStatus]);

  useEffect(() => {
    let filtered = messages;
    if (statusFilter !== "all") {
      filtered = filtered.filter((msg) => msg.status === statusFilter);
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (msg) =>
          msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          msg.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
          msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          msg.refId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredMessages(filtered);
    setCurrentPage(1);
  }, [searchQuery, statusFilter, messages]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/consultations");
      const data = await res.json();

      if (data.success) {
        setMessages(data.data);
        setNewCount(data.data.filter((m: Consultation) => m.status === "new").length);
      } else {
        toast.error(data.error || "Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (message: Consultation) => {
    router.push(`/admin/messages/${message._id}`);
  };

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncateMessage = (text: string, maxLength: number = 50) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const statusColors: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    contacted: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    scheduled: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    proposal_sent: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    won: "bg-green-500/10 text-green-400 border border-green-500/20",
    lost: "bg-red-500/10 text-red-400 border border-red-500/20",
    archived: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Consultation Requests</h1>
          <p className="text-sm text-white/60 mt-0.5">
            Manage inquiries from the website contact form
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <div className="relative flex items-center">
            <FiSearch className="absolute left-4 text-white/40 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, email, org, or Ref ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm bg-white/[0.02] border border-white/10 text-white placeholder-white/30 rounded-xl focus:border-[#c8a96e]/50 focus:bg-white/5 outline-none transition-all"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="relative flex items-center">
          <FiFilter className="absolute left-4 text-white/40 w-4 h-4 pointer-events-none" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter messages by status"
            className="w-full pl-11 pr-4 py-3 text-sm bg-white/[0.02] border border-white/10 text-white rounded-xl focus:border-[#c8a96e]/50 focus:bg-white/5 outline-none transition-all appearance-none cursor-pointer"
            style={{ colorScheme: "dark" }}
          >
            <option value="all" className="bg-[#0a1628] text-white">All Statuses</option>
            <option value="new" className="bg-[#0a1628] text-white">New</option>
            <option value="contacted" className="bg-[#0a1628] text-white">Contacted</option>
            <option value="scheduled" className="bg-[#0a1628] text-white">Scheduled</option>
            <option value="proposal_sent" className="bg-[#0a1628] text-white">Proposal Sent</option>
            <option value="won" className="bg-[#0a1628] text-white">Won</option>
            <option value="lost" className="bg-[#0a1628] text-white">Lost</option>
            <option value="archived" className="bg-[#0a1628] text-white">Archived</option>
          </select>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#c8a96e]/20 to-[#a07840]/10 border border-[#c8a96e]/20 rounded-xl p-4 text-white flex items-center justify-between">
          <div>
            <p className="text-xs text-[#c8a96e] font-semibold uppercase tracking-wider">New Requests</p>
            <p className="text-2xl font-bold mt-1 text-white">{newCount}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c8a96e]/20 flex items-center justify-center">
            <FiMail className="w-5 h-5 text-[#c8a96e]" />
          </div>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white/[0.02] rounded-2xl border border-white/10 overflow-hidden shadow-lg shadow-black/20">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <FiLoader className="w-6 h-6 text-[#c8a96e] animate-spin" />
          </div>
        ) : currentMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-white/50">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <FiMessageSquare className="w-8 h-8 text-white/30" />
            </div>
            <p className="text-base font-medium text-white">No requests found</p>
            <p className="text-sm mt-1">Consultation requests will appear here</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Ref / Client
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Organization
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Area of Interest
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-5 py-4 text-right text-xs font-semibold text-white/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {currentMessages.map((msg) => (
                    <tr
                      key={msg._id}
                      className={`transition-colors ${
                        msg.status === "new"
                          ? "bg-white/[0.04] hover:bg-white/[0.06]"
                          : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-[#c8a96e]">
                            {msg.refId}
                          </span>
                          <p
                            className={`text-sm ${
                              msg.status === "new"
                                ? "font-semibold text-white"
                                : "font-medium text-white/80"
                            }`}
                          >
                            {msg.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-0.5">
                          <p className="text-sm text-white/90">
                            {truncateMessage(msg.organization, 25)}
                          </p>
                          <p className="text-xs text-white/50">
                            {truncateMessage(msg.designation, 25)}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-xs text-white/70 font-medium">
                          {msg.areaOfInterest}
                        </p>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                            statusColors[msg.status] || "bg-white/10 text-white/70 border border-white/20"
                          }`}
                        >
                          {msg.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-xs text-white/60">
                          <FiCalendar className="w-3.5 h-3.5 text-white/40" />
                          {formatDate(msg.createdAt)}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-right">
                        <button
                          type="button"
                          onClick={() => handleView(msg)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-[#c8a96e]/20 hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all"
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-5 py-4 border-t border-white/10 bg-white/[0.01] flex items-center justify-between">
                <p className="text-xs text-white/50">
                  Showing {indexOfFirstMessage + 1} to{" "}
                  {Math.min(indexOfLastMessage, filteredMessages.length)} of{" "}
                  {filteredMessages.length} requests
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        type="button"
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`w-8 h-8 text-xs font-medium rounded-lg transition-colors ${
                          currentPage === index + 1
                            ? "bg-[#c8a96e] text-white"
                            : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
