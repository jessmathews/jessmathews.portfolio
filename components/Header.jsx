import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-8 xl:py-12 text-white w-full">
            {/* desktop navbar  */}
            <Navbar />

            <div className="md:hidden flex justify-end px-6">
                <MobileNav />
            </div>
        </header>
    )
}

export default Header