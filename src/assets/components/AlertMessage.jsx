import Swal from "sweetalert2";
import '../styles/alert.css'; // Tailwind animation styles

// Success Toast
export const alertSuccess = (message) => {
  Swal.fire({
    icon: "success",
    text: message || "Success!",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500, // 25 seconds
    timerProgressBar: true,
    showClass: {
      popup: 'toastShow'
    },
    hideClass: {
      popup: 'toastHide'
    },
    customClass: {
      popup: 'bg-white text-sm text-green-700 border border-green-300 shadow-lg rounded-md p-4',
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

// Error Toast
export const alertError = (message) => {
  Swal.fire({
    icon: "error",
    text: message || "Something went wrong!",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500, // 25 seconds
    timerProgressBar: true,
    showClass: {
      popup: 'toastShow'
    },
    hideClass: {
      popup: 'toastHide'
    },
    customClass: {
      popup: 'bg-white text-sm text-red-700 border border-red-300 shadow-lg rounded-md p-4',
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};
