import Swal from "sweetalert2"

export const createAlert = (icon, text) => {
  return Swal.fire({
    title: text || "Something LONG",
    icon: icon || "question",
    timer: 2000
  })
}