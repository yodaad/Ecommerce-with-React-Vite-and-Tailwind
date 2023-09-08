import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center top-0 bottom-0 left-0 right-0 z-50">
      <div className="modal-root bg-slate-100 opacity-90 fixed inset-0"></div>
      <div className="z-50">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}

export { Modal };
