import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";  // Import close icon

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showHelpMessage, setShowHelpMessage] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowHelpMessage(false);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setShowHelpMessage(true);
  };

  return (
    <div>
      {/* Help Message */}
      {showHelpMessage && !isChatOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '25px',
            backgroundColor: '#ffffff',
            color: '#273b97',
            padding: '18px 18px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1002,
          }}
         
        >
          Hi, How can I help you?
        </div>
      )}

      <div
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '20px',
          backgroundColor: '#273b97',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 1001,
        }}
        className="md:w-20 md:h-20 w-12 h-12" // Smaller on mobile
      >
        {isChatOpen ? (
          <IoIosArrowDown color="white" size="30px" />
        ) : (
          <FaRobot color="white" size="30px" />
        )}
      </div>

      {isChatOpen && (
        <div style={{ position: 'fixed', bottom: '90px', right: '20px', zIndex: 1000 }}>
          <div style={{ position: 'relative' }}>
            {/* Custom close button */}
            <IoIosCloseCircle
              size={40}
              className='text-gray-950 opacity-20'
              style={{ position: 'absolute', top: '12px', right: '10px', cursor: 'pointer', zIndex: 1001 }}
              onClick={closeChat}  // Close chat on click
            />

            <iframe
              title="Fastbots Chatbot"
              src="https://app.fastbots.ai/embed/cm1onkoqy1lhcr4bixw7c0upw"
              style={{
                width: '90vw', 
                height: '80vh', 
                maxWidth: '400px', 
                maxHeight: '600px', 
                border: 'none',
                borderRadius: '10px',
              }}
              allow="microphone; camera"
              className="md:w-[400px] md:h-[600px] w-[320px] h-[500px]" // Responsive classes
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
