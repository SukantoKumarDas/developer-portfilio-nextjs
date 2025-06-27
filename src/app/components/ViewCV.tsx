export default function ViewCV() {
    return (
        <div id="view-cv">
            <div className="py-10 lg:py-20 max-w-7xl mx-auto relative space-y-10">
                <h1 className="text-center text-5xl font-bold">Preview My CV</h1>
                <div className="flex flex-col justify-center items-center">
                    <iframe
                        src="/file/Sukanto_CSE_SUST.pdf#navpanes=0"
                        className="w-full sm:w-[50%] h-[400px] sm:h-[600px]"
                        title="CV Preview"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
