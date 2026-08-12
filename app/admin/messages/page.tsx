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

interface ViewModal {
  isOpen: boolean;
  message: Consultation | null;
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

  const [viewModal, setViewModal] = useState<ViewModal>({
    isOpen: false,
    message: null,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<string>("new");

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
    setEditNotes(message.internalNotes || "");
    setEditStatus(message.status);
    setViewModal({ isOpen: true, message });
  };

  const handleUpdate = async () => {
    if (!viewModal.message) return;

    try {
      setIsUpdating(true);
      const res = await fetch(`/api/consultations/${viewModal.message._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: editStatus,
          internalNotes: editNotes,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Consultation updated successfully");
        setViewModal({ isOpen: false, message: null });
        fetchMessages();
      } else {
        toast.error(data.error || "Failed to update consultation");
      }
    } catch (error) {
      console.error("Error updating consultation:", error);
      toast.error("Failed to update consultation");
    } finally {
      setIsUpdating(false);
    }
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
    new: "bg-blue-100 text-blue-700",
    contacted: "bg-yellow-100 text-yellow-700",
    scheduled: "bg-purple-100 text-purple-700",
    proposal_sent: "bg-orange-100 text-orange-700",
    won: "bg-green-100 text-green-700",
    lost: "bg-red-100 text-red-700",
    archived: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Consultation Requests</h1>
          <p className="text-sm text-gray-600 mt-0.5">
            Manage inquiries from the website contact form
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Search */}
        <div className="lg:col-span-2">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, email, org, or Ref ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="relative">
          <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter messages by status"
            className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="scheduled">Scheduled</option>
            <option value="proposal_sent">Proposal Sent</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-lg p-3 text-white flex items-center justify-between">
          <div>
            <p className="text-xs opacity-90">New Requests</p>
            <p className="text-2xl font-bold mt-0.5">{newCount}</p>
          </div>
          <FiMail className="w-8 h-8 opacity-20" />
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <FiLoader className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        ) : currentMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500">
            <FiMessageSquare className="w-10 h-10 text-gray-300 mb-2" />
            <p className="text-base font-medium">No requests found</p>
            <p className="text-xs mt-1">Consultation requests will appear here</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Ref / Client
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Organization
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Area of Interest
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-2.5 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentMessages.map((msg) => (
                    <tr
                      key={msg._id}
                      className={`transition-colors ${
                        msg.status === "new"
                          ? "bg-blue-50/30 hover:bg-blue-50/60"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono text-gray-400">
                            {msg.refId}
                          </span>
                          <p
                            className={`text-sm ${
                              msg.status === "new"
                                ? "font-semibold text-gray-900"
                                : "font-medium text-gray-700"
                            }`}
                          >
                            {msg.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        <div className="flex flex-col gap-0.5">
                          <p className="text-sm text-gray-800">
                            {truncateMessage(msg.organization, 25)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {truncateMessage(msg.designation, 25)}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <p className="text-xs text-gray-600 font-medium">
                          {msg.areaOfInterest}
                        </p>
                      </td>
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                            statusColors[msg.status] || "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {msg.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-xs text-gray-600">
                          <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                          {formatDate(msg.createdAt)}
                        </div>
                      </td>
                      <td className="px-4 py-2.5 whitespace-nowrap text-right">
                        <button
                          type="button"
                          onClick={() => handleView(msg)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 rounded-md transition-all"
                        >
                          <FiEye className="w-3.5 h-3.5" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                <p className="text-xs text-gray-600">
                  Showing {indexOfFirstMessage + 1} to{" "}
                  {Math.min(indexOfLastMessage, filteredMessages.length)} of{" "}
                  {filteredMessages.length} requests
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2.5 py-1 text-xs border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      type="button"
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2.5 py-1 text-xs border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* View/Edit Modal */}
      {viewModal.isOpen && viewModal.message && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
              <div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  Consultation Request
                  <span className="text-xs font-mono bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                    {viewModal.message.refId}
                  </span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setViewModal({ isOpen: false, message: null })}
                className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-gray-500"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Client Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center text-white font-semibold shrink-0">
                    {viewModal.message.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{viewModal.message.name}</p>
                    <p className="text-sm text-gray-600">{viewModal.message.designation}</p>
                    <p className="text-sm font-medium text-gray-800">{viewModal.message.organization}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={`mailto:${viewModal.message.email}`}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  >
                    <FiMail className="w-4 h-4" />
                    {viewModal.message.email}
                  </a>
                  <a
                    href={`tel:${viewModal.message.phone}`}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  >
                    <FiPhone className="w-4 h-4" />
                    {viewModal.message.phone}
                  </a>
                </div>
              </div>

              {/* Right Column: Status & Notes */}
              <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Update Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="proposal_sent">Proposal Sent</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Internal Notes
                  </label>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Add private notes here..."
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-200 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Full Width: Request Details */}
              <div className="md:col-span-2 space-y-4 border-t border-gray-100 pt-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Area of Interest
                  </h4>
                  <p className="text-sm font-medium text-gray-900 bg-gray-100 inline-block px-3 py-1 rounded-md">
                    {viewModal.message.areaOfInterest}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Requirement Description
                  </h4>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed shadow-sm">
                    {viewModal.message.requirement}
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Submitted on {formatDate(viewModal.message.createdAt)} via {viewModal.message.source}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3 justify-end rounded-b-xl">
              <button
                type="button"
                onClick={() => setViewModal({ isOpen: false, message: null })}
                className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                disabled={
                  isUpdating ||
                  (editStatus === viewModal.message.status &&
                    editNotes === (viewModal.message.internalNotes || ""))
                }
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isUpdating ? (
                  <FiLoader className="w-4 h-4 animate-spin" />
                ) : (
                  <FiSave className="w-4 h-4" />
                )}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
