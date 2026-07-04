"use client";
import { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  // EDIT HERE: Put real bank credentials in these values
  const bankDetails = {
    accountNumber: "XXXXXXXXXX", 
    bankName: "[ INSERT BANK NAME ]",
    accountName: "[ INSERT ACCOUNT NAME ]"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-ivory text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <span className="font-caps text-xs tracking-super text-gold block">CONTRIBUTIONS & LOVE GIFTS</span>
        <h2 className="text-3xl md:text-4xl font-display font-light">Registry & Support</h2>
        <div className="w-12 h-px bg-gold mx-auto" />
        <p className="font-body opacity-80 max-w-lg mx-auto font-light leading-relaxed">
          Your presence at our celebration is the greatest treasure. However, if you wish to honor us with a monetary gift toward our new home, details are respectfully appended below.
        </p>

        <div className="border border-gold/30 p-8 max-w-sm mx-auto bg-primary-light space-y-4">
          <div>
            <p className="font-caps text-[10px] tracking-widest text-gold">BANK NAME</p>
            <p className="font-display text-lg">{bankDetails.bankName}</p>
          </div>
          <div>
            <p className="font-caps text-[10px] tracking-widest text-gold">ACCOUNT NAME</p>
            <p className="font-display text-lg">{bankDetails.accountName}</p>
          </div>
          <div className="pt-2">
            <p className="font-caps text-[10px] tracking-widest text-gold mb-1">ACCOUNT NUMBER</p>
            <span className="font-display text-2xl tracking-wider block text-gold-light">{bankDetails.accountNumber}</span>
            <button 
              onClick={handleCopy}
              className="mt-4 inline-block font-caps text-[10px] tracking-widest border border-gold/40 px-4 py-1.5 hover:bg-gold hover:text-primary transition-all duration-300"
            >
              {copied ? "COPIED TO CLIPBOARD" : "COPY ACCOUNT NUMBER"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}