export default async function Footer() {
    return (
        <footer className="border-t-2 border-black bg-zinc-800">
            <div className="max-w-7xl mx-auto">
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 space-y-2">
                    <div className="col-span-1 flex flex-col justify-center items-center sm:items-start space-y-2">
                        <span className="text-indigo-400 text-lg font-bold">Sukanto Kumar Das</span>
                        <span className="text-indigo-500 white font-bold">Web Developer</span>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center sm:items-end space-y-2">
                        <span className="text-white">Last updated: 12th june 2025</span>
                        <span className="text-white">© 2025 Sukanto Kumar Das. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}