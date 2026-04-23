import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "1. What is Inventory Management Software in MUN-C?",
    answer:
      "MUN-C Inventory Management Software helps businesses track, manage, and control stock in real time. It allows you to monitor inventory levels, manage purchases and sales, and reduce manual errors. This ensures better stock visibility and smoother day-to-day operations.",
  },
  {
    question: "2. How does MUN-C help in stock management?",
    answer:
      "MUN-C provides real-time stock tracking with detailed insights on available, low, and out-of-stock items. It helps manage stock inwards and outwards, track inventory across locations, and maintain accurate records, ensuring you always know your exact inventory position.",
  },
  {
    question: "3. Can I manage multiple warehouses or locations?",
    answer:
      "Yes, MUN-C allows you to manage inventory across multiple warehouses or business locations. You can track stock movement between locations, monitor availability, and maintain centralized control. This makes it easier to handle operations for growing or multi-branch businesses.",
  },
  {
    question: "4. Does MUN-C support barcode scanning?",
    answer:
      "Yes, MUN-C supports barcode-based inventory management. You can scan products for faster billing, stock updates, and tracking. This reduces manual entry errors, speeds up operations, and improves overall efficiency, especially in retail and warehouse environments.",
  },
  {
    question: "5. Can I track stock in units like bags, boxes, or MT?",
    answer:
      "Yes, MUN-C allows flexible unit management such as bags, boxes, pieces, or metric tons. You can define how many units are included in bulk quantities, helping you understand exact stock distribution and weight calculations for better inventory planning and dispatch.",
  },
  {
    question: "6. Does the software provide low stock alerts?",
    answer:
      "Yes, MUN-C provides automatic low stock alerts based on predefined thresholds. You get notified when inventory reaches a critical level, helping you restock on time. This prevents stockouts, avoids business disruptions, and ensures smooth supply chain operations.",
  },
  {
    question: "7. Can I generate inventory reports?",
    answer:
      "MUN-C offers detailed inventory reports including stock summary, stock movement, purchase, and sales reports. These reports provide valuable insights into your business performance, helping you make informed decisions and improve inventory planning and control.",
  },
  {
    question: "8. Is inventory integrated with billing and sales?",
    answer:
      "Yes, MUN-C integrates inventory directly with billing and sales modules. Whenever a product is sold, stock is automatically updated. This eliminates manual updates, reduces errors, and ensures that your inventory data always remains accurate and up to date.",
  },
  {
    question: "9. Can I manage suppliers and purchase orders?",
    answer:
      "Yes, MUN-C allows you to manage suppliers, create purchase orders, and track incoming stock. You can maintain supplier records, monitor order status, and streamline procurement processes, making your purchasing system more organized and efficient.",
  },
  {
    question: "10. Is MUN-C suitable for small and large businesses?",
    answer:
      "Yes, MUN-C is designed for both small and growing businesses. It scales according to your needs, whether you manage a single store or multiple warehouses. Its flexible features make it suitable for various industries and business sizes.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Title */}
<h2
  className="
    text-center mb-10
    text-[23px] 
    sm:text-[27px] 
    md:text-[30px] 
    lg:text-[34px] 
    xl:text-[36px] 
    2xl:text-[40px]
    font-bold
  "
  style={{
    fontFamily: "Public Sans, sans-serif",
    color: "#004CAF",
  }}
>
  FAQs
</h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-3 cursor-pointer transition-all duration-300"
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h4
                style={{
                  color: "#1E293B",
                  fontSize: 16,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                }}
              >
                {faq.question}
              </h4>

              {/* Icon */}
              <span
                className="group-hover:rotate-180 transition duration-300"
                style={{
                  color: "#7D7D7D",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                <IoIosArrowDown />
              </span>
            </div>

            {/* Answer */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
              <p className="mt-2 text-sm text-[#64748B]">
                {faq.answer}
              </p>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;