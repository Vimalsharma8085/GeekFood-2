const Footer = () => {
    return (
      <footer className="bg-gray-500 text-white py-8">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="Logo" className="mx-auto mb-4 w-32 h-auto" />
  
          {/* Quote */}
          <p className="text-lg mb-4">
            {"Food is not just fuel; it's an experience. Savor every bite!"}
          </p>
  
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="text-white hover:text-gray-400 transition duration-200"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm6 17.5c0 .39-.12.75-.34 1.06-.45.65-1.2 1.09-2.06 1.09-1.52 0-2.94-.68-3.93-1.76-.8-.78-1.26-1.83-1.26-2.96 0-.39.12-.75.34-1.06.45-.65 1.2-1.09 2.06-1.09 1.52 0 2.94.68 3.93 1.76.8.78 1.26 1.83 1.26 2.96zM12 15.8c-1.36 0-2.6-.54-3.54-1.46C7.54 13.4 7 12.16 7 11c0-1.36.54-2.6 1.46-3.54C10.4 6.54 11.64 6 13 6c1.16 0 2.4.54 3.54 1.46C18.46 8.4 19 9.64 19 11c0 1.16-.54 2.4-1.46 3.54C14.4 15.26 13.16 15.8 12 15.8z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="text-white hover:text-gray-400 transition duration-200"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24h21.351C23.404 24 24 23.404 24 22.675V1.325C24 .596 23.404 0 22.675 0zM12 24V12H9v-3h3V6.3C12 3.42 13.791 1 16.688 1c1.177 0 2.191.087 2.484.125v2.865h-1.708C16.914 4 16 5.184 16 7.066V9h3l-.5 3h-2.5v12h-3z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="text-white hover:text-gray-400 transition duration-200"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M23.643 4.937c-.835.37-1.732.621-2.67.735 1.02-.613 1.798-1.584 2.165-2.744-.952.564-2.005.973-3.127 1.194-.895-.955-2.17-1.55-3.596-1.55-2.719 0-4.925 2.206-4.925 4.92 0 .386.045.76.126 1.124-4.092-.205-7.72-2.163-10.15-5.144-.422.724-.663 1.563-.663 2.465 0 1.702.866 3.197 2.178 4.074-.803-.025-1.56-.246-2.227-.616v.062c0 2.374 1.684 4.352 3.918 4.806-.414.112-.849.172-1.296.172-.316 0-.623-.031-.924-.087.623 1.949 2.433 3.37 4.577 3.41-1.676 1.313-3.783 2.099-6.073 2.099-.395 0-.786-.023-1.17-.069 2.167 1.392 4.752 2.206 7.53 2.206 9.036 0 13.973-7.485 13.973-13.974 0-.213 0-.426-.015-.637.96-.693 1.8-1.562 2.462-2.549z" />
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="text-white hover:text-gray-400 transition duration-200"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12c0 2.194.728 4.206 1.953 5.859L1 22l4.141-1.953C5.794 19.272 7.806 20 10 20c5.514 0 10-4.486 10-10S15.514 2 12 2zm5.413 14.283c-.39.39-.67.54-1.027.54-.64 0-1.23-.4-1.6-1-.123-.206-.183-.44-.183-.681 0-.206.062-.452.184-.681.39-.64.97-1 1.6-1 .357 0 .637.151 1.027.54.39.39.54.67.54 1.027s-.151.637-.54 1.027zM10 15.5c-.64 0-1.23-.4-1.6-1-.123-.206-.183-.44-.183-.681 0-.206.062-.452.184-.681.39-.64.97-1 1.6-1 .357 0 .637.151 1.027.54.39.39.54.67.54 1.027s-.151.637-.54 1.027c-.39.39-.67.54-1.027.54zm0-3c-1.09 0-2.02.75-2.48 1.83-.12.29-.18.54-.18.75 0 .2.06.46.18.75.47 1.08 1.39 1.83 2.48 1.83 1.09 0 2.02-.75 2.48-1.83.12-.29.18-.54.18-.75 0-.2-.06-.46-.18-.75-.47-1.08-1.39-1.83-2.48-1.83z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  