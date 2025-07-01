export default function Divider() {
    return (
        <div className="relative my-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-indigo-300" />
            </div>
        </div>
    );
}