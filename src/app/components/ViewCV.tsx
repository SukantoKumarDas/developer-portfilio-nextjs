"use client";
export default function ViewCV() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/file/Sukanto_CSE_SUST.pdf';
        link.download = 'Sukanto_CSE_SUST.pdf';
        link.click();
    };

    return (
        <div id="view-cv" className="py-16 lg:py-20 max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Preview My CV
                </h1>
                <p className="text-gray-600 text-lg">
                    Take a look at my professional background
                </p>
            </div>

            {/* CV Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">Sukanto_CSE_SUST.pdf</h3>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                    </button>
                </div>

                {/* PDF Viewer */}
                <div className="p-6">
                    <div className="rounded-lg overflow-hidden border border-gray-300">
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
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                            Open in New Tab
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}