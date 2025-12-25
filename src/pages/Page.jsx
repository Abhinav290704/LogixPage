import { useState } from "react";
import { FaWindows } from "react-icons/fa";

const Page = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-[#1F2A3A] text-white px-24 py-20">

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Icon + Name */}
          <div className="flex items-center gap-6 mb-10">
            {/* ICON PLACEHOLDER */}
            <div className="w-24 h-24 border border-white/30 flex items-center justify-center text-sm text-gray-300">
              LogixXplore<br />icon
            </div>

            <h1 className="text-4xl font-semibold">
              LogicXplorer
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 mb-12 max-w-md text-2xl leading-relaxed">
            Verilog/SystemVerilog Analyzer <br />
            and Testbench Generator
          </p>

          {/* Meta Info (Grouped) */}
          <div className="inline-block bg-white/5 rounded-lg px-5 py-4 space-y-2 text-sm text-gray-300 mb-10">
            <div><b className="text-white">Version:</b> 2.5.23</div>
            <div className="flex items-center gap-2">
              <b className="text-white">Platform:</b>
              <FaWindows />
              Windows x64
            </div>
            <div><b className="text-white">Package:</b> zip</div>
          </div>

          {/* Download Button */}
          <div>
            <button className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Download
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="mt-16">
          <p className="text-gray-200 mb-8 leading-relaxed">
            LogicXplorer is a next-generation Verilog/SystemVerilog analysis
            platform designed for engineers working with RTL design,
            verification, and netlist analysis.
          </p>

          {/* Feature List */}
          <ul className="list-disc pl-5 space-y-3 text-gray-300 mb-10">
            <li>End-to-end testbench generation for APB/AXI designs</li>
            <li>Real-time progress tracking and cancelable operations</li>
            <li>Hierarchical design exploration and schematic visualization</li>
            <li>Integrated Gate-Level Netlist (GLN) Explainer</li>
          </ul>

          {/* Installation Guide Toggle */}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="text-blue-400 underline text-sm"
          >
            Click here for installation guide
          </button>

          {/* INSTALLATION GUIDE */}
          {showGuide && (
            <div className="mt-6 bg-white/5 rounded-lg p-5 text-sm text-gray-300">
              <h2 className="font-semibold text-white mb-2">
                Installation Guide
              </h2>
              <p className="leading-relaxed">
                1. Download the zip package  
                <br />
                2. Extract files  
                <br />
                3. Run the executable  
                <br />
                4. Start exploring LogicXplorer
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default Page;
