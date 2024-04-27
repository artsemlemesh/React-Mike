import './modal.css'



export default function Modal({id, header, body, footer, onClose}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="body">
            {body ? (
                body
            ) : (
                <div>
                    <p>this is our modal body</p>
                </div>
            )}
        </div>
        <div className="footer">
            {footer ? footer : <h1>Footer</h1>}
        </div>
      </div>
    </div>
  );
}
