import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '8670226518';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-green-600 transition transform md:hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.543 4.053 1.504 5.77L.029 24l6.373-1.509A11.975 11.975 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm4.336 16.29c-.201.567-1.192 1.083-1.566 1.117-.398.036-.735.171-2.58-.54-2.176-.845-3.57-3.001-3.683-3.138-.11-.139-.889-1.181-.889-2.254s.564-1.586.765-1.803c.204-.216.441-.271.588-.271.147 0 .293 0 .42.006.135.005.31-.051.49.373.18.424.615 1.391.666 1.49.05.097.083.206.014.332-.068.126-.102.21-.2.33-.1.12-.21.27-.298.364-.089.096-.183.2-.08.392.104.192.464.764.995 1.235.683.613 1.263.798 1.45.89.188.091.3.08.413-.046.113-.125.47-.548.596-.736.125-.188.262-.159.43-.095.168.064 1.072.506 1.257.598.186.092.308.137.352.215.046.08.046.467-.155 1.033z" />
      </svg>
      <span className="hidden sm:inline">Chat with us on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
