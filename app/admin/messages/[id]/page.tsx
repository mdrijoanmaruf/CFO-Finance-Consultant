"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiCalendar,
  FiLoader,
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

export default function MessageDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { status: sessionStatus } = useSession();
  
  const [message, setMessage] = useState<Consultation | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<string>("new");

  useEffect(() => {
    if (sessionStatus === "loading") return;
    if (sessionStatus === "authenticated") {
      fetchMessage();
    }
  }, [sessionStatus, resolvedParams.id]);

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/consultations/${resolvedParams.id}`);
      const data = await res.json();

      if (data.success) {
        setMessage(data.data);
        setEditStatus(data.data.status);
        setEditNotes(data.data.internalNotes || "");
      } else {
        toast.error(data.error || "Failed to fetch consultation");
        router.push("/admin/messages");
      }
    } catch (error) {
      console.error("Error fetching message:", error);
      toast.error("Failed to fetch consultation");
      router.push("/admin/messages");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!message) return;

    try {
      setIsUpdating(true);
      const res = await fetch(`/api/consultations/${message._id}`, {
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
        setMessage(data.data);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <FiLoader className="w-8 h-8 text-[#c8a96e] animate-spin" />
      </div>
    );
  }

  if (!message) return null;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/admin/messages")}
          className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-all"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Consultation Request
            <span className="text-sm font-mono font-medium bg-[#c8a96e]/10 text-[#c8a96e] border border-[#c8a96e]/20 px-2.5 py-1 rounded-md">
              {message.refId}
            </span>
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Submitted on {formatDate(message.createdAt)} via {message.source}
          </p>
        </div>
      </div>

      <div className="bg-transparent rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Client Details */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
                Client Details
              </h4>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#c8a96e] to-[#a07840] flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg shadow-[#c8a96e]/20">
                  {message.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-white text-xl leading-tight mb-1">{message.name}</p>
                  <p className="text-base text-white/60">{message.designation}</p>
                  <p className="text-base font-medium text-white/80 mt-1">{message.organization}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-white/[0.02] p-5 rounded-xl border border-white/5">
              <a
                href={`mailto:${message.email}`}
                className="flex items-center gap-4 text-[15px] text-white/70 hover:text-[#c8a96e] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="truncate">{message.email}</span>
              </a>
              <a
                href={`tel:${message.phone}`}
                className="flex items-center gap-4 text-[15px] text-white/70 hover:text-[#c8a96e] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <FiPhone className="w-4 h-4" />
                </div>
                {message.phone}
              </a>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                Area of Interest
              </h4>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <FiBriefcase className="w-4 h-4 text-[#c8a96e]" />
                <span className="text-[15px] font-medium text-white">
                  {message.areaOfInterest}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Status & Notes */}
          <div className="space-y-6 bg-white/[0.02] p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest">
                Management
              </h4>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                message.status === 'new' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-white/10 text-white/70 border border-white/20'
              }`}>
                Current: {message.status.replace("_", " ")}
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">
                Update Status
              </label>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="w-full px-4 py-3.5 text-[15px] bg-[#060e1c] border border-white/10 text-white rounded-xl focus:border-[#c8a96e]/50 focus:bg-[#0a1628] outline-none transition-all appearance-none cursor-pointer"
                style={{ colorScheme: "dark" }}
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
              <label className="block text-sm font-medium text-white/60 mb-2">
                Internal Notes (Private)
              </label>
              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Add private notes or follow-up details here..."
                rows={6}
                className="w-full px-4 py-3.5 text-[15px] bg-[#060e1c] border border-white/10 text-white placeholder-white/30 rounded-xl focus:border-[#c8a96e]/50 focus:bg-[#0a1628] outline-none transition-all resize-none custom-scrollbar-gold"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleUpdate}
                disabled={
                  isUpdating ||
                  (editStatus === message.status &&
                    editNotes === (message.internalNotes || ""))
                }
                className="w-full py-3.5 text-[15px] font-semibold text-black bg-[#c8a96e] hover:bg-[#e8c98e] border border-[#c8a96e] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {isUpdating ? (
                  <FiLoader className="w-5 h-5 animate-spin text-black" />
                ) : (
                  <FiSave className="w-5 h-5 text-black" />
                )}
                Save Changes
              </button>
            </div>
          </div>

          {/* Full Width: Request Details */}
          <div className="lg:col-span-2 space-y-4 border-t border-white/10 pt-8 mt-2">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest">
              Requirement Description
            </h4>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-[15px] text-white/80 whitespace-pre-wrap leading-relaxed custom-scrollbar-gold">
              {message.requirement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
