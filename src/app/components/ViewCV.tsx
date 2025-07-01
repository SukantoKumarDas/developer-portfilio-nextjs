"use client";
export default function ViewCV() {

    return (
        <div id="view-cv" className="py-16 lg:py-20 max-w-6xl mx-auto px-4 scroll-mt-[44px] lg:scroll-mt-[68px]">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Preview CV</h1>
                <p className="text-gray-600 text-lg">
                    Take a look at my professional background
                </p>
            </div>


            {/* CV Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">Sukanto_CSE_SUST.pdf</h3>
                </div>

                {/* PDF Viewer */}
                <div className="px-6 pb-6">
                    <div className="verflow-hidden border border-gray-300">
                        <iframe
                            src="/file/Sukanto_CSE_SUST.pdf#navpanes=0"
                            className="w-full h-[600px] lg:h-[700px]"
                            title="CV Preview"
                        ></iframe>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6">
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={() => window.open('/file/Sukanto_CSE_SUST.pdf', '_blank')}
                            className="bg-indigo-300 hover:bg-indigo-400 px-6 py-2 rounded-lg transition-colors duration-200"
                        >
                            Open in New Tab
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}