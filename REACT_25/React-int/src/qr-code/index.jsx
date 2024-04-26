// import { useState } from "react";
// import QRCode from 'react-qr-code'

// export default function QRCodeGenerator({inputType}) {

//   const [qrCode, setQrCode] = useState('');
//   const [input, setInput] = useState('');
//   console.log(qrCode)

//   function handleGenerateQrCode() {
//     setQrCode(input);
//   }

//   return (
//     <div>
//       <h1>QR Code Generator</h1>
//       <div>
//         <input
//           onChange={(e) => setInput(e.target.value)}
//           type={inputType}
//           name="qr-code"
//           placeholder="Enter your value here"
//         />
//         <button
//           disabled={input && input.trim() !== "" ? false : true}
//           onClick={handleGenerateQrCode}
//         >
//           Generate
//         </button>
//       </div>
//       <div>
//         <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff' />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator({size}) {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

    function handleGeneratedCode(){
        setQrCode(input)
    }

  return (
    <div>
      <h1>Generate code</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value"
        />
        <button
            onClick={handleGeneratedCode}
            disabled={input && input.trim() !== '' ? false : true}
        >Generate
        </button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={size}  />
      </div>
    </div>
  );
}
