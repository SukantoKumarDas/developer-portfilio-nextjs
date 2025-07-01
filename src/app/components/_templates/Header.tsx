import Navbar from './NavbarSmall';
import NavbarLarge from './NavbarLarge';

export default function Header() {
    return (
        <div className="bg-black fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto">
                <div className="hidden lg:block">
                    <NavbarLarge/>
                </div>
                <div className="block lg:hidden">
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}
