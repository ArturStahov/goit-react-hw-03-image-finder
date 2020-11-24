import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css"

export default function ErrorInfo() {
    return info({
        title: "No correct input",
        text: "Please search any text!!",
        delay: 3000
    })
}