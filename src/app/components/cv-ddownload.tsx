import { Button } from "@/components/ui/button";

export default function CvDownload() {
    return (
        <a href="/file/Sukanto_CSE_SUST.pdf" download>
            <Button className="hover:text-lime-500 border-1 border-lime-400 rounded-sm bg-transparent hover:bg-transparent">
                <span className="text-xs font-bold">DOWNLOAD CV</span>
            </Button>
        </a>
    );
}