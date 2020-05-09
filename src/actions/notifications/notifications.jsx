import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const timeout = 3000;
export const successNotifiy = (text = "OK", message = "Success") => {
  iziToast.success({
    title: text,
    message: message,
    timeout: timeout
  });
};
export const failureNotify = (text = "Error", message = "Some error") => {
  iziToast.error({
    title: text,
    message: message,
    timeout: timeout
  });
};