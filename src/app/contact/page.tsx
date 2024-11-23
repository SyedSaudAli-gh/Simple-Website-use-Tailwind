import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-screen p-[40px] max-w-[600px] mx-[auto] my-[0] rounded-[8px]">
      <h2 className="text-[24px] text-center mb-[20px] text-[white] font-bold">Get in Touch</h2>
      <form className="flex flex-col gap-[30px]">
        <div className="flex flex-col">
          <label className="text-[14px] text-[white] mb-[5px]" htmlFor="name">Name:</label>
          <input type="text" className="p-[10px] text-[14px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] resize-none focus:border-[#007bff] focus:outline-[none]" name="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[white] mb-[5px]" htmlFor="email">Email:</label>
          <input type="email" className="p-[10px] text-[14px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] resize-none focus:border-[#007bff] focus:outline-[none]" name="email" placeholder="Enter your email" />
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[white] mb-[5px]" htmlFor="message">Message:</label>
          <textarea name="message" className="h-[100px] p-[10px] text-[14px] border-[1px] border-[solid] border-[#ddd] rounded-[4px] resize-none focus:border-[#007bff] focus:outline-[none]" placeholder="Write your message"></textarea>
        </div>
        <button type="submit" className="px-[15px] py-[10px] text-[16px] bg-[#007bff] text-[white] border-[none] rounded-[5px] cursor-pointer [transition:background-color_0.3s_ease] hover:bg-[#0056b3]">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
