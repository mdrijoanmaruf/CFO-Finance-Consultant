import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// A reusable mixin that perfectly matches the website's dark/gold aesthetic
export const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: "#060e1c", // Dark navy background
  color: "#ffffff",
  iconColor: "#c8a96e", // Gold icons
  customClass: {
    popup: "border border-white/10 shadow-2xl rounded-xl",
    timerProgressBar: "bg-[#c8a96e]",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const Alert = MySwal.mixin({
  background: "#060e1c",
  color: "#ffffff",
  iconColor: "#c8a96e",
  confirmButtonColor: "#c8a96e",
  cancelButtonColor: "rgba(255, 255, 255, 0.1)",
  customClass: {
    popup: "border border-white/10 shadow-2xl shadow-black/50 rounded-2xl backdrop-blur-md",
    confirmButton: "bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white px-6 py-2.5 rounded-xl font-semibold tracking-wider shadow-lg shadow-[#c8a96e]/20 hover:scale-[1.02] transition-all",
    cancelButton: "bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-white/10 transition-all",
    title: "text-white font-bold",
    htmlContainer: "text-white/70",
  },
});
