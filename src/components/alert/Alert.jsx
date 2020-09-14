import Swal from "sweetalert2";

export const AlertInfo = (props) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn button",
      cancelButton: "btn button-red ml-1",
    },
    buttonsStyling: false,
  });
  return swalWithBootstrapButtons
    .fire("Exito!", "", "success")
    .then((result) => {
      if (result.isConfirmed) {
        props.history.push("/");
      }
    });
};
