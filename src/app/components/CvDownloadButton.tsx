import { Button } from '@/components/ui/button';

export default function CvDownload() {
    return (
        <a href="/file/Sukanto_CSE_SUST.pdf" download className="text-center">
            <Button className="border-1 border-indigo-400 rounded-sm bg-transparent hover:bg-transparent transition-all duration-150 hover:scale-105">
                <span className="text-sm font-bold">DOWNLOAD CV</span>
            </Button>
        </a>
    );
}
