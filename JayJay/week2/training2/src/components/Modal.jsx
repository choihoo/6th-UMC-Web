import { useEffect } from "react";

export default function Modal({ isOpen, setModalOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <div className="modal_container">
          <div className="modal_form">
            <h2 className="modal_title">안녕하세요</h2>
            <h3 className="modal_content">모달 내용은 어쩌고 저쩌고..</h3>
          </div>
          <div className="close_box">
            <button id="closeButton" onClick={() => setModalOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
