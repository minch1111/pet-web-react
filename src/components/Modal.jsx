import { Children } from "react";
import ReactDOM from "react-dom"

const Modal = ({children})=>{
    return ReactDOM.createPortal(children,document.body)
}
export default Modal;